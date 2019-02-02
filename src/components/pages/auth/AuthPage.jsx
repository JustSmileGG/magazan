import React from "react";
import Layount from "../../public/Layout";
import Component from "react-component-component";
import { API_KEY } from "../../../libs/Env";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AuthPage = ({ user, setUser }) => {
  return (
    <Layount user={user} setUser={setUser}>
      <Component
        initialState={{
          email: "",
          password: ""
        }}
      >
        {({ state, setState }) => {
          return (
            <div className="auth-page">
              <Tabs>
                <TabList>
                  <Tab>Sing in</Tab>
                  <Tab>Sing up</Tab>
                </TabList>
                <TabPanel>
                  <div className="auth-page__title">Sing in</div>
                  <form
                    onSubmit={async event => {
                      event.preventDefault();
                      // const { email, password } = state;

                      const resp = await fetch(
                        "https://api.airtable.com/v0/app3ZVN7Q91i54kvo/Users",
                        {
                          method: "GET",
                          headers: {
                            Authorization: `Bearer ${API_KEY}`,
                            "Content-Type": "application/json"
                          }
                        }
                      );
                      try {
                        if (resp.ok) {
                          const respData = await resp.json();
                          console.log(`Resp data: ${respData}`);
                        } else {
                          const { message } = await resp.json();
                          throw Error(message);
                        }
                      } catch (e) {
                        console.error(e.message);
                      }
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={state.email}
                      onChange={({ target: { value } }) =>
                        setState(state => ({ state, email: value }))
                      }
                      placeholder="Email"
                    />
                    <input
                      required
                      type="password"
                      value={state.password}
                      onChange={({ target: { value } }) =>
                        setState(state => ({ state, password: value }))
                      }
                      placeholder="Password"
                      minLength="8"
                      maxLength="64"
                    />
                    <button type="submit">Sign in</button>
                  </form>
                </TabPanel>
                <TabPanel>
                  <div className="auth-page__title">Sing up</div>
                  <form
                    onSubmit={async event => {
                      event.preventDefault();
                      const { email, password } = state;

                      const resp = await fetch(
                        "https://api.airtable.com/v0/app3ZVN7Q91i54kvo/Users",
                        {
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${API_KEY}`,
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({ fields: { email, password } })
                        }
                      );
                      try {
                        if (resp.ok) {
                          const respData = await resp.json();
                          setUser({
                            id: respData.id,
                            email,
                            password
                          });
                        } else {
                          const { message } = await resp.json();
                          throw Error(message);
                        }
                      } catch (e) {
                        console.error(e.message);
                      }
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={state.email}
                      onChange={({ target: { value } }) =>
                        setState(state => ({ state, email: value }))
                      }
                      placeholder="Email"
                    />
                    <input
                      required
                      type="password"
                      value={state.password}
                      onChange={({ target: { value } }) =>
                        setState(state => ({ state, password: value }))
                      }
                      placeholder="Password"
                      minLength="8"
                      maxLength="64"
                    />
                    <button type="submit">Sign up</button>
                  </form>
                </TabPanel>
              </Tabs>
            </div>
          );
        }}
      </Component>
    </Layount>
  );
};
export default AuthPage;
