/*
 * @Descripttion:
 * @Author: liujing
 * @Date: 2022-02-15 11:22:59
 * @LastEditTime: 2022-02-21 16:50:47
 */
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

/**
 * Object array sort.
 *  * @param arr
 * @type {boolean}
 */
export function sortFun(arr, props, type) {
  if (type == 1) {
    return arr.sort(function (a, b) {
      return a[props] - b[props];
    });
  } else if (type == 0) {
    return arr.sort(function (a, b) {
      return b[props] - a[props];
    });
  }
}
