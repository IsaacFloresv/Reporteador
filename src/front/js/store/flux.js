import { Alert } from "bootstrap";

const URL = process.env.BACKEND_URL;

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
      status: "",
    },
    actions: {
      setAlert: (payload) => {
        setStore({ alert: payload });
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
        return fetch(`${URL}/user`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log("data ", data);
            setStore({
              user: {
                ...store.user,
                ...data.user,
              },
              status: data.status,
            });
            console.log("store", store), console.log("status", store.status);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });

            return store;
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
        const store = getStore();
        return fetch(`${URL}/login`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (typeof data.user === "undefined") throw new Error(data.msg);
            setStore({
              user: {
                ...data.user,
                loggedIn: true,
              },
              token: data.token,
            });
            console.log("store", store);
            localStorage.setItem(
              "Dropcase",
              JSON.stringify({
                token: data.token,
                email: data.user.email,
              })
            );
          })
          .catch(
            (error) =>
              getActions().setAlert({
                type: "danger",
                msg: error.message,
                show: true,
              }),
            console.log("alert", alert.msg)
          );
      },
      forgotPassword: (email) => {
        return fetch(`${URL}/reset`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            return data.msg;
          });
      },
      checkToken: () => {
        let tokenCheck = JSON.parse(localStorage.getItem("Dropcases"));

        if (tokenCheck !== null) {
          // token is present, so do something (set loggedIn, maybe?)
          // console.log(tokenCheck);
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

      uploadFiles: (files, user) => {
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("usuario", user);
          formData.append("archivo", files[i]);
          fetch(`${URL}/upload`, {
            method: "POST",
            body: formData,
          }).then((res) => console.log(res));
        }
      },
    },
  };
};

export default getState;
