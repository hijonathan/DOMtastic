define(["exports", "module", "./util", "./array", "./attr", "./class", "./contains", "./css", "./data", "./dom", "./dom_extra", "./event", "./html", "./noconflict", "./ready", "./selector", "./selector_extra", "./trigger", "./type"], function (exports, module, _util, _array, _attr, _class, _contains, _css, _data, _dom, _dom_extra, _event, _html, _noconflict, _ready, _selector, _selector_extra, _trigger, _type) {
    "use strict";

    var extend = _util.extend;


    var api = {},
        $ = {};

    var array = _array;
    var attr = _attr;
    var class_ = _class;
    var contains = _contains;
    var css = _css;
    var data = _data;
    var dom = _dom;
    var dom_extra = _dom_extra;
    var event = _event;
    var html = _html;
    var noconflict = _noconflict;
    var ready = _ready;
    var selector = _selector;
    var selector_extra = _selector_extra;
    var trigger = _trigger;
    var type = _type;


    if (typeof selector !== "undefined") {
        $ = selector.$;
        $.matches = selector.matches;
        api.find = selector.find;
        api.closest = selector.closest;
    }

    extend($, contains, noconflict, type);
    extend(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

    $.fn = api;

    $.version = "0.9.3";

    $.extend = extend;

    module.exports = $;
});