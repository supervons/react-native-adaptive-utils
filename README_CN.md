# react-native-adaptive-utils

# API 说明
## 分辨率
### dynamicFontSize
根据屏幕宽度，动态获取字体大小
### 示例
```javascript
let fontSize = dynamicFontSize(12)
```
建议直接在 `CSS` 样式中使用：
```javascript

const styles = StyleSheet.create({
  container: {
    fontSize: dynamicFontSize(12)
  }
})
```

## 校验工具

# 待办
- [ ] 常用正则校验
- [ ] 网络请求
