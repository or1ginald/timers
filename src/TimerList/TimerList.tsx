import { FC, ReactElement } from "react";

import { useRedrawInterval } from "../useRedraw.ts";

import s from "./TimerList.module.css";

interface ITimer {
  id: string;
  toggle: () => void;
  reset: () => void;
  getElapsedTime: () => number;
  isRunning: boolean;
  time: number;
  reRenderAllTimers: () => void;
}

interface Props {
  timers: ITimer[];
  renderTimer: (timer: ITimer) => ReactElement;
}

export const TimerList: FC<Props> = ({ timers, renderTimer }) => {
  const activeTimers = timers.filter((timer) => timer.isRunning);
  const isRedrawActive = activeTimers.length > 0;

  useRedrawInterval(isRedrawActive);

  return (
    <div className={s.timerList}>
      {timers.map((timer) => renderTimer(timer))}
    </div>
  );
};
