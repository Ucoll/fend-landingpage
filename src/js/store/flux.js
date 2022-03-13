import { database } from "../index.js";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
	  userData: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login: async (email, password) => {
        try {
          const tryLogin = await fetch(`${database}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          if (!tryLogin.ok) {
            throw new Error("Failed with HTTP code " + tryLogin.status);
          }

          const data = await tryLogin.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (err) {
          console.error(`An error ocurred during login: ${err}`);
        }
      },

      syncToken: async () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined) {
          setStore({ token: token });
        }

        try {
          const getUserData = await fetch(`${database}/me`, {
            headers: {
              "Content-Type": "application/json",
			  "Authorization": 'Bearer '+ token
            },
          });
          if (!getUserData.ok) {
            throw new Error("Failed with HTTP code " + getUserData.status);
          }

          const data = await (getUserData.json());
		  let userData = JSON.stringify(data)
          sessionStorage.setItem("userData", userData);
          setStore({ userData: userData});
          return true;

        } catch (err) {
          console.error(`An error ocurred during login: ${err}`);
        }
      },

      logOut: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
        setStore({ userData: null });
      },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
