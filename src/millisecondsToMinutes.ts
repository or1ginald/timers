export const millisecondsToMinutes = (milliseconds: number): string => {
  if (Number.isNaN(milliseconds) || milliseconds < 0) {
    throw new Error(
      "Invalid input: milliseconds should be a non-negative number.",
    );
  }

  // Magick numbers
  const DECIMAL_DIVIDER = 10;
  const HUNDREDS_DIVIDER = 100;
  const MILLISECONDS_IN_ONE_SECOND = 1000;
  const SECONDS_IN_ONE_MINUTE = 60;

  const totalSeconds = Math.floor(milliseconds / MILLISECONDS_IN_ONE_SECOND);
  const minutes = Math.floor(totalSeconds / SECONDS_IN_ONE_MINUTE);
  const seconds = totalSeconds % SECONDS_IN_ONE_MINUTE;
  const remainingMilliseconds = milliseconds % MILLISECONDS_IN_ONE_SECOND;

  const minutesString =
    minutes < DECIMAL_DIVIDER ? `0${minutes}` : `${minutes}`;
  const secondsString =
    seconds < DECIMAL_DIVIDER ? `0${seconds}` : `${seconds}`;

  let millisecondsString;
  if (remainingMilliseconds < DECIMAL_DIVIDER) {
    millisecondsString = `00${remainingMilliseconds}`;
  }
  if (
    remainingMilliseconds >= DECIMAL_DIVIDER &&
    remainingMilliseconds < HUNDREDS_DIVIDER
  ) {
    millisecondsString = `0${remainingMilliseconds}`;
  }
  if (remainingMilliseconds >= HUNDREDS_DIVIDER) {
    millisecondsString = `${remainingMilliseconds}`;
  }

  return `${minutesString}:${secondsString}.${millisecondsString}`;
};
