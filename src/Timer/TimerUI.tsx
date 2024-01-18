import { FC, memo } from "react";

import s from "./Timer.module.css";

interface Props {
  time: string;
  onToggleTimerClick: () => void;
  onResetClick: () => void;
  isRunning: boolean;
  reRenderAllTimers: () => void;
}

export const TimerUI: FC<Props> = memo((props) => {
  const {
    time = "00:00.000",
    onToggleTimerClick,
    onResetClick,
    reRenderAllTimers,
  } = props;

  const handleToggleClick = (): void => {
    onToggleTimerClick();
    reRenderAllTimers();
  };
  const handleResetClick = (): void => {
    onResetClick();
    reRenderAllTimers();
  };

  return (
    <div className={s.timer}>
      <div className={s.timerContent}>
        <div>{time}</div>
        <div className={s.timerActions}>
          <button type="button" onClick={handleToggleClick}>
            Start/Pause
          </button>
          <button type="button" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
});
