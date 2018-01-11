```
npm install

npm run dev

npm run prod
```

```js
$('#t1').on('click',function(){
    $('body').simpleToast({
        maxWidth: "200px",
        padding: "10px 20px",
        background: "#2b2a2a",
        opacity: 0.9,
        zIndex: 9999, //层级
        borderRadius: "6px", //圆角
        duration: 2000, //toast 显示时间
        animateIn: "bounceIn", //进入的动画
        animateDuration: 500, //执行动画时间

        color: "#ffffff",
        fontSize: "14px", //字体大小
        icon:"fa fa-spinner fa-pulse",
        content: "这是提示信息", //提示内容
    });
});
```