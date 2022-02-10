/**
 * Helper tool,Improve and optimize development efficiency.
 */
/**
 * When triggered multi-action, executed the last once.
 * @type {null}
 */
let timeout = null;
export function debounce(fun, wait = 500) {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    timeout = null;
    fun && fun();
  }, wait);
}

/**
 * When triggered multi-action, executed the first once.
 * @type {boolean}
 */
let canRun = true;
export function throttle(fn, delay = 500) {
  if (!canRun) return;
  canRun = false;
  setTimeout(() => {
    fn.apply(this, arguments);
    canRun = true;
  }, delay);
}
