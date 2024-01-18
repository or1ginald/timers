import { useEffect, useState } from "react";

const REDRAW_TIME = 100;

// C помощью этого хука мы снижаем время перерисовки TimerList до 10 fps для оптимизации
export const useRedrawInterval = (
  isActive: boolean = false,
  ms: number = REDRAW_TIME,
): void => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => forceUpdate({}), ms);
      return () => clearInterval(intervalId);
    }
  }, [ms, isActive]);
};
