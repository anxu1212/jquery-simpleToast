/*!
 * simpleToast -- jquery
 * version - v0.0.1
 * https://github.com/anxu1212/jquery.simpleToast
 */
(function ($, window) {
    'use strict';
    // Plugin definition.
    $.fn.simpleToast = function (options) {
        var opts = $.extend({}, $.fn.simpleToast.defaults, options);

        var $container = $("<div></div>").addClass('toast').css({
            "z-index":opts.zIndex
        });
        createBox(opts).appendTo($container);
        this.append($container);
        closeBox($container,opts);
        return this;
    };

    $.fn.simpleToast.defaults = {
        maxWidth: "200px",
        padding: "10px 20px",
        background: "#2b2a2a",
        opacity: 0.9,
        zIndex: 9999, //层级
        borderRadius: "6px", //圆角
        duration: 2000, //toast 显示时间
        animateIn: "boxBounceIn", //进入的动画
        animateDuration: 500, //执行动画时间

        color: "#ffffff",
        fontSize: "14px", //字体大小
        icon:"fa fa-spinner fa-pulse",
        content: "这是一个提示信息", //提示内容

    };

    function createBox(opts) {
        var $icon = $("<i></i>").addClass(opts.icon);
        var $content = $("<span></span>").css({
            'color':opts.color
        }).html(opts.content);

        return $("<div class='animated'></div>").css({
            'animation-duration':opts.animateDuration/1000+'s',
            'background':opts.background,
            'opacity':opts.opacity,
            'max-width':opts.maxWidth,
            'font-size':opts.fontSize,
            'padding':opts.padding,
            'border-radius':opts.borderRadius
        }).addClass(opts.animateIn).append($icon).append($content);
    }

    function closeBox(box,opts){
        setTimeout(function(){
            box.remove();
        },opts.duration);
    }
})(jQuery, window);