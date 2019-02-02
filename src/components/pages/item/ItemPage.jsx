import React from "react";
import Layout from "../../public/Layout";
import Component from "react-component-component";
import { API_KEY } from "../../../libs/Env";

const ItemPage = ({ user, setUser, itemId }) => {
  const renderType = type => (type === "desktop" ? "Kомпьютер" : "Ноутбук");

  return (
    <Layout user={user} setUser={setUser}>
      <Component
        initialState={{
          item: null
        }}
        didMount={async ({ setState }) => {
          const itemReq = await fetch(
            `https://api.airtable.com/v0/app3ZVN7Q91i54kvo/Items/${itemId}`,
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
              setState({ item: itemResp });
            } else {
              const { message } = await itemReq.json();
              throw Error(message);
            }
          } catch (e) {
            console.error(e.message);
          }
        }}
      >
        {({ state, setSate }) => {
          return (
            <div className="item">
              <div className="container">
                <div className="row">
                  {state.item && (
                    <div className="col-md-12">
                      <div className="col-md-12">
                        <h1 className="item__title">
                          {`${renderType(
                            state.item.fields.type.trim()
                          )} ${state.item.fields.name.trim()} ${state.item.fields.model.trim()}`}
                        </h1>
                      </div>

                      <div className="item__content">
                        <div className="col-md-6">
                          <img
                            src={state.item.fields.img[0].url}
                            alt="Item logo"
                            className="item__content-image"
                          />
                        </div>
                        <div className="col-md-6 item__content-descriptionWrap">
                          <div className="item__content-description--price item__content-description">
                            Цена: <span>{state.item.fields.price}</span> Грн.
                          </div>
                          <div className="item__content-description">
                            Процессор:{" "}
                            <span>{state.item.fields.proccesor}</span>{" "}
                          </div>
                          <div className="item__content-description">
                            Видео-карта:{" "}
                            <span>{state.item.fields.videoCard}</span>
                          </div>
                          <div className="item__content-description">
                            Материнская плата:{" "}
                            <span>{state.item.fields.motherCard}</span>
                          </div>
                          <div className="item__content-description">
                            Блок питания:{" "}
                            <span>{state.item.fields.powerBlock}</span>
                          </div>
                          <div className="item__content-description">
                            Жесткий диск: <span>{state.item.fields.HDD}</span>
                          </div>
                          <div className="item__content-description">
                            Оперативная память:{" "}
                            <span>{state.item.fields.RAM}</span>
                          </div>
                          <div className="item__content-description">
                            Охлаждение: <span>{state.item.fields.cooling}</span>
                          </div>
                          <div className="item__content-description">
                            Корпус: <span>{state.item.fields.shell}</span>
                          </div>
                          <div className="item__content-description">
                            Размеры: <span>{state.item.fields.size}</span>
                          </div>
                          <div className="item__content-description">
                            Вес: <span>{state.item.fields.weight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Component>
    </Layout>
  );
};

export default ItemPage;
