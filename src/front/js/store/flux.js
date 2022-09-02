
const URL = `${process.env.BACKEND_URL}/api`


const getState = ({ getStore, getActions, setStore }) => {

  return {
    store: {
      docs:[],
      token: "",
      user: {
        id: "",
        name: "",
        lastname: "",
        email: "",
        loggedIn: false,
      },
      alert: {
        type: "",
        msg: "",
        show: false,
      },
      notes: [],
      status: "",
      showError: false,
      clients: [],
      currentClient: {
        user: {
          delete: false,
          dni: "",
          first_lastname: "",
          id: "",
          is_active: true,
          lawyer_id: "",
          name: "",
          second_lastname: "",
        },
        contact: {
          address: "",
          email: "",
          phone: "",
        },
      },
    },
    actions: {
      setAlert: (payload) => {
        setStore({
          alert: payload,
        });
      },
      clearAlert: () => {
        setStore({
          alert: {
            type: "",
            msg: "",
            show: false,
          },
        });
      },
      clearStatus: () => {
        setStore({
          status: false,
        });
      },
      putCurrentPage: () => {
        return "hello";
      },
      register: (values) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(values);
        const requestOptions = {
          method: "POST",
          //cors:"no-cors",
          headers: myHeaders,
          body: raw,
        };
        const store = getStore();
        fetch(`${URL}/user`, requestOptions).then((res) => {
          if (res.status === 200) {
            return res.json().then((data) => {
              setStore({
                user: {
                  ...store.user,
                  ...data.user,
                },
                status: true,
              });
              //("store", store),
              "status", store.status;
              getActions().setAlert({
                type: "success",
                msg: data.msg,
                show: true,
              });
            });
          } else if (res.status === 401) {
            return res.json().then((data) => {
              setStore({
                status: false,
              });
            });
          }
        });
      },
      AllFiles: () => {
        const myHeaders = new Headers();
        let local = JSON.parse(localStorage.getItem("Dropcase"));
        myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Authorization", `Bearer ${local.token}`);
        const requestOptions = {
          headers: myHeaders,
        };
        fetch(`${URL}/allfiles`, requestOptions).then(res =>
          res.json().then((data) => setStore({docs:data.Files})))
          let store = getStore()  
      },

      login: (values) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(values);
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          cors: "no-cors",
          body: raw,
        };
        values.email;
        raw.email;
        fetch(`${URL}/login`, requestOptions).then((res) => {
          if (res.status === 200) {
            setStore({
              loggedIn: true,
            });
            return res.json().then((data) => {
              localStorage.setItem(
                "Dropcase",
                JSON.stringify({
                  token: data.token,
                  email: data.user.Email,
                  name: `${data.user.Name} ${data.user.Lastname}`,
                  id: data.user.ID,
                  loggedIn: true,
                })
              );
              const userinfo = JSON.parse(localStorage.getItem("Dropcase"));
              if (userinfo !== null) {
                setStore({
                  user: {
                    ...userinfo,
                  },
                });
              }
            });
          } else if (res.status === 400) {
            return res.json().then((data) => {
              if (data.status === "invalid_credentials") {
                setStore({
                  showError: true,
                });
              }
            });
          }
        });
      },
      forgotPassword: (email) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(email);
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          cors: "no-cors",
          body: raw,
        };
        return fetch(`${URL}/reset`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            data.email;
            localStorage.setItem(
              "Dropcase",
              JSON.stringify({
                email: data.email,
              })
            );
            return data.msg;
          });
      },
      verificationCode: (code) => {
        let local = JSON.parse(localStorage.getItem("Dropcase"));
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
          code: code.code,
          email: local.email,
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          cors: "no-cors",
          body: raw,
        };
        fetch(`${URL}/vcode`, requestOptions).then((res) => {
          if (res.status === 200) {
            setStore({
              status: true,
            });
          } else if (res.status === 401) {
            return res.json().then((data) => {
              setStore({
                status: false,
              });
            });
          }
        });
      },

      newPassword: (password) => {
        let local = JSON.parse(localStorage.getItem("Dropcase"));
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
          new_password: password.new_password,
          email: local.email,
        });
        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          cors: "no-cors",
          body: raw,
        };

        return fetch(`${URL}/reset`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            return data.msg;
          });
      },
      updateFile: (index) => {
        let files =getStore().docs
        let newfiles = files.filter((item,i)=>i!==index)
        setStore({
          docs:newfiles})

      },
      getFile: (index) => {
        let files =getStore().docs
        let newfiles = files.filter((item,i)=>i==index)
        let file= newfiles.find((url)=>url.url);
        return (file)        
      },
      checkToken: () => {
        let tokenCheck = JSON.parse(localStorage.getItem("Dropcases"));
        if (tokenCheck !== null) {
          return fetch(`${URL}/validate`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenCheck.token}`,
              },
            })
            .then((response) => {
              if (response.status === 401) {
                throw new Error("Token Expired, please login.");
              }
              if (!response.ok) throw new Error(response.status);
              return response.json();
            })
            .then((data) => {
              setStore({
                user: {
                  ...getStore().user,
                  ...tokenCheck,
                  ...data.user,
                  loggedIn: true,
                },
              });
            })
            .catch((error) => console.error(error));
        }
      },

      upload: (values) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "multipart/form-data");
        let data = new FormData();
        let payload = {
          ...values,
        };
        data.append("file", values);
        console.log(payload);
        console.log(data);
        for (let key in payload) {
          console.log(key);

          if (key === "file") {
            data.append("file", payload[key]);
          } else {
            data.append(key, payload[key]);
          }
        }
        var serializeForm = function (form) {
          var obj = {};
          var formData = form;
          for (var key of formData.keys()) {
            obj[key] = formData.get(key);
          }
          return obj;
        };
        console.log(serializeForm(data));
        return fetch(`${URL}/upload`, {
          method: "POST",
          //cors: "no-cors",
          headers: myHeaders,
          body: data,
        }).then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        });

      },
      userIsLogin: () => {
        const userinfo = JSON.parse(localStorage.getItem("Dropcase"));
        if (userinfo !== null) {
          setStore({
            user: {
              ...userinfo,
            },
          });
        }
      },
      logout: () => {
        localStorage.clear();
      },
      saveNote: (description) => {
        const store = getStore();
        const raw = {
          user_id: store.user.id,
          data: description,
          delete: false,
        };
        fetch(`${URL}/notes`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(raw),
          })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              notes: [data.Notes, ...store.notes],
            });
          })
          .catch((error) => console.error(error));
      },
      getNotes: () => {
        const store = getStore();
  
        fetch(`${URL}/notes`)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              notes: data.Notes.reverse(),
            });
          });
      },
      deleteNote: (index) => {
        const store = getStore();
        fetch(`${URL}/notes`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: store.notes[index]
            }),
          })
          .then((res) => res.json())
          .then((data) => console.log(data));
        const notes = [...store.notes];
        const newNotes = notes.filter((item, i) => i != index);
        setStore({
          notes: newNotes,
        });
      },
      addClient: (userdata, usercontact) => {
        const store = getStore();
        let clientID = "";
        // Save Client without email, phone or address
        fetch(`${URL}/client`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        })
          .then((res) => res.json())
          .then((data) => {
            clientID = data.client.id;
            console.log(data.client);
            setStore({
              clients: [
                ...store.clients,
                {
                  ...data.client,
                },
              ],
            });
          })
          .catch((error) => console.error(error))
          .then(() => {
            console.log(clientID);
            // Save email, phone, address
            const body = {
              client_id: clientID,
              ...usercontact,
            };
            fetch(`${URL}/usercontact`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => console.error(error));
          });
      },
      getClients: () => {
        const store = getStore();
        fetch(`${URL}/client?userid=${store.user.id}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              clients: data.clients,
            });
            console.log(store.clients);
          });
      },
      getClient: (id) => {
        fetch(`${URL}/client/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({
              currentClient: {
                user: data.user,
                contact: "",
              },
            });
          })
          .catch((error) => console.log(error));
      },
      deleteClient: (index) => {
        const clients = getStore().clients;
        const newclients = clients.filter((e, i) => i !== index);
        setStore({
          clients: newclients,
        });
      },
      clientSearch: (param) => {
        const clients = getStore().clients;
        const newclients = clients.filter((e, i) => e.name.includes(param));
        setStore({
          clients: newclients,
        });
      },
      addtofavorite: (index) => {
        const store = getStore();
        const newclients = [...store.clients];
        newclients[index].favorite
          ? (newclients[index] = {
              ...newclients[index],
              favorite: false,
            })
          : (newclients[index] = {
              ...newclients[index],
              favorite: true,
            });
        setStore({
          clients: newclients,
        });
        console.log(store.clients);
      },
    },
  };
};

export default getState;