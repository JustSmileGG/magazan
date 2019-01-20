import React from "react";
import Layout from "../../public/Layout";
import Component from "react-component-component";
import { API_KEY } from "../../../libs/Env";
import { Link } from "react-router-dom";

const filterByType = (state, setState, type) => {
  const items =
    type === "all" ? state : state.filter(item => item.fields.type === type);
  return items;
};

const Catalog = ({ user, setUser }) => {
  return (
    <Layout user={user} setUser={setUser}>
      <Component
        initialState={{
          items: [],
          type: "all"
        }}
        didMount={async ({ setState }) => {
          const itemReq = await fetch(
            "https://api.airtable.com/v0/app3ZVN7Q91i54kvo/Items?maxRecords=21&view=Grid%20view",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
              }
            }
          );
          try {
            if (itemReq.ok) {
              const itemResp = await itemReq.json();
              setState({ items: itemResp.records });
            } else {
              const { message } = await itemReq.json();
              throw Error(message);
            }
          } catch (e) {
            console.error(e.message);
          }
        }}
      >
        {({ state, setState }) => {
          return (
            <div className="catalog">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="catalog__sidebar">
                      <div className="catalog__sidebar_menu">
                        <ul className="catalog__sidebar_menu-list">
                          <li>
                            <a
                              className={`${
                                state.type === "all" ? "active" : ""
                              }`}
                              href="##"
                              onClick={() => setState({ type: "all" })}
                            >
                              All
                            </a>
                          </li>
                          <li>
                            <a
                              className={`${
                                state.type === "desktop" ? "active" : ""
                              }`}
                              href="##"
                              onClick={() => setState({ type: "desktop" })}
                            >
                              Desktop
                            </a>
                          </li>
                          <li>
                            <a
                              className={`${
                                state.type === "notebook" ? "active" : ""
                              }`}
                              href="##"
                              onClick={() => setState({ type: "notebook" })}
                            >
                              Notebooks
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="catalog__items">
                      <div className="row">
                        {state.items &&
                          filterByType(state.items, setState, state.type).map(
                            ({ id, fields }) => (
                              <div key={id} className="col-md-6">
                                <div className="catalog__item">
                                  <div className="catalog__item_wrap">
                                    <Link to="#">
                                      <span>
                                        <img
                                          src={fields.img[0].url}
                                          alt="Item"
                                          className="catalog__item_img"
                                        />
                                      </span>
                                      <span>
                                        <div className="row">
                                          <div className="col-md-8">
                                            <span className="catalog__item_text">
                                              <h4 className="catalog__item_text-name">
                                                {fields.name.trim()}
                                              </h4>
                                              <span className="catalog__item_text-model">
                                                {fields.model.trim()}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="col-md-4">
                                            <span className="catalog__item_text-price">
                                              {fields.price.trim()} Грн.
                                            </span>
                                          </div>
                                        </div>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Component>
    </Layout>
  );
};

export default Catalog;
