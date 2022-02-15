/**
 * Verify tool
 */

/**
 * Valid cell phone number.
 * @param cellPhoneNumber
 * @returns {boolean}
 */
export function validPhone(cellPhoneNumber) {
  return RegExp(
    /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9]|19[0-9])[0-9]{8}$/
  ).test(cellPhoneNumber);
}

/**
 * Valid email
 * @param mail
 * @returns {boolean}
 */
export function validEmail(mail) {
  return RegExp(
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
  ).test(mail);
}

/**
 * Valid Chinese person card.
 * @param cardNo
 * @returns {boolean}
 */
export function validCardNo(cardNo) {
  return RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(cardNo);
}

/**
 * Valid Chinese person card.
 * @param val
 * @param strNum
 * @returns {string}
 */
export function limitStr(val, strNum) {
  let re = "";
  let strLength = val.length;
  let byteLength = val.replace(/[^x00-xff]/g, "**").length;
  if (byteLength <= strNum) return val;
  for (let i = 0, byteNum = 0; i < strLength; i++) {
    let byte = val.charAt(i);
    if (/[\x00-\xff]/.test(byte)) {
      byteNum += 1;
    } else {
      byteNum += 2;
    }
    if (byteNum <= strNum) {
      re += byte;
    } else {
      return re;
    }
  }
}
