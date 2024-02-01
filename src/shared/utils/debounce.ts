export const debounce = (callback, wait): void => {
  let timeoutId = null;
  return (...args): void => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
