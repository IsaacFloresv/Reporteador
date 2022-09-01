const URL = process.env.BACKEND_URL;
URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
          showError: false,
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
                showError: true,
              });
            });
          }
        });
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
            return res.json().then((data) => {});
          } else if (res.status === 401) {
            return res.json().then((data) => {
              setStore({
                status: false,
                showError: true,
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
            console.log(store.notes);
          })
          .catch((error) => console.error(error));
      },
      getNotes: () => {
        const store = getStore();
        console.log(store.notes);
        fetch(`${URL}/notes`)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              notes: data.Notes.reverse(),
            });
            console.log(store.notes);
          });
      },
      deleteNote: (index) => {
        const store = getStore();
        fetch(`${URL}/notes`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: store.notes[index] }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        const notes = [...store.notes];
        const newNotes = notes.filter((item, i) => i != index);
        setStore({
          notes: newNotes,
        });
      },
    },
  };
};

export default getState;
