English | [简体中文](./README_CN.md)

# react-native-adaptive-utils

# Install

```shell
npm install react-native-adaptive-utils
```

# Import

```javascript
import { YourNeed } from "react-native-adaptive-utils";
```

#### Demo

Such as, import debounce function.

```javascript
import { debounce } from "react-native-adaptive-utils";
```

# API

## 1 Improve tools.

### 1.1 debounce

The appointed time（default `500ms` ）,trigger many times that execute last once.

#### Demo

```javascript
debounce(() => {
  console.log(1);
}, 500);
```

Means if trigger many times in `500ms`, execute last once.

### 1.2 throttle

The appointed time（default `500ms` ）, ignored triggers after first once executed.

#### Demo

```javascript
throttle(() => {
  console.log(1);
}, 500);
```

Means execute first once, then if trigger many times in 500ms, ignored.

### 1.3 randomString

Generates a random string of a specified length (32 bits by default).

#### Demo

```javascript
let randomStr = randomString(16);
```

Above generate '16' length random number.

### 1.4 integerDecimalsFormat

The integer is displayed in thousands of fractions

#### Demo

```javascript
let thousandsNum = integerDecimalsFormat(-456123131.12301);
```

The above num format is' -456,123,131.12301 '

### 1.5 computeSomeCharsCount

Counts the number of occurrences of a specified character or string in a string

#### Demo

```javascript
let count = computeSomeCharsCount("ad", "adsfdasf");
```

The count above is the number of occurrences of 'AD' in 'adsfdasf'

## 2 validator

### 2.1 validPhone

Verify phone no.

#### Demo

```javascript
let checkPhoneFlag = validPhone(12);
```

### 2.2 validEmail

Verify E-mail.

#### Demo

```javascript
let checkEmailFlag = validEmail(12);
```

### 2.3 validCardNo

Verify Chinese card no.

#### Demo

```javascript
let checkCardNoFlag = validCardNo(12);
```

### 2.4 strLimit

Character length limit verification

#### Demo

```javascript
let text = limitStr(str, length);
```

### 2.5 isImg

Image type verification

#### Demo

```javascript
let isPicture = isImg(target);
```

## 3 Resolution

### 3.1 dynamicFontSize

Get font size base on width.

#### Demo

```javascript
let fontSize = dynamicFontSize(12);
```

Suggest Usage：

```javascript
const styles = StyleSheet.create({
  container: {
    fontSize: dynamicFontSize(12)
  }
});
```

# Todo List

- [ ] Get image type.
- [ ] Determines the upper limit of input characters in the text box.
- [ ] Generate UUID.

# Todo Prepare

- [ ] Network tool.
