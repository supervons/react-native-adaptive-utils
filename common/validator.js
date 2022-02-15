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
 * @param val, strNum
 * @returns {boolean}
 */
export function limitstr(val, strNum) {
  let re = "";
  let strLeng = val.length;
  let byteLeng = val.replace(/[^x00-xff]/g, "**").length;
  if (byteLeng <= strNum) return val;
  for (var i = 0, byteNum = 0; i < strLeng; i++) {
    var byte = val.charAt(i);
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

/**
 * Valid Chinese person card.
 * @param target
 * @returns {boolean}
 */
export function isImg(target) {
  let file = target.value();
  if (file == "") {
    alert("Please upload pictures");
    return false;
  } else {
    if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file)) {
      alert("The image type must be One of the .gif,jpeg,jpg,png");
      return false;
    }
  }
}
