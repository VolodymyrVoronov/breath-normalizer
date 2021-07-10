import React from "react";
import { Link } from "react-router-dom";

import AnimatedWrapper from "../common/UI/AnimatedWrapper";

import "./StartPage.scss";

interface IButton {
  id: number;
  time: number;
  sec: number;
}

const initialState = [
  { id: 1, time: 1, sec: 60 },
  { id: 2, time: 2, sec: 120 },
  { id: 3, time: 5, sec: 300 },
  { id: 4, time: 10, sec: 600 },
];

const StartPage = (): React.ReactElement => {
  const [buttons] = React.useState<IButton[]>(initialState);

  return (
    <AnimatedWrapper>
      <div className="start-page">
        <h1 className="start-page__title">Breath normalizer</h1>
        <p className="start-page__info">Если вы чувствуете, что напряжены, нервничаете и не можете справиться с дедлайнами, выделите себе несколько минут на дыхание. Разбейте цикл на пять секунд: по пять секунд на вдох, задержку после вдоха, выдох и задержку после выдоха. Выберите длительность и попробуйте подышать с анимацией.</p>
        <div className="start-page__buttons">
          {buttons.map(({ id, time, sec = 60 }) => {
            return (
              <Link
                to={{
                  pathname: "/normalizer",
                  state: {
                    duration: sec,
                    time,
                  },
                }}
                key={id}
                className="start-page__button"
                type="submit"
              >
                {time} мин
              </Link>
            );
          })}
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default StartPage;
