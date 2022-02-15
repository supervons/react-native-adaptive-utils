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
 * @param CharacterLimit
 * @returns {boolean}
 */
export function limitstr(val, strnum) {
  let re = "";
  let strleng = val.length;
  let byteleng = val.replace(/[^x00-xff]/g, "**").length;
  if (byteleng <= strnum) return val;
  for (var i = 0, bytenum = 0; i < strleng; i++) {
    var byte = val.charAt(i);
    if (/[\x00-\xff]/.test(byte)) {
      bytenum += 1;
    } else {
      bytenum += 2;
    }
    if (bytenum <= strnum) {
      re += byte;
    } else {
      return re;
    }
  }
}
