import React, { Fragment } from "react";

import Layount from "../../public/Layout";

const About = ({ user, setUser }) => {
  return (
    <Layount user={user} setUser={setUser}>
      <Fragment>
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="about__infoBlock">
                  <div className="about__title">
                    Интернет-магазин 
                    <span>Magazan</span>
                  </div>
                  <p className="about__infoText">
                    Вас интересуют компьютеры, софт ? Все это вы можете купить
                    прямо сейчас, сэкономив уйму времени! Интернет-магазин
                    <span>Magazan</span>
                    <sup>™</sup> с радостью поможет вам избежать
                    необходимости посещать десятки магазинов. Вы можете заказать
                    любой товар, не вставая со своего кресла, а наш курьер
                    вовремя доставит покупку по указанному адресу. Интернет
                    магазин (Украина) Magazan действует на территории всей
                    страны. Жители любых городов могут без лишних хлопот
                    посетить наш интернет-магазин (Харьков, Киев и другие
                    города).
                  </p>
                  <p className="about__infoText">
                    Интернет-магазин компьютеров <span>Magazan</span>
                    <sup>™</sup> предлагает широчайший выбор лэптопов. Вы
                    легко подберете аппарат для работы или развлечений. Наш
                    интернет-магазин (Украина) компьютерной техники сотрудничает
                    с ведущими мировыми производителями. Посетив наш
                    интернет-магазин ноутбуков и компьютерной техники, вы без
                    труда приобретете лучшие решения от наиболее известных
                    компаний.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Layount>
  );
};

export default About;
