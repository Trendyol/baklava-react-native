export function capitalizeFirstLetter(str?: string) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getFirstNChar(str: string, n: number, suffix?: string) {
  let result = str?.substring(0, n);
  if (str.length > n) {
    result = result.trim() + (suffix ?? '');
  }
  return result;
}

export const pausableTimer = (callback: () => void, delay: number) => {
  let timerId: string | number | NodeJS.Timeout | undefined;
  let start: number;
  let remaining = delay;

  const pause = () => {
    clearTimeout(timerId);
    timerId = undefined;
    remaining -= Date.now() - start;
  };

  const resume = (minRemaining?: number) => {
    remaining = Math.max(remaining, minRemaining ?? 0);
    if (timerId) {
      return;
    }

    start = Date.now();
    timerId = setTimeout(callback, remaining);
  };

  const kill = () => {
    clearTimeout(timerId);
    start = 0;
    remaining = 0;
  };

  resume();
  return { pause, resume, kill };
};
