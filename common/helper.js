/*
 * @Descripttion:
 * @Author: liujing
 * @Date: 2022-02-15 11:22:59
 * @LastEditTime: 2022-02-21 16:53:47
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
  for (let i = 0; i < len; i++) {
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
/**
 * integer decimals thousands format show
 * @type {boolean}
 */
export function integerDecimalsFormat(num) {
  if (typeof num === "number") {
    num = num + "";
    if (/^.*\..*$/.test(num)) {
      let pointIndex = num.lastIndexOf(".");
      let intPart = num.substring(0, pointIndex);
      let pointPart = num.substring(pointIndex + 1, num.length);
      intPart = intPart + "";
      let re = /(-?\d+)(\d{3})/;
      while (re.test(intPart)) {
        intPart = intPart.replace(re, "$1,$2");
      }
      num = intPart + "." + pointPart;
    } else {
      num = num + "";
      let re = /(-?\d+)(\d{3})/;
      while (re.test(num)) {
        num = num.replace(re, "$1,$2");
      }
    }
    return num;
  } else {
    return false;
  }
}
/**
 * Count the number of occurrences of a string
 * @type {boolean}
 */
export function computeSomeCharsCount(partStr, fullStr) {
  if (typeof partStr == "string" && typeof fullStr == "string") {
    let index = fullStr.indexOf(partStr); // 字符出现的位置
    let num = 0; // 这个字符出现的次数
    while (index !== -1) {
      num++; // 每出现一次 次数加一
      index = fullStr.indexOf(partStr, index + 1); // 从字符串出现的位置的下一位置开始继续查找
    }
    return num;
  } else {
    return false;
  }
}
/**
 * packaging Promise.all() simulate Promise.allSettled()
 * @type {arr}
 */
export function allSettled(promises) {
  return Promise.all(
    promises.map(promise =>
      promise
        .then(value => ({ state: "fulfilled", ...value }))
        .catch(reason => ({ state: "rejected", ...reason }))
    )
  );
}
