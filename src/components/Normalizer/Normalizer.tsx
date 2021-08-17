import React from "react";
import { useLocation, useHistory } from "react-router";
import { useStopwatch } from "react-timer-hook";

import { formatTime } from "../../helpers";

import BackButton from "../common/UI/BackButton/BackButton";

import "./Normalizer.scss";

interface ILocationState {
  duration?: number;
  time?: number;
}

const Normalizer = (): React.ReactElement => {
  const history = useHistory();
  const location = useLocation<ILocationState>();

  const [breathingDuration, setBreathingDuration] = React.useState<number>(0);
  const [toggleAnimation, setToggleAnimation] = React.useState<boolean>(true);
  const [breathingInterval, setBreathingInterval] = React.useState<number>(0);

  let duration = location.state?.duration;
  let time = location.state?.time;

  if (!location.state?.duration && !location.state?.time) {
    history.push("/");
  }

  const { seconds, minutes } = useStopwatch({ autoStart: true });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBreathingDuration(breathingDuration + 1);
      setBreathingInterval(() => breathingInterval + 1);
    }, 1000);

    if (breathingDuration === duration) {
      history.push("/");
    }

    if (breathingInterval === 5) {
      setBreathingInterval(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [breathingDuration, breathingInterval]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBreathingInterval(() => breathingInterval + 1);
    }, 1000);
    if (breathingInterval === 5) {
      setBreathingInterval(0);
      setToggleAnimation(!toggleAnimation);
    }

    return () => {
      clearInterval(interval);
    };
  }, [breathingInterval]);

  return (
    <div className="normalizer">
      <BackButton />
      <header className="normalizer__header">
        <p className="normalizer__header-text">Время сеанса: {time} мин.</p>
      </header>
      <p className="normalizer__text">{toggleAnimation ? "Вдох" : "Выдох"}</p>
      <ul className="normalizer__bars">
        <li
          className={`normalizer__bar normalizer__bar--1 
        ${toggleAnimation ? breathingInterval === 4 && "normalizer__bar--show" : breathingInterval === 0 && "normalizer__bar--show"}`}
        />
        <li
          className={`normalizer__bar normalizer__bar--2
          ${toggleAnimation ? breathingInterval === 3 && "normalizer__bar--show" : breathingInterval === 1 && "normalizer__bar--show"}`}
        />
        <li
          className={`normalizer__bar normalizer__bar--3
          ${toggleAnimation ? breathingInterval === 2 && "normalizer__bar--show" : breathingInterval === 2 && "normalizer__bar--show"}`}
        />
        <li
          className={`normalizer__bar normalizer__bar--4
          ${toggleAnimation ? breathingInterval === 1 && "normalizer__bar--show" : breathingInterval === 3 && "normalizer__bar--show"}`}
        />
        <li
          className={`normalizer__bar normalizer__bar--5
          ${toggleAnimation ? breathingInterval === 0 && "normalizer__bar--show" : breathingInterval === 4 && "normalizer__bar--show"}`}
        />
      </ul>

      <div className="normalizer__timer">
        <p className="normalizer__timer-text">{formatTime(minutes)}:</p>
        <p className="normalizer__timer-text">{formatTime(seconds)}</p>
      </div>
    </div>
  );
};

export default Normalizer;
