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
export function validCardno(cardNo) {
  return RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(cardNo);
}
