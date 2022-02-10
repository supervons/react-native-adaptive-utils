# react-native-adaptive-utils

# API specification
## resolution
### dynamicFontSize
Dynamically get font size based on screen width
### sample
```javascript
let fontSize = dynamicFontSize(12)
` ` `
It is recommended to use it directly in 'CSS' styles:
```javascript

const styles = StyleSheet.create({
container: {
fontSize: dynamicFontSize(12)
}
})
```

## Valid tool

# to do
- [] Specifies the common regularization check
- [] Network request
