[English](./README.md) | 简体中文

# react-native-adaptive-utils

# 安装

```shell
npm install react-native-adaptive-utils
```

# 引入

```javascript
import { YourNeed } from "react-native-adaptive-utils";
```

#### 示例

如，引入防抖函数

```javascript
import { debounce } from "react-native-adaptive-utils";
```

# API

## 1 优化工具类

### 1.1 debounce

防抖函数，给定时间内（默认 `500ms` ），多次触发执行最后一次

#### 示例

```javascript
debounce(() => {
  console.log(1);
}, 500);
```

上述表示 `500ms` 中，若多次触发，执行最后一次

### 1.2 throttle

节流函数，给定时间内（默认 `500ms` ），多次触发，第一次执行，后续不执行。

#### 示例

```javascript
throttle(() => {
  console.log(1);
}, 500);
```

上述第一次触发时执行，`500ms` 中，后续触发不执行。

### 1.3 randomString

生成指定长度（默认 `32` 位）的随机字符串。

#### 示例

```javascript
let randomStr = randomString(16);
```

上述生成 `16` 位长度的随机数。

### 1.4 integerDecimalsFormat

整数小数千分位显示

#### 示例

```javascript
let thousandsNum = integerDecimalsFormat(-456123131.12301);
```

上述 num 以 `-456,123,131.12301`千分位格式显示

### 1.5 computeSomeCharsCount

统计字符串中指定字符或串出现的次数

#### 示例

```javascript
let count = computeSomeCharsCount("ad", "adsfdasf");
```

上述 count 为`ad`在`adsfdasf`中出现的次数

## 2 校验工具

### 2.1 validPhone

手机号校验

#### 示例

```javascript
let checkPhoneFlag = validPhone(12);
```

### 2.2 validEmail

邮箱校验

#### 示例

```javascript
let checkEmailFlag = validEmail(12);
```

### 2.3 validCardNo

身份证校验

#### 示例

```javascript
let checkCardNoFlag = validCardNo(12);
```

### 2.4 strLimit

字符长度限制校验

#### 示例

```javascript
let text = limitStr(str, length);
```

### 2.5 isImg

图片类型校验

#### 示例

```javascript
let isPicture = isImg(target);
```

## 3 分辨率

### 3.1 dynamicFontSize

根据屏幕宽度，动态获取字体大小

#### 示例

```javascript
let fontSize = dynamicFontSize(12);
```

建议直接在 `CSS` 样式中使用：

```javascript
const styles = StyleSheet.create({
  container: {
    fontSize: dynamicFontSize(12)
  }
});
```

### 3.2 isIphoneX

判断是否是 iphonex

#### 示例

```javascript
isIphoneX() ? "..." : "...";
```

```javascript
const styles = StyleSheet.create({
  container: {
    height: isIphoneX() ? 15 : 20;
  }
});

### 3.3 getTitleBarHeight

获取基于当前屏幕的标题栏高度

#### 示例

```

```javascript
let height = getTitleBarHeight();
```

```javascript
const styles = StyleSheet.create({
  container: {
    height: getTitleBarHeight();
  }
});
```

# 待办

- [x] 判断图片类型
- [x] 文本框输入字符上限判断
- [x] 生成随机数
- [ ] 整数、小数金额千分位显示
- [ ] 统计字符串中的指定字符或串的出现次数
- [ ] 百分比
- [ ] 金额带货币符号
- [ ] 信息脱敏
- [ ] 对象数组按指定字段排序
- [ ] `Title` 中文字距离底部的高度

# 待评审确定

- [ ] 网络请求
