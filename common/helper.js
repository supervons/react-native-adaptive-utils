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
/**
 * Random number generation.   length:32-255
 * @type {boolean}
 */
export function randomString(len = 32) {
  if (typeof len != "number") {
    len = 32;
  } else if (len > 255) {
    return false;
  }
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; /****容易混淆的字符oOLl,9gq,Vv,Uu,I1可以去掉，这里暂时没去****/
  let maxPos = chars.length;
  let pwd = "";
  for (i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
