import { FC, ReactElement, useState } from "react";

import { nanoid } from "nanoid";

import { millisecondsToMinutes } from "../millisecondsToMinutes.ts";
import { TimerUI } from "../Timer/TimerUI.tsx";
import { ITimer, Timer } from "../Timer.ts";
import { TimerList } from "../TimerList/TimerList.tsx";

import s from "./App.module.css";

export const App: FC = () => {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [, forceUpdate] = useState({});

  const onAddTimerClick = (): void => {
    const newTimerId = nanoid();
    const timer = new Timer(newTimerId, () => forceUpdate({}));
    setTimers((prev) => [...prev, timer]);
  };
  const onRemoveClick = (): void => {
    if (timers.length > 0) {
      const newTimers = timers.slice(0, -1); // Создаем новый массив без последнего элемента
      setTimers(newTimers);
    }
  };

  const renderTimer = (timer: ITimer): ReactElement => (
    <TimerUI
      key={timer.id}
      time={millisecondsToMinutes(timer.getElapsedTime())}
      onToggleTimerClick={timer.toggle}
      onResetClick={timer.reset}
      isRunning={timer.isRunning}
      reRenderAllTimers={timer.reRenderAllTimers}
    />
  );

  return (
    <div className={s.app}>
      <div className={s.container}>
        <div className={s.actions}>
          <button type="button" onClick={onAddTimerClick}>
            Add timer
          </button>
          <button type="button" onClick={onRemoveClick}>
            Remove
          </button>
        </div>
        <TimerList timers={timers} renderTimer={renderTimer} />
      </div>
    </div>
  );
};
