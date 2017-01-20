# postcss-pxtorpx

Postcss 插件，用于将 px 单位转换成微信小程序特有的单位 rpx

*受 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 启发，感谢 [cute](https://github.com/cuth)*

## Usage

请参考 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

## 不同的地方

参数 rootValue 去除了，增加了 multiplier 参数

multiplier 默认是 1

示例： multiplier = 2

input
```css
.class {
    font-size: 16px;
}
```
output
```css
.class {
    font-size: 32rpx; /* 16 乘以 2 */
}
```

### 不想将转换 px 转换成 rpx

把 `px` 单位写成 `Px` 或者 `PX`，此写法仍被浏览器接受
