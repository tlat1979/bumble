/**
 * @license
 jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
'use strict';
!function(global, factory) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = global.document ? factory(global, true) : function(global) {
      if (!global.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(global);
    };
  } else {
    factory(global);
  }
}("undefined" != typeof window ? window : this, function(window, zoomAware) {
  /**
   * @param {string} t
   * @param {!Object} elem
   * @param {!Object} n
   * @return {undefined}
   */
  function fn(t, elem, n) {
    var i;
    var node = (elem = elem || document).createElement("script");
    if (node.text = t, n) {
      for (i in packet) {
        if (n[i]) {
          node[i] = n[i];
        }
      }
    }
    elem.head.appendChild(node).parentNode.removeChild(node);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function type(obj) {
    return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length;
    var ltype = type(obj);
    return !isFunction(obj) && !isString(obj) && ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj);
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @return {?}
   */
  function callback(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  /**
   * @param {!Object} elements
   * @param {!Object} qualifier
   * @param {boolean} not
   * @return {?}
   */
  function winnow(elements, qualifier, not) {
    return isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
      return !!qualifier.call(elem, i, elem) !== not;
    }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
      return elem === qualifier !== not;
    }) : "string" != typeof qualifier ? jQuery.grep(elements, function(name) {
      return indexOf.call(qualifier, name) > -1 !== not;
    }) : jQuery.filter(qualifier, elements, not);
  }
  /**
   * @param {(Array|Element)} cur
   * @param {number} dir
   * @return {?}
   */
  function sibling(cur, dir) {
    for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
    }
    return cur;
  }
  /**
   * @param {string} options
   * @return {?}
   */
  function createOptions(options) {
    var subwikiListsCache = {};
    return jQuery.each(options.match(rnotwhite) || [], function(canCreateDiscussions, wikiId) {
      /** @type {boolean} */
      subwikiListsCache[wikiId] = true;
    }), subwikiListsCache;
  }
  /**
   * @param {?} options
   * @return {?}
   */
  function options(options) {
    return options;
  }
  /**
   * @param {?} datumValue
   * @return {?}
   */
  function val(datumValue) {
    throw datumValue;
  }
  /**
   * @param {!Object} obj
   * @param {!Function} resolve
   * @param {!Function} reject
   * @param {boolean} args
   * @return {undefined}
   */
  function when(obj, resolve, reject, args) {
    var then;
    try {
      if (obj && isFunction(then = obj.promise)) {
        then.call(obj).done(resolve).fail(reject);
      } else {
        if (obj && isFunction(then = obj.then)) {
          then.call(obj, resolve, reject);
        } else {
          resolve.apply(void 0, [obj].slice(args));
        }
      }
    } catch (errorEventName) {
      reject.apply(void 0, [errorEventName]);
    }
  }
  /**
   * @return {undefined}
   */
  function $__jsx_onload() {
    document.removeEventListener("DOMContentLoaded", $__jsx_onload);
    window.removeEventListener("load", $__jsx_onload);
    jQuery.ready();
  }
  /**
   * @param {?} context
   * @param {string} match
   * @return {?}
   */
  function dashToCapital(context, match) {
    return match.toUpperCase();
  }
  /**
   * @param {!Object} str
   * @return {?}
   */
  function camelCase(str) {
    return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(tokensRegExp, dashToCapital);
  }
  /**
   * @return {undefined}
   */
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function categorizeId(value) {
    return "true" === value || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : trueRE.test(value) ? JSON.parse(value) : value);
  }
  /**
   * @param {!Object} value
   * @param {!Object} target
   * @param {!Array} s
   * @return {?}
   */
  function parse(value, target, s) {
    var key;
    if (void 0 === s && 1 === value.nodeType) {
      if (key = "data-" + target.replace(rhyphen, "-$&").toLowerCase(), "string" == typeof(s = value.getAttribute(key))) {
        try {
          s = categorizeId(s);
        } catch (e) {
        }
        self.set(value, target, s);
      } else {
        s = void 0;
      }
    }
    return s;
  }
  /**
   * @param {!Object} elem
   * @param {string} prop
   * @param {string} valueParts
   * @param {!Object} tween
   * @return {?}
   */
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted;
    var scale;
    /** @type {number} */
    var a = 20;
    /** @type {function(): ?} */
    var currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery.css(elem, prop, "");
    };
    var initial = currentValue();
    var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
    var initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      /** @type {number} */
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      /** @type {number} */
      initialInUnit = +initial || 1;
      for (; a--;) {
        jQuery.style(elem, prop, initialInUnit + unit);
        if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
          /** @type {number} */
          a = 0;
        }
        /** @type {number} */
        initialInUnit = initialInUnit / scale;
      }
      /** @type {number} */
      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
  }
  /**
   * @param {!Node} elem
   * @return {?}
   */
  function getDefaultDisplay(elem) {
    var div;
    var doc = elem.ownerDocument;
    var nodeName = elem.nodeName;
    var display = defaultDisplayMap[nodeName];
    return display || (div = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(div, "display"), div.parentNode.removeChild(div), "none" === display && (display = "block"), defaultDisplayMap[nodeName] = display, display);
  }
  /**
   * @param {!Array} elements
   * @param {boolean} options
   * @return {?}
   */
  function showHide(elements, options) {
    var display;
    var elem;
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var index = 0;
    var length = elements.length;
    for (; index < length; index++) {
      if ((elem = elements[index]).style) {
        display = elem.style.display;
        if (options) {
          if ("none" === display) {
            values[index] = dataPriv.get(elem, "display") || null;
            if (!values[index]) {
              /** @type {string} */
              elem.style.display = "";
            }
          }
          if ("" === elem.style.display && isHidden(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if ("none" !== display) {
            /** @type {string} */
            values[index] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
    }
    /** @type {number} */
    index = 0;
    for (; index < length; index++) {
      if (null != values[index]) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  /**
   * @param {!Object} context
   * @param {number} tag
   * @return {?}
   */
  function getAll(context, tag) {
    var n;
    return n = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && callback(context, tag) ? jQuery.merge([context], n) : n;
  }
  /**
   * @param {number} elems
   * @param {!NodeList} refElements
   * @return {undefined}
   */
  function setGlobalEval(elems, refElements) {
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; i < length; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  /**
   * @param {!Array} elems
   * @param {!Object} context
   * @param {string} result
   * @param {!Object} element
   * @param {string} ignored
   * @return {?}
   */
  function buildFragment(elems, context, result, element, ignored) {
    var elem;
    var tmp;
    var tag;
    var wrap;
    var ret;
    var j;
    var fragment = context.createDocumentFragment();
    /** @type {!Array} */
    var results = [];
    /** @type {number} */
    var i = 0;
    var length = elems.length;
    for (; i < length; i++) {
      if ((elem = elems[i]) || 0 === elem) {
        if ("object" === type(elem)) {
          jQuery.merge(results, elem.nodeType ? [elem] : elem);
        } else {
          if (re_commas.test(elem)) {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (me.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
            j = wrap[0];
            for (; j--;) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(results, tmp.childNodes);
            /** @type {string} */
            (tmp = fragment.firstChild).textContent = "";
          } else {
            results.push(context.createTextNode(elem));
          }
        }
      }
    }
    /** @type {string} */
    fragment.textContent = "";
    /** @type {number} */
    i = 0;
    for (; elem = results[i++];) {
      if (element && jQuery.inArray(elem, element) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
      } else {
        if (ret = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), ret && setGlobalEval(tmp), result) {
          /** @type {number} */
          j = 0;
          for (; elem = tmp[j++];) {
            if (opacityRe.test(elem.type || "")) {
              result.push(elem);
            }
          }
        }
      }
    }
    return fragment;
  }
  /**
   * @return {?}
   */
  function returnTrue() {
    return true;
  }
  /**
   * @return {?}
   */
  function returnFalse() {
    return false;
  }
  /**
   * @return {?}
   */
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (e) {
    }
  }
  /**
   * @param {!Object} el
   * @param {?} t
   * @param {!Object} value
   * @param {!Object} key
   * @param {!Object} fn
   * @param {number} callback
   * @return {?}
   */
  function attach(el, t, value, key, fn, callback) {
    var handler;
    var tb;
    if ("object" == typeof t) {
      if ("string" != typeof value) {
        key = key || value;
        value = void 0;
      }
      for (tb in t) {
        attach(el, tb, value, key, t[tb], callback);
      }
      return el;
    }
    if (null == key && null == fn ? (fn = value, key = value = void 0) : null == fn && ("string" == typeof value ? (fn = key, key = void 0) : (fn = key, key = value, value = void 0)), false === fn) {
      /** @type {function(): ?} */
      fn = returnFalse;
    } else {
      if (!fn) {
        return el;
      }
    }
    return 1 === callback && (handler = fn, (fn = function(type) {
      return jQuery().off(type), handler.apply(this, arguments);
    }).guid = handler.guid || (handler.guid = jQuery.guid++)), el.each(function() {
      jQuery.event.add(this, t, fn, key, value);
    });
  }
  /**
   * @param {undefined} elem
   * @param {!Element} e
   * @return {?}
   */
  function $(elem, e) {
    return callback(elem, "table") && callback(11 !== e.nodeType ? e : e.firstChild, "tr") ? jQuery(elem).children("tbody")[0] || elem : elem;
  }
  /**
   * @param {!Element} s
   * @return {?}
   */
  function p(s) {
    return s.type = (null !== s.getAttribute("type")) + "/" + s.type, s;
  }
  /**
   * @param {!Object} e
   * @return {?}
   */
  function transform(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  /**
   * @param {(Object|string)} node
   * @param {!Object} elem
   * @return {undefined}
   */
  function cloneCopyEvent(node, elem) {
    var i;
    var tableslen;
    var type;
    var handle;
    var elemData;
    var p;
    var expected;
    var data;
    if (1 === elem.nodeType) {
      if (dataPriv.hasData(node) && (handle = dataPriv.access(node), elemData = dataPriv.set(elem, handle), data = handle.events)) {
        delete elemData.handle;
        elemData.events = {};
        for (type in data) {
          /** @type {number} */
          i = 0;
          tableslen = data[type].length;
          for (; i < tableslen; i++) {
            jQuery.event.add(elem, type, data[type][i]);
          }
        }
      }
      if (self.hasData(node)) {
        p = self.access(node);
        expected = jQuery.extend({}, p);
        self.set(elem, expected);
      }
    }
  }
  /**
   * @param {!Object} src
   * @param {!Object} dest
   * @return {undefined}
   */
  function fixInput(src, dest) {
    var undefined = dest.nodeName.toLowerCase();
    if ("input" === undefined && reg.test(src.type)) {
      dest.checked = src.checked;
    } else {
      if (!("input" !== undefined && "textarea" !== undefined)) {
        dest.defaultValue = src.defaultValue;
      }
    }
  }
  /**
   * @param {!Object} collection
   * @param {!Array} args
   * @param {!Function} callback
   * @param {boolean} ignored
   * @return {?}
   */
  function domManip(collection, args, callback, ignored) {
    /** @type {!Array<?>} */
    args = concat.apply([], args);
    var fragment;
    var first;
    var element;
    var tableslen;
    var node;
    var elem;
    /** @type {number} */
    var i = 0;
    var l = collection.length;
    /** @type {number} */
    var iNoClone = l - 1;
    var str = args[0];
    var func = isFunction(str);
    if (func || l > 1 && "string" == typeof str && !support.checkClone && partten.test(str)) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (func) {
          args[0] = str.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l && (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
      tableslen = (element = jQuery.map(getAll(fragment, "script"), p)).length;
      for (; i < l; i++) {
        node = fragment;
        if (i !== iNoClone) {
          node = jQuery.clone(node, true, true);
          if (tableslen) {
            jQuery.merge(element, getAll(node, "script"));
          }
        }
        callback.call(collection[i], node, i);
      }
      if (tableslen) {
        elem = element[element.length - 1].ownerDocument;
        jQuery.map(element, transform);
        /** @type {number} */
        i = 0;
        for (; i < tableslen; i++) {
          node = element[i];
          if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(elem, node)) {
            if (node.src && "module" !== (node.type || "").toLowerCase()) {
              if (jQuery._evalUrl) {
                jQuery._evalUrl(node.src);
              }
            } else {
              fn(node.textContent.replace(a, ""), elem, node);
            }
          }
        }
      }
    }
    return collection;
  }
  /**
   * @param {!Object} val
   * @param {!Object} fn
   * @param {string} keepData
   * @return {?}
   */
  function remove(val, fn, keepData) {
    var elem;
    var value = fn ? jQuery.filter(fn, val) : val;
    /** @type {number} */
    var name = 0;
    for (; null != (elem = value[name]); name++) {
      if (!(keepData || 1 !== elem.nodeType)) {
        jQuery.cleanData(getAll(elem));
      }
      if (elem.parentNode) {
        if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
          setGlobalEval(getAll(elem, "script"));
        }
        elem.parentNode.removeChild(elem);
      }
    }
    return val;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} computed
   * @return {?}
   */
  function curCSS(elem, name, computed) {
    var minWidth;
    var width;
    var maxWidth;
    var ret;
    var style = elem.style;
    return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && inlineAttributeCommentRegex.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = 
    maxWidth)), void 0 !== ret ? ret + "" : ret;
  }
  /**
   * @param {?} conditionFn
   * @param {!Function} hookFn
   * @return {?}
   */
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get : function() {
        if (!conditionFn()) {
          return (this.get = hookFn).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function getName(name) {
    if (name in style) {
      return name;
    }
    var UserSelect = name[0].toUpperCase() + name.slice(1);
    /** @type {number} */
    var i = prefixes.length;
    for (; i--;) {
      if ((name = prefixes[i] + UserSelect) in style) {
        return name;
      }
    }
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function vendorPropName(name) {
    var t = jQuery.cssProps[name];
    return t || (t = jQuery.cssProps[name] = getName(name) || name), t;
  }
  /**
   * @param {!Object} type
   * @param {!Object} value
   * @param {string} str
   * @return {?}
   */
  function set(type, value, str) {
    /** @type {(Array<string>|null)} */
    var matches = regex.exec(value);
    return matches ? Math.max(0, matches[2] - (str || 0)) + (matches[3] || "px") : value;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {string} extra
   * @param {boolean} isBorderBox
   * @param {!Object} styles
   * @param {number} themeName
   * @return {?}
   */
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles, themeName) {
    /** @type {number} */
    var i = "width" === name ? 1 : 0;
    /** @type {number} */
    var value = 0;
    /** @type {number} */
    var val = 0;
    if (extra === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (; i < 4; i = i + 2) {
      if ("margin" === extra) {
        val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if ("content" === extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if ("margin" !== extra) {
          /** @type {number} */
          val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if ("padding" !== extra) {
          val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } else {
          value = value + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return !isBorderBox && themeName >= 0 && (val = val + Math.max(0, Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - themeName - val - value - .5))), val;
  }
  /**
   * @param {!Object} elem
   * @param {string} name
   * @param {!Object} extra
   * @return {?}
   */
  function getWidthOrHeight(elem, name, extra) {
    var styles = getStyles(elem);
    var value = curCSS(elem, name, styles);
    /** @type {boolean} */
    var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
    /** @type {boolean} */
    var valueIsBorderBox = isBorderBox;
    if (rnumnonpx.test(value)) {
      if (!extra) {
        return value;
      }
      /** @type {string} */
      value = "auto";
    }
    return valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || value === elem.style[name]), ("auto" === value || !parseFloat(value) && "inline" === jQuery.css(elem, "display", false, styles)) && (value = elem["offset" + name[0].toUpperCase() + name.slice(1)], valueIsBorderBox = true), (value = parseFloat(value) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, value) + "px";
  }
  /**
   * @param {!Object} obj
   * @param {!Object} key
   * @param {!Object} object
   * @param {!Object} end
   * @param {!Object} easing
   * @return {?}
   */
  function Tween(obj, key, object, end, easing) {
    return new Tween.prototype.init(obj, key, object, end, easing);
  }
  /**
   * @return {undefined}
   */
  function step() {
    if (rt) {
      if (false === document.hidden && window.requestAnimationFrame) {
        window.requestAnimationFrame(step);
      } else {
        window.setTimeout(step, jQuery.fx.interval);
      }
      jQuery.fx.tick();
    }
  }
  /**
   * @return {?}
   */
  function createFxNow() {
    return window.setTimeout(function() {
      fxNow = void 0;
    }), fxNow = Date.now();
  }
  /**
   * @param {string} type
   * @param {number} includeWidth
   * @return {?}
   */
  function genFx(type, includeWidth) {
    var which;
    /** @type {number} */
    var i = 0;
    var attrs = {
      height : type
    };
    /** @type {number} */
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i = i + (2 - includeWidth)) {
      attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
    }
    return includeWidth && (attrs.opacity = attrs.width = type), attrs;
  }
  /**
   * @param {?} value
   * @param {string} prop
   * @param {?} animation
   * @return {?}
   */
  function createTween(value, prop, animation) {
    var tween;
    var args = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
    /** @type {number} */
    var i = 0;
    var az = args.length;
    for (; i < az; i++) {
      if (tween = args[i].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  /**
   * @param {?} elem
   * @param {!Object} props
   * @param {!Object} opts
   * @return {undefined}
   */
  function defaultPrefilter(elem, props, opts) {
    var prop;
    var value;
    var matched;
    var hooks;
    var oldfire;
    var tween;
    var restoreDisplay;
    var display;
    /** @type {boolean} */
    var f = "width" in props || "height" in props;
    var anim = this;
    var orig = {};
    var style = elem.style;
    var hidden = elem.nodeType && isHidden(elem);
    var dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      if (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued) {
        /** @type {number} */
        hooks.unqueued = 0;
        /** @type {function(): undefined} */
        oldfire = hooks.empty.fire;
        /**
         * @return {undefined}
         */
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      if (value = props[prop], contribRegex.test(value)) {
        if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
          if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
            continue;
          }
          /** @type {boolean} */
          hidden = true;
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    if ((tween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
      if (f && 1 === elem.nodeType) {
        /** @type {!Array} */
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        if (null == (restoreDisplay = dataShow && dataShow.display)) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        if ("none" === (display = jQuery.css(elem, "display"))) {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery.css(elem, "display");
            showHide([elem]);
          }
        }
        if (("inline" === display || "inline-block" === display && null != restoreDisplay) && "none" === jQuery.css(elem, "float")) {
          if (!tween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (null == restoreDisplay) {
              display = style.display;
              restoreDisplay = "none" === display ? "" : display;
            }
          }
          /** @type {string} */
          style.display = "inline-block";
        }
      }
      if (opts.overflow) {
        /** @type {string} */
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      /** @type {boolean} */
      tween = false;
      for (prop in orig) {
        if (!tween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", {
              display : restoreDisplay
            });
          }
          if (matched) {
            /** @type {boolean} */
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
        }
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            /** @type {number} */
            tween.start = 0;
          }
        }
      }
    }
  }
  /**
   * @param {!Array} obj
   * @param {!Array} props
   * @return {undefined}
   */
  function propFilter(obj, props) {
    var key;
    var name;
    var value;
    var data;
    var hooks;
    for (key in obj) {
      if (name = camelCase(key), value = props[name], data = obj[key], Array.isArray(data) && (value = data[1], data = obj[key] = data[0]), key !== name && (obj[name] = data, delete obj[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
        data = hooks.expand(data);
        delete obj[name];
        for (key in data) {
          if (!(key in obj)) {
            obj[key] = data[key];
            props[key] = value;
          }
        }
      } else {
        props[name] = value;
      }
    }
  }
  /**
   * @param {string} elem
   * @param {?} properties
   * @param {!Object} options
   * @return {?}
   */
  function Animation(elem, properties, options) {
    var result;
    var i;
    /** @type {number} */
    var index = 0;
    var ncells = Animation.prefilters.length;
    var deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    });
    /**
     * @return {?}
     */
    var tick = function() {
      if (i) {
        return false;
      }
      var currentTime = fxNow || createFxNow();
      /** @type {number} */
      var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
      /** @type {number} */
      var percent = 1 - (remaining / animation.duration || 0);
      /** @type {number} */
      var index = 0;
      var length = animation.tweens.length;
      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }
      return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), false);
    };
    var animation = deferred.promise({
      elem : elem,
      props : jQuery.extend({}, properties),
      opts : jQuery.extend(true, {
        specialEasing : {},
        easing : jQuery.easing._default
      }, options),
      originalProperties : properties,
      originalOptions : options,
      startTime : fxNow || createFxNow(),
      duration : options.duration,
      tweens : [],
      createTween : function(prop, end) {
        var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        return animation.tweens.push(result), result;
      },
      stop : function(value) {
        /** @type {number} */
        var index = 0;
        var mid = value ? animation.tweens.length : 0;
        if (i) {
          return this;
        }
        /** @type {boolean} */
        i = true;
        for (; index < mid; index++) {
          animation.tweens[index].run(1);
        }
        return value ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, value])) : deferred.rejectWith(elem, [animation, value]), this;
      }
    });
    var props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < ncells; index++) {
      if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
        return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
      }
    }
    return jQuery.map(props, createTween, animation), isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
      elem : elem,
      anim : animation,
      queue : animation.opts.queue
    })), animation;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function log(name) {
    return (name.match(rnotwhite) || []).join(" ");
  }
  /**
   * @param {!Node} elem
   * @return {?}
   */
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function trim(value) {
    return Array.isArray(value) ? value : "string" == typeof value ? value.match(rnotwhite) || [] : [];
  }
  /**
   * @param {string} path
   * @param {!Array} data
   * @param {string} base
   * @param {!Function} next
   * @return {undefined}
   */
  function extend(path, data, base, next) {
    var type;
    if (Array.isArray(data)) {
      jQuery.each(data, function(i, response) {
        if (base || hasExtRx.test(path)) {
          next(path, response);
        } else {
          extend(path + "[" + ("object" == typeof response && null != response ? i : "") + "]", response, base, next);
        }
      });
    } else {
      if (base || "object" !== type(data)) {
        next(path, data);
      } else {
        for (type in data) {
          extend(path + "[" + type + "]", data[type], base, next);
        }
      }
    }
  }
  /**
   * @param {!Object} structure
   * @return {?}
   */
  function addToPrefiltersOrTransports(structure) {
    return function(name, n) {
      if ("string" != typeof name) {
        /** @type {string} */
        n = name;
        /** @type {string} */
        name = "*";
      }
      var type;
      /** @type {number} */
      var ol = 0;
      var o = name.toLowerCase().match(rnotwhite) || [];
      if (isFunction(n)) {
        for (; type = o[ol++];) {
          if ("+" === type[0]) {
            type = type.slice(1) || "*";
            (structure[type] = structure[type] || []).unshift(n);
          } else {
            (structure[type] = structure[type] || []).push(n);
          }
        }
      }
    };
  }
  /**
   * @param {!Object} structure
   * @param {?} options
   * @param {!Object} originalOptions
   * @param {?} jqXHR
   * @return {?}
   */
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    /**
     * @param {string} type
     * @return {?}
     */
    function inspect(type) {
      var eventMark;
      return documentEventHandlers[type] = true, jQuery.each(structure[type] || [], function(canCreateDiscussions, prefilterOrFactory) {
        var e = prefilterOrFactory(options, originalOptions, jqXHR);
        return "string" != typeof e || seekingTransport || documentEventHandlers[e] ? seekingTransport ? !(eventMark = e) : void 0 : (options.dataTypes.unshift(e), inspect(e), false);
      }), eventMark;
    }
    var documentEventHandlers = {};
    /** @type {boolean} */
    var seekingTransport = structure === transports;
    return inspect(options.dataTypes[0]) || !documentEventHandlers["*"] && inspect("*");
  }
  /**
   * @param {?} target
   * @param {?} opts
   * @return {?}
   */
  function ajaxExtend(target, opts) {
    var key;
    var deep;
    var flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in opts) {
      if (void 0 !== opts[key]) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
      }
    }
    return deep && jQuery.extend(true, target, deep), target;
  }
  /**
   * @param {!Object} s
   * @param {!XMLHttpRequest} jqXHR
   * @param {!Array} responses
   * @return {?}
   */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct;
    var type;
    var finalDataType;
    var firstDataType;
    var contents = s.contents;
    var dataTypes = s.dataTypes;
    for (; "*" === dataTypes[0];) {
      dataTypes.shift();
      if (void 0 === ct) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          /** @type {string} */
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          /** @type {string} */
          firstDataType = type;
        }
      }
      /** @type {(string|undefined)} */
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
    }
  }
  /**
   * @param {!Object} s
   * @param {string} response
   * @param {?} jqXHR
   * @param {number} isSuccess
   * @return {?}
   */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2;
    var current;
    var conv;
    var parts;
    var value;
    var converters = {};
    var resList = s.dataTypes.slice();
    if (resList[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = resList.shift();
    for (; current;) {
      if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !value && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), value = current, current = resList.shift()) {
        if ("*" === current) {
          current = value;
        } else {
          if ("*" !== value && value !== current) {
            if (!(conv = converters[value + " " + current] || converters["* " + current])) {
              for (conv2 in converters) {
                if ((parts = conv2.split(" "))[1] === current && (conv = converters[value + " " + parts[0]] || converters["* " + parts[0]])) {
                  if (true === conv) {
                    conv = converters[conv2];
                  } else {
                    if (true !== converters[conv2]) {
                      /** @type {string} */
                      current = parts[0];
                      resList.unshift(parts[1]);
                    }
                  }
                  break;
                }
              }
            }
            if (true !== conv) {
              if (conv && s["throws"]) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state : "parsererror",
                    error : conv ? e : "No conversion from " + value + " to " + current
                  };
                }
              }
            }
          }
        }
      }
    }
    return {
      state : "success",
      data : response
    };
  }
  /** @type {!Array} */
  var arr = [];
  var document = window.document;
  /** @type {function(!Object): (Object|null)} */
  var getProto = Object.getPrototypeOf;
  /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
  var slice = arr.slice;
  /** @type {function(this:*, ...*): !Array<?>} */
  var concat = arr.concat;
  /** @type {function(this:IArrayLike<T>, ...T): number} */
  var push = arr.push;
  /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
  var indexOf = arr.indexOf;
  var class2type = {};
  /** @type {function(this:*): string} */
  var toString = class2type.toString;
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = class2type.hasOwnProperty;
  /** @type {function(this:!Function): string} */
  var fnToString = hasOwn.toString;
  /** @type {string} */
  var Mixin2 = fnToString.call(Object);
  var support = {};
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var isFunction = function _getInnerVal(obj) {
    return "function" == typeof obj && "number" != typeof obj.nodeType;
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var isString = function isCurrentWindow(obj) {
    return null != obj && obj === obj.window;
  };
  var packet = {
    type : true,
    src : true,
    noModule : true
  };
  /** @type {string} */
  var b = "3.3.1";
  /**
   * @param {!Object} selector
   * @param {!Object} context
   * @return {?}
   */
  var jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
  };
  /** @type {!RegExp} */
  var REGEX_ESCAPE_EXPR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  jQuery.fn = jQuery.prototype = {
    jquery : "3.3.1",
    constructor : jQuery,
    length : 0,
    toArray : function() {
      return slice.call(this);
    },
    get : function(num) {
      return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
    },
    pushStack : function(name) {
      var ret = jQuery.merge(this.constructor(), name);
      return ret.prevObject = this, ret;
    },
    each : function(callback) {
      return jQuery.each(this, callback);
    },
    map : function(fn) {
      return this.pushStack(jQuery.map(this, function(elem, event) {
        return fn.call(elem, event, elem);
      }));
    },
    slice : function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    eq : function(idx) {
      var l = this.length;
      var i = +idx + (idx < 0 ? l : 0);
      return this.pushStack(i >= 0 && i < l ? [this[i]] : []);
    },
    end : function() {
      return this.prevObject || this.constructor();
    },
    push : push,
    sort : arr.sort,
    splice : arr.splice
  };
  /** @type {function(): ?} */
  jQuery.extend = jQuery.fn.extend = function() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    /** @type {number} */
    var i = 1;
    /** @type {number} */
    var length = arguments.length;
    /** @type {boolean} */
    var deep = false;
    if ("boolean" == typeof target) {
      /** @type {boolean} */
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (!("object" == typeof target || isFunction(target))) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if (null != (options = arguments[i])) {
        for (name in options) {
          src = target[name];
          if (target !== (copy = options[name])) {
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              if (copyIsArray) {
                /** @type {boolean} */
                copyIsArray = false;
                clone = src && Array.isArray(src) ? src : [];
              } else {
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }
              target[name] = jQuery.extend(deep, clone, copy);
            } else {
              if (void 0 !== copy) {
                target[name] = copy;
              }
            }
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando : "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady : true,
    error : function(value) {
      throw new Error(value);
    },
    noop : function() {
    },
    isPlainObject : function(obj) {
      var proto;
      var hasOwnProperty;
      return !(!obj || "[object Object]" !== toString.call(obj)) && (!(proto = getProto(obj)) || "function" == typeof(hasOwnProperty = hasOwn.call(proto, "constructor") && proto.constructor) && fnToString.call(hasOwnProperty) === Mixin2);
    },
    isEmptyObject : function(obj) {
      var key;
      for (key in obj) {
        return false;
      }
      return true;
    },
    globalEval : function(data) {
      fn(data);
    },
    each : function(obj, fn) {
      var i;
      /** @type {number} */
      var n = 0;
      if (isArrayLike(obj)) {
        i = obj.length;
        for (; n < i; n++) {
          if (false === fn.call(obj[n], n, obj[n])) {
            break;
          }
        }
      } else {
        for (n in obj) {
          if (false === fn.call(obj[n], n, obj[n])) {
            break;
          }
        }
      }
      return obj;
    },
    trim : function(text) {
      return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
    },
    makeArray : function(arr, o) {
      var obj = o || [];
      return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(obj, "string" == typeof arr ? [arr] : arr) : push.call(obj, arr)), obj;
    },
    inArray : function(elem, arr, i) {
      return null == arr ? -1 : indexOf.call(arr, elem, i);
    },
    merge : function(data, params) {
      /** @type {number} */
      var _jlen = +params.length;
      /** @type {number} */
      var k = 0;
      var index = data.length;
      for (; k < _jlen; k++) {
        data[index++] = params[k];
      }
      return data.length = index, data;
    },
    grep : function(elems, callback, a) {
      var addrMethod;
      /** @type {!Array} */
      var ret = [];
      /** @type {number} */
      var i = 0;
      var length = elems.length;
      /** @type {boolean} */
      var booA = !a;
      for (; i < length; i++) {
        if ((addrMethod = !callback(elems[i], i)) !== booA) {
          ret.push(elems[i]);
        }
      }
      return ret;
    },
    map : function(input, transform, id) {
      var inpLen;
      var val;
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var ret = [];
      if (isArrayLike(input)) {
        inpLen = input.length;
        for (; i < inpLen; i++) {
          if (null != (val = transform(input[i], i, id))) {
            ret.push(val);
          }
        }
      } else {
        for (i in input) {
          if (null != (val = transform(input[i], i, id))) {
            ret.push(val);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid : 1,
    support : support
  });
  if ("function" == typeof Symbol) {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
    class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
  });
  var Sizzle = function(window) {
    /**
     * @param {string} selector
     * @param {!Object} context
     * @param {!Array} results
     * @param {!Array} seed
     * @return {?}
     */
    function Sizzle(selector, context, results, seed) {
      var m;
      var i;
      var elem;
      var nid;
      var match;
      var groups;
      var newSelector;
      var newContext = context && context.ownerDocument;
      var undefined = context ? context.nodeType : 9;
      if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
        return results;
      }
      if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
        if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
          if (m = match[1]) {
            if (9 === undefined) {
              if (!(elem = context.getElementById(m))) {
                return results;
              }
              if (elem.id === m) {
                return results.push(elem), results;
              }
            } else {
              if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                return results.push(elem), results;
              }
            }
          } else {
            if (match[2]) {
              return push.apply(results, context.getElementsByTagName(selector)), results;
            }
            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              return push.apply(results, context.getElementsByClassName(m)), results;
            }
          }
        }
        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (1 !== undefined) {
            /** @type {!Object} */
            newContext = context;
            /** @type {string} */
            newSelector = selector;
          } else {
            if ("object" !== context.nodeName.toLowerCase()) {
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              }
              i = (groups = tokenize(selector)).length;
              for (; i--;) {
                /** @type {string} */
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context;
            }
          }
          if (newSelector) {
            try {
              return push.apply(results, newContext.querySelectorAll(newSelector)), results;
            } catch (e) {
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * @return {?}
     */
    function createCache() {
      /**
       * @param {string} key
       * @param {?} service
       * @return {?}
       */
      function cache(key, service) {
        return buf.push(key + " ") > Expr.cacheLength && delete cache[buf.shift()], cache[key + " "] = service;
      }
      /** @type {!Array} */
      var buf = [];
      return cache;
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function markFunction(fn) {
      return fn[expando] = true, fn;
    }
    /**
     * @param {!Function} expect
     * @return {?}
     */
    function assert(expect) {
      var wrap = document.createElement("fieldset");
      try {
        return !!expect(wrap);
      } catch (e) {
        return false;
      } finally {
        if (wrap.parentNode) {
          wrap.parentNode.removeChild(wrap);
        }
        /** @type {null} */
        wrap = null;
      }
    }
    /**
     * @param {string} attrs
     * @param {!Function} handler
     * @return {undefined}
     */
    function addHandle(attrs, handler) {
      var arr = attrs.split("|");
      var i = arr.length;
      for (; i--;) {
        /** @type {!Function} */
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * @param {!Element} a
     * @param {!Element} b
     * @return {?}
     */
    function siblingCheck(a, b) {
      var cur = b && a;
      var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
      if (.num_const) {
        return .num_const;
      }
      if (cur) {
        for (; cur = cur.nextSibling;) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    /**
     * @param {!Object} browser
     * @return {?}
     */
    function jQuerify(browser) {
      return function(elem) {
        return "input" === elem.nodeName.toLowerCase() && elem.type === browser;
      };
    }
    /**
     * @param {!Object} type
     * @return {?}
     */
    function createButtonPseudo(type) {
      return function(section) {
        var undefined = section.nodeName.toLowerCase();
        return ("input" === undefined || "button" === undefined) && section.type === type;
      };
    }
    /**
     * @param {boolean} disabled
     * @return {?}
     */
    function createDisabledPseudo(disabled) {
      return function(elem) {
        return "form" in elem ? elem.parentNode && false === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
      };
    }
    /**
     * @param {!Function} fn
     * @return {?}
     */
    function createPositionalPseudo(fn) {
      return markFunction(function(key) {
        return key = +key, markFunction(function(a, b) {
          var i;
          var k = fn([], a.length, key);
          var l = k.length;
          for (; l--;) {
            if (a[i = k[l]]) {
              /** @type {boolean} */
              a[i] = !(b[i] = a[i]);
            }
          }
        });
      });
    }
    /**
     * @param {!Node} context
     * @return {?}
     */
    function testContext(context) {
      return context && "undefined" != typeof context.getElementsByTagName && context;
    }
    /**
     * @return {undefined}
     */
    function setFilters() {
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function toSelector(tokens) {
      /** @type {number} */
      var i = 0;
      var numTokens = tokens.length;
      /** @type {string} */
      var selector = "";
      for (; i < numTokens; i++) {
        /** @type {string} */
        selector = selector + tokens[i].value;
      }
      return selector;
    }
    /**
     * @param {!Function} matcher
     * @param {!Object} combinator
     * @param {string} base
     * @return {?}
     */
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir;
      var skip = combinator.next;
      var key = skip || dir;
      var checkNonElements = base && "parentNode" === key;
      /** @type {number} */
      var doneName = done++;
      return combinator.first ? function(elem, stat, context) {
        for (; elem = elem[dir];) {
          if (1 === elem.nodeType || checkNonElements) {
            return matcher(elem, stat, context);
          }
        }
        return false;
      } : function(elem, context, xml) {
        var oldCache;
        var uniqueCache;
        var outerCache;
        /** @type {!Array} */
        var newCache = [dirruns, doneName];
        if (xml) {
          for (; elem = elem[dir];) {
            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) {
              return true;
            }
          }
        } else {
          for (; elem = elem[dir];) {
            if (1 === elem.nodeType || checkNonElements) {
              if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else {
                if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                }
                if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    /**
     * @param {!Object} matchers
     * @return {?}
     */
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        for (; i--;) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    /**
     * @param {string} selector
     * @param {!NodeList} contexts
     * @param {!Array} results
     * @return {?}
     */
    function multipleContexts(selector, contexts, results) {
      /** @type {number} */
      var i = 0;
      var count = contexts.length;
      for (; i < count; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    /**
     * @param {!Array} unmatched
     * @param {!Object} map
     * @param {!Object} filter
     * @param {!Object} name
     * @param {?} options
     * @return {?}
     */
    function condense(unmatched, map, filter, name, options) {
      var elem;
      /** @type {!Array} */
      var newUnmatched = [];
      /** @type {number} */
      var i = 0;
      var len = unmatched.length;
      /** @type {boolean} */
      var l = null != map;
      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!(filter && !filter(elem, name, options))) {
            newUnmatched.push(elem);
            if (l) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    /**
     * @param {!Object} preFilter
     * @param {string} selector
     * @param {string} matcher
     * @param {!Object} postFilter
     * @param {!Object} postFinder
     * @param {string} postSelector
     * @return {?}
     */
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
        var temp;
        var i;
        var elem;
        /** @type {!Array} */
        var preMap = [];
        /** @type {!Array} */
        var postMap = [];
        var preexisting = results.length;
        var elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []);
        var matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml);
        var matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          for (; i--;) {
            if (elem = temp[i]) {
              /** @type {boolean} */
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              /** @type {!Array} */
              temp = [];
              i = matcherOut.length;
              for (; i--;) {
                if (elem = matcherOut[i]) {
                  temp.push(matcherIn[i] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i = matcherOut.length;
            for (; i--;) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                /** @type {boolean} */
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    /**
     * @param {!Array} tokens
     * @return {?}
     */
    function matcherFromTokens(tokens) {
      var checkContext;
      var matcher;
      var j;
      var len = tokens.length;
      var leadingRelative = Expr.relative[tokens[0].type];
      var implicitRelative = leadingRelative || Expr.relative[" "];
      /** @type {number} */
      var i = leadingRelative ? 1 : 0;
      var matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true);
      var matchAnyContext = addCombinator(function(value) {
        return indexOf(checkContext, value) > -1;
      }, implicitRelative, true);
      /** @type {!Array} */
      var matchers = [function(elem, context, xml) {
        var i = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        return checkContext = null, i;
      }];
      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          /** @type {!Array} */
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
            /** @type {number} */
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
              value : " " === tokens[i - 2].type ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    /**
     * @param {!Array} elementMatchers
     * @param {!Array} setMatchers
     * @return {?}
     */
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      /** @type {boolean} */
      var bySet = setMatchers.length > 0;
      /** @type {boolean} */
      var byElement = elementMatchers.length > 0;
      /**
       * @param {!Function} seed
       * @param {!Object} context
       * @param {number} xml
       * @param {!Array} results
       * @param {!Object} outermost
       * @return {?}
       */
      var superMatcher = function(seed, context, xml, results, outermost) {
        var elem;
        var j;
        var matcher;
        /** @type {number} */
        var matchedCount = 0;
        /** @type {string} */
        var i = "0";
        var unmatched = seed && [];
        /** @type {!Array} */
        var setMatched = [];
        var contextBackup = outermostContext;
        var obj = seed || byElement && Expr.find.TAG("*", outermost);
        var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
        var k = obj.length;
        if (outermost) {
          outermostContext = context === document || context || outermost;
        }
        for (; i !== k && null != (elem = obj[i]); i++) {
          if (byElement && elem) {
            /** @type {number} */
            j = 0;
            if (!(context || elem.ownerDocument === document)) {
              setDocument(elem);
              /** @type {boolean} */
              xml = !documentIsHTML;
            }
            for (; matcher = elementMatchers[j++];) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem);
            }
          }
        }
        if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
          /** @type {number} */
          j = 0;
          for (; matcher = setMatchers[j++];) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              for (; i--;) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        }
        return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    var i;
    var support;
    var Expr;
    var getText;
    var isXML;
    var tokenize;
    var compile;
    var select;
    var outermostContext;
    var sortInput;
    var ret;
    var setDocument;
    var document;
    var docElem;
    var documentIsHTML;
    var rbuggyQSA;
    var rbuggyMatches;
    var matches;
    var contains;
    /** @type {string} */
    var expando = "sizzle" + 1 * new Date;
    var preferredDoc = window.document;
    /** @type {number} */
    var dirruns = 0;
    /** @type {number} */
    var done = 0;
    var classCache = createCache();
    var tokenCache = createCache();
    var compilerCache = createCache();
    /**
     * @param {?} type
     * @param {?} string
     * @return {?}
     */
    var time = function(type, string) {
      return type === string && (ret = true), 0;
    };
    /** @type {function(this:Object, *): boolean} */
    var hasOwn = {}.hasOwnProperty;
    /** @type {!Array} */
    var arr = [];
    /** @type {function(this:IArrayLike<T>): T} */
    var pop = arr.pop;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push_native = arr.push;
    /** @type {function(this:IArrayLike<T>, ...T): number} */
    var push = arr.push;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var slice = arr.slice;
    /**
     * @param {string} list
     * @param {!Object} value
     * @return {?}
     */
    var indexOf = function(list, value) {
      /** @type {number} */
      var i = 0;
      var listLength = list.length;
      for (; i < listLength; i++) {
        if (list[i] === value) {
          return i;
        }
      }
      return -1;
    };
    /** @type {string} */
    var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    /** @type {string} */
    var _test = "[\\x20\\t\\r\\n\\f]";
    /** @type {string} */
    var escRightBracket = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+";
    /** @type {string} */
    var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
    /** @type {string} */
    var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
    /** @type {!RegExp} */
    var entityEscapeRegExp = new RegExp(_test + "+", "g");
    /** @type {!RegExp} */
    var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
    /** @type {!RegExp} */
    var chunker = new RegExp("^" + _test + "*," + _test + "*");
    /** @type {!RegExp} */
    var rcomma = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
    /** @type {!RegExp} */
    var rattributeQuotes = new RegExp("=" + _test + "*([^\\]'\"]*?)" + _test + "*\\]", "g");
    /** @type {!RegExp} */
    var rpseudo = new RegExp(pseudos);
    /** @type {!RegExp} */
    var ridentifier = new RegExp("^" + escRightBracket + "$");
    var matchExpr = {
      ID : new RegExp("^#(" + escRightBracket + ")"),
      CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
      TAG : new RegExp("^(" + escRightBracket + "|[*])"),
      ATTR : new RegExp("^" + _end2),
      PSEUDO : new RegExp("^" + pseudos),
      CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
      bool : new RegExp("^(?:" + value + ")$", "i"),
      needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
    };
    /** @type {!RegExp} */
    var inputNodeNames = /^(?:input|select|textarea|button)$/i;
    /** @type {!RegExp} */
    var rnoType = /^h\d$/i;
    /** @type {!RegExp} */
    var rnative = /^[^{]+\{\s*\[native \w/;
    /** @type {!RegExp} */
    var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    /** @type {!RegExp} */
    var RE_PSEUDOS = /[+~]/;
    /** @type {!RegExp} */
    var start = new RegExp("\\\\([\\da-f]{1,6}" + _test + "?|(" + _test + ")|.)", "ig");
    /**
     * @param {?} match
     * @param {string} escaped
     * @param {boolean} escapedWhitespace
     * @return {?}
     */
    var data = function(match, escaped, escapedWhitespace) {
      /** @type {number} */
      var high = "0x" + escaped - 65536;
      return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
    };
    /** @type {!RegExp} */
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    /**
     * @param {string} text
     * @param {string} ch
     * @return {?}
     */
    var fcssescape = function(text, ch) {
      return ch ? "\x00" === text ? "\ufffd" : text.slice(0, -1) + "\\" + text.charCodeAt(text.length - 1).toString(16) + " " : "\\" + text;
    };
    /**
     * @return {undefined}
     */
    var unloadHandler = function() {
      setDocument();
    };
    var disabledAncestor = addCombinator(function(elem) {
      return true === elem.disabled && ("form" in elem || "label" in elem);
    }, {
      dir : "parentNode",
      next : "legend"
    });
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply : arr.length ? function(target, array) {
          push_native.apply(target, slice.call(array));
        } : function(target, array) {
          var j = target.length;
          /** @type {number} */
          var item = 0;
          for (; target[j++] = array[item++];) {
          }
          /** @type {number} */
          target.length = j - 1;
        }
      };
    }
    support = Sizzle.support = {};
    /** @type {function(!Object): ?} */
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return !!documentElement && "HTML" !== documentElement.nodeName;
    };
    /** @type {function(!Object): ?} */
    setDocument = Sizzle.setDocument = function(node) {
      var init;
      var subWindow;
      var doc = node ? node.ownerDocument || node : preferredDoc;
      return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = document.documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, false) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(elm) {
        return elm.className = "i", !elm.getAttribute("className");
      }), support.getElementsByTagName = assert(function(testee) {
        return testee.appendChild(document.createComment("")), !testee.getElementsByTagName("*").length;
      }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(body) {
        return docElem.appendChild(body).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length;
      }), support.getById ? (Expr.filter.ID = function(elem) {
        var i = elem.replace(start, data);
        return function(e) {
          return e.getAttribute("id") === i;
        };
      }, Expr.find.ID = function(elem, context) {
        if ("undefined" != typeof context.getElementById && documentIsHTML) {
          var c_style = context.getElementById(elem);
          return c_style ? [c_style] : [];
        }
      }) : (Expr.filter.ID = function(elem) {
        var text = elem.replace(start, data);
        return function(elem) {
          var lastToken = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
          return lastToken && lastToken.value === text;
        };
      }, Expr.find.ID = function(value, context) {
        if ("undefined" != typeof context.getElementById && documentIsHTML) {
          var attr;
          var r;
          var ret;
          var tmp = context.getElementById(value);
          if (tmp) {
            if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
              return [tmp];
            }
            ret = context.getElementsByName(value);
            /** @type {number} */
            r = 0;
            for (; tmp = ret[r++];) {
              if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                return [tmp];
              }
            }
          }
          return [];
        }
      }), Expr.find.TAG = support.getElementsByTagName ? function(v, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(v) : support.qsa ? t.querySelectorAll(v) : void 0;
      } : function(selector, document) {
        var first;
        /** @type {!Array} */
        var tmp = [];
        /** @type {number} */
        var i = 0;
        var results = document.getElementsByTagName(selector);
        if ("*" === selector) {
          for (; first = results[i++];) {
            if (1 === first.nodeType) {
              tmp.push(first);
            }
          }
          return tmp;
        }
        return results;
      }, Expr.find.CLASS = support.getElementsByClassName && function(l, docDom) {
        if ("undefined" != typeof docDom.getElementsByClassName && documentIsHTML) {
          return docDom.getElementsByClassName(l);
        }
      }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(container) {
        /** @type {string} */
        docElem.appendChild(container).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
        if (container.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
        }
        if (!container.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + _test + "*(?:value|" + value + ")");
        }
        if (!container.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        }
        if (!container.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        }
        if (!container.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }
      }), assert(function(el) {
        /** @type {string} */
        el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D");
        if (el.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
        }
        if (2 !== el.querySelectorAll(":enabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        /** @type {boolean} */
        docElem.appendChild(el).disabled = true;
        if (2 !== el.querySelectorAll(":disabled").length) {
          rbuggyQSA.push(":enabled", ":disabled");
        }
        el.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
        support.disconnectedMatch = matches.call(el, "*");
        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), init = rnative.test(docElem.compareDocumentPosition), contains = init || rnative.test(docElem.contains) ? function(a, b) {
        var adown = 9 === a.nodeType ? a.documentElement : a;
        var bup = b && b.parentNode;
        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
      } : function(a, b) {
        if (b) {
          for (; b = b.parentNode;) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      }, time = init ? function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        /** @type {number} */
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return compare || (1 & (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
      } : function(a, b) {
        if (a === b) {
          return ret = true, 0;
        }
        var cur;
        /** @type {number} */
        var i = 0;
        var aup = a.parentNode;
        var bup = b.parentNode;
        /** @type {!Array} */
        var ap = [a];
        /** @type {!Array} */
        var bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }
        if (aup === bup) {
          return siblingCheck(a, b);
        }
        /** @type {!HTMLElement} */
        cur = a;
        for (; cur = cur.parentNode;) {
          ap.unshift(cur);
        }
        /** @type {!HTMLElement} */
        cur = b;
        for (; cur = cur.parentNode;) {
          bp.unshift(cur);
        }
        for (; ap[i] === bp[i];) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      }, document) : document;
    };
    /**
     * @param {string} expr
     * @param {!Array} set
     * @return {?}
     */
    Sizzle.matches = function(expr, set) {
      return Sizzle(expr, null, null, set);
    };
    /**
     * @param {!Object} elem
     * @param {string} expr
     * @return {?}
     */
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
            return ret;
          }
        } catch (e) {
        }
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    /**
     * @param {!Object} context
     * @param {!Object} selector
     * @return {?}
     */
    Sizzle.contains = function(context, selector) {
      return (context.ownerDocument || context) !== document && setDocument(context), contains(context, selector);
    };
    /**
     * @param {!Object} elem
     * @param {string} name
     * @return {?}
     */
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()];
      var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
      return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    /**
     * @param {string} text
     * @return {?}
     */
    Sizzle.escape = function(text) {
      return (text + "").replace(rcssescape, fcssescape);
    };
    /**
     * @param {string} elem
     * @return {?}
     */
    Sizzle.error = function(elem) {
      throw new Error("Syntax error, unrecognized expression: " + elem);
    };
    /**
     * @param {!Array} arr
     * @return {?}
     */
    Sizzle.uniqueSort = function(arr) {
      var v;
      /** @type {!Array} */
      var indices = [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var j = 0;
      if (ret = !support.detectDuplicates, sortInput = !support.sortStable && arr.slice(0), arr.sort(time), ret) {
        for (; v = arr[j++];) {
          if (v === arr[j]) {
            /** @type {number} */
            i = indices.push(j);
          }
        }
        for (; i--;) {
          arr.splice(indices[i], 1);
        }
      }
      return sortInput = null, arr;
    };
    /** @type {function(!Object): ?} */
    getText = Sizzle.getText = function(elem) {
      var key;
      /** @type {string} */
      var result = "";
      /** @type {number} */
      var i = 0;
      var type = elem.nodeType;
      if (type) {
        if (1 === type || 9 === type || 11 === type) {
          if ("string" == typeof elem.textContent) {
            return elem.textContent;
          }
          elem = elem.firstChild;
          for (; elem; elem = elem.nextSibling) {
            result = result + getText(elem);
          }
        } else {
          if (3 === type || 4 === type) {
            return elem.nodeValue;
          }
        }
      } else {
        for (; key = elem[i++];) {
          result = result + getText(key);
        }
      }
      return result;
    };
    (Expr = Sizzle.selectors = {
      cacheLength : 50,
      createPseudo : markFunction,
      match : matchExpr,
      attrHandle : {},
      find : {},
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(attr) {
          return attr[1] = attr[1].replace(start, data), attr[3] = (attr[3] || attr[4] || attr[5] || "").replace(start, data), "~=" === attr[2] && (attr[3] = " " + attr[3] + " "), attr.slice(0, 4);
        },
        CHILD : function(match) {
          return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
        },
        PSEUDO : function(match) {
          var excess;
          var unquoted = !match[6] && match[2];
          return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
        }
      },
      filter : {
        TAG : function(elem) {
          var nodeName = elem.replace(start, data).toLowerCase();
          return "*" === elem ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        CLASS : function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + _test + ")" + className + "(" + _test + "|$)")) && classCache(className, function(e) {
            return pattern.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR : function(name, string, value) {
          return function(elem) {
            var key = Sizzle.attr(elem, name);
            return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && key.indexOf(value) > -1 : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? (" " + key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) > -1 : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
          };
        },
        CHILD : function(type, what, argument, first, last) {
          /** @type {boolean} */
          var simple = "nth" !== type.slice(0, 3);
          /** @type {boolean} */
          var forward = "last" !== type.slice(-4);
          /** @type {boolean} */
          var ofType = "of-type" === what;
          return 1 === first && 0 === last ? function(tplDiv) {
            return !!tplDiv.parentNode;
          } : function(elem, n, xml) {
            var cache;
            var uniqueCache;
            var outerCache;
            var node;
            var nodeIndex;
            var start;
            /** @type {string} */
            var dir = simple !== forward ? "nextSibling" : "previousSibling";
            var parent = elem.parentNode;
            var name = ofType && elem.nodeName.toLowerCase();
            /** @type {boolean} */
            var dependency = !xml && !ofType;
            /** @type {boolean} */
            var diff = false;
            if (parent) {
              if (simple) {
                for (; dir;) {
                  /** @type {!Node} */
                  node = elem;
                  for (; node = node[dir];) {
                    if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) {
                      return false;
                    }
                  }
                  /** @type {(boolean|string)} */
                  start = dir = "only" === type && !start && "nextSibling";
                }
                return true;
              }
              if (start = [forward ? parent.firstChild : parent.lastChild], forward && dependency) {
                diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                  if (1 === node.nodeType && ++diff && node === elem) {
                    /** @type {!Array} */
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (dependency && (diff = nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]), false === diff) {
                  for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) && ++diff && (dependency && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node === elem)) {
                      break;
                    }
                  }
                }
              }
              return (diff = diff - last) === first || diff % first == 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO : function(pseudo, argument) {
          var args;
          var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, result) {
            var j;
            var matched = fn(seed, argument);
            var i = matched.length;
            for (; i--;) {
              /** @type {boolean} */
              seed[j = indexOf(seed, matched[i])] = !(result[j] = matched[i]);
            }
          }) : function(responce) {
            return fn(responce, 0, args);
          }) : fn;
        }
      },
      pseudos : {
        not : markFunction(function(selector) {
          /** @type {!Array} */
          var a = [];
          /** @type {!Array} */
          var results = [];
          var matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(a, resolvedDeps, n, context) {
            var name;
            var result = matcher(a, null, context, []);
            var i = a.length;
            for (; i--;) {
              if (name = result[i]) {
                /** @type {boolean} */
                a[i] = !(resolvedDeps[i] = name);
              }
            }
          }) : function(sNewObjName, i, context) {
            return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
          };
        }),
        has : markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        contains : markFunction(function(text) {
          return text = text.replace(start, data), function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        lang : markFunction(function(lang) {
          return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(start, data).toLowerCase(), function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
              }
            } while ((elem = elem.parentNode) && 1 === elem.nodeType);
            return false;
          };
        }),
        target : function(a) {
          var charListNotLatin = window.location && window.location.hash;
          return charListNotLatin && charListNotLatin.slice(1) === a.id;
        },
        root : function(elem) {
          return elem === docElem;
        },
        focus : function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        enabled : createDisabledPseudo(false),
        disabled : createDisabledPseudo(true),
        checked : function(elem) {
          var custom = elem.nodeName.toLowerCase();
          return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
        },
        selected : function(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
        },
        empty : function(elem) {
          elem = elem.firstChild;
          for (; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent : function(elem) {
          return !Expr.pseudos.empty(elem);
        },
        header : function(elem) {
          return rnoType.test(elem.nodeName);
        },
        input : function(target) {
          return inputNodeNames.test(target.nodeName);
        },
        button : function(elem) {
          var left = elem.nodeName.toLowerCase();
          return "input" === left && "button" === elem.type || "button" === left;
        },
        text : function(elem) {
          var EXT;
          return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
        },
        first : createPositionalPseudo(function() {
          return [0];
        }),
        last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
          return [isSlidingUp - 1];
        }),
        eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
          return [srcY < 0 ? srcY + pageHeight : srcY];
        }),
        even : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
          /** @type {number} */
          var value = 0;
          for (; value < inclusiveMin; value = value + 2) {
            lastshuffle.push(value);
          }
          return lastshuffle;
        }),
        odd : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
          /** @type {number} */
          var value = 1;
          for (; value < inclusiveMin; value = value + 2) {
            lastshuffle.push(value);
          }
          return lastshuffle;
        }),
        lt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
          var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
          for (; --itemNodeList >= 0;) {
            newNodeLists.push(itemNodeList);
          }
          return newNodeLists;
        }),
        gt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
          var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
          for (; ++itemNodeList < pageHeight;) {
            newNodeLists.push(itemNodeList);
          }
          return newNodeLists;
        })
      }
    }).pseudos.nth = Expr.pseudos.eq;
    for (i in{
      radio : true,
      checkbox : true,
      file : true,
      password : true,
      image : true
    }) {
      Expr.pseudos[i] = jQuerify(i);
    }
    for (i in{
      submit : true,
      reset : true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters;
    /** @type {function(string, number): ?} */
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched;
      var match;
      var tokens;
      var type;
      var soFar;
      var groups;
      var preFilters;
      var cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      /** @type {string} */
      soFar = selector;
      /** @type {!Array} */
      groups = [];
      preFilters = Expr.preFilter;
      for (; soFar;) {
        if (!(matched && !(match = chunker.exec(soFar)))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        /** @type {boolean} */
        matched = false;
        if (match = rcomma.exec(soFar)) {
          /** @type {string} */
          matched = match.shift();
          tokens.push({
            value : matched,
            type : match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if (!(!(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value : matched,
              type : type,
              matches : match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    return compile = Sizzle.compile = function(selector, group) {
      var i;
      /** @type {!Array} */
      var setMatchers = [];
      /** @type {!Array} */
      var elementMatchers = [];
      var cached = compilerCache[selector + " "];
      if (!cached) {
        if (!group) {
          group = tokenize(selector);
        }
        i = group.length;
        for (; i--;) {
          if ((cached = matcherFromTokens(group[i]))[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        /** @type {string} */
        (cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))).selector = selector;
      }
      return cached;
    }, select = Sizzle.select = function(selector, context, results, seed) {
      var i;
      var tokens;
      var token;
      var type;
      var find;
      /** @type {(!Function|boolean)} */
      var compiled = "function" == typeof selector && selector;
      var match = !seed && tokenize(selector = compiled.selector || selector);
      if (results = results || [], 1 === match.length) {
        if ((tokens = match[0] = match[0].slice(0)).length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (!(context = (Expr.find.ID(token.matches[0].replace(start, data), context) || [])[0])) {
            return results;
          }
          if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        for (; i--;) {
          if (token = tokens[i], Expr.relative[type = token.type]) {
            break;
          }
          if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(start, data), RE_PSEUDOS.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens))) {
              return push.apply(results, seed), results;
            }
            break;
          }
        }
      }
      return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || RE_PSEUDOS.test(selector) && testContext(context.parentNode) || context), results;
    }, support.sortStable = expando.split("").sort(time).join("") === expando, support.detectDuplicates = !!ret, setDocument(), support.sortDetached = assert(function(html) {
      return 1 & html.compareDocumentPosition(document.createElement("fieldset"));
    }), assert(function(aItem) {
      return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
    }) || addHandle("type|href|height|width", function(e, t, n) {
      if (!n) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }
    }), support.attributes && assert(function(aItem) {
      return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
    }) || addHandle("value", function(src, canCreateDiscussions, n) {
      if (!n && "input" === src.nodeName.toLowerCase()) {
        return src.defaultValue;
      }
    }), assert(function(e) {
      return null == e.getAttribute("disabled");
    }) || addHandle(value, function(elem, name, n) {
      var val;
      if (!n) {
        return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }
    }), Sizzle;
  }(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  /**
   * @param {!Object} elem
   * @param {string} dir
   * @param {?} until
   * @return {?}
   */
  var dir = function(elem, dir, until) {
    /** @type {!Array} */
    var matched = [];
    /** @type {boolean} */
    var truncate = void 0 !== until;
    for (; (elem = elem[dir]) && 9 !== elem.nodeType;) {
      if (1 === elem.nodeType) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  /**
   * @param {!Element} node
   * @param {!Node} elem
   * @return {?}
   */
  var _sibling = function(node, elem) {
    /** @type {!Array} */
    var result = [];
    for (; node; node = node.nextSibling) {
      if (1 === node.nodeType && node !== elem) {
        result.push(node);
      }
    }
    return result;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  /** @type {!RegExp} */
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  /**
   * @param {string} expr
   * @param {!Object} elems
   * @param {string} not
   * @return {?}
   */
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
      return 1 === nodeToInspect.nodeType;
    }));
  };
  jQuery.fn.extend({
    find : function(a) {
      var i;
      var ret;
      var len = this.length;
      var self = this;
      if ("string" != typeof a) {
        return this.pushStack(jQuery(a).filter(function() {
          /** @type {number} */
          i = 0;
          for (; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      /** @type {number} */
      i = 0;
      for (; i < len; i++) {
        jQuery.find(a, self[i], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter : function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not : function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is : function(arg) {
      return !!winnow(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
    }
  });
  var rootjQuery;
  /** @type {!RegExp} */
  var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (jQuery.fn.init = function(selector, context, root) {
    var match;
    var o;
    if (!selector) {
      return this;
    }
    if (root = root || rootjQuery, "string" == typeof selector) {
      if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : customSelectorReg.exec(selector)) || !match[1] && context) {
        return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
      }
      if (match[1]) {
        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
          for (match in context) {
            if (isFunction(this[match])) {
              this[match](context[match]);
            } else {
              this.attr(match, context[match]);
            }
          }
        }
        return this;
      }
      return (o = document.getElementById(match[2])) && (this[0] = o, this.length = 1), this;
    }
    return selector.nodeType ? (this[0] = selector, this.length = 1, this) : isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this);
  }).prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  /** @type {!RegExp} */
  var testRxp = /^(?:parents|prev(?:Until|All))/;
  var guaranteedUnique = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  jQuery.fn.extend({
    has : function(name) {
      var targets = jQuery(name, this);
      var l = targets.length;
      return this.filter(function() {
        /** @type {number} */
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest : function(selector, context) {
      var cur;
      /** @type {number} */
      var i = 0;
      var j = this.length;
      /** @type {!Array} */
      var ret = [];
      var pos = "string" != typeof selector && jQuery(selector);
      if (!rneedsContext.test(selector)) {
        for (; i < j; i++) {
          cur = this[i];
          for (; cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selector))) {
              ret.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(ret.length > 1 ? jQuery.uniqueSort(ret) : ret);
    },
    index : function(elem) {
      return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add : function(elem, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(elem, context))));
    },
    addBack : function(selector) {
      return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.each({
    parent : function(object) {
      var n = object.parentNode;
      return n && 11 !== n.nodeType ? n : null;
    },
    parents : function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil : function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next : function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev : function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll : function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll : function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil : function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil : function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings : function(elem) {
      return _sibling((elem.parentNode || {}).firstChild, elem);
    },
    children : function(elem) {
      return _sibling(elem.firstChild);
    },
    contents : function(elem) {
      return callback(elem, "iframe") ? elem.contentDocument : (callback(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
    }
  }, function(name, t) {
    /**
     * @param {boolean} value
     * @param {boolean} string
     * @return {?}
     */
    jQuery.fn[name] = function(value, string) {
      var ret = jQuery.map(this, t, value);
      return "Until" !== name.slice(-5) && (string = value), string && "string" == typeof string && (ret = jQuery.filter(string, ret)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(ret), testRxp.test(name) && ret.reverse()), this.pushStack(ret);
    };
  });
  /** @type {!RegExp} */
  var rnotwhite = /[^\x20\t\r\n\f]+/g;
  /**
   * @param {string} options
   * @return {?}
   */
  jQuery.Callbacks = function(options) {
    options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
    var a;
    var b;
    var all;
    var key;
    /** @type {!Array} */
    var val = [];
    /** @type {!Array} */
    var values = [];
    /** @type {number} */
    var len = -1;
    /**
     * @return {undefined}
     */
    var fire = function() {
      key = key || options.once;
      /** @type {boolean} */
      all = a = true;
      for (; values.length; len = -1) {
        b = values.shift();
        for (; ++len < val.length;) {
          if (false === val[len].apply(b[0], b[1]) && options.stopOnFalse) {
            len = val.length;
            /** @type {boolean} */
            b = false;
          }
        }
      }
      if (!options.memory) {
        /** @type {boolean} */
        b = false;
      }
      /** @type {boolean} */
      a = false;
      if (key) {
        /** @type {(Array|string)} */
        val = b ? [] : "";
      }
    };
    var self = {
      add : function() {
        return val && (b && !a && (len = val.length - 1, values.push(b)), function add(callback) {
          jQuery.each(callback, function(n, name) {
            if (isFunction(name)) {
              if (!(options.unique && self.has(name))) {
                val.push(name);
              }
            } else {
              if (name && name.length && "string" !== type(name)) {
                add(name);
              }
            }
          });
        }(arguments), b && !a && fire()), this;
      },
      remove : function() {
        return jQuery.each(arguments, function(canCreateDiscussions, t) {
          var index;
          for (; (index = jQuery.inArray(t, val, index)) > -1;) {
            val.splice(index, 1);
            if (index <= len) {
              len--;
            }
          }
        }), this;
      },
      has : function(className) {
        return className ? jQuery.inArray(className, val) > -1 : val.length > 0;
      },
      empty : function() {
        return val && (val = []), this;
      },
      disable : function() {
        return key = values = [], val = b = "", this;
      },
      disabled : function() {
        return !val;
      },
      lock : function() {
        return key = values = [], b || a || (val = b = ""), this;
      },
      locked : function() {
        return !!key;
      },
      fireWith : function(context, args) {
        return key || (args = [context, (args = args || []).slice ? args.slice() : args], values.push(args), a || fire()), this;
      },
      fire : function() {
        return self.fireWith(this, arguments), this;
      },
      fired : function() {
        return !!all;
      }
    };
    return self;
  };
  jQuery.extend({
    Deferred : function(func) {
      /** @type {!Array} */
      var dest = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
      /** @type {string} */
      var state = "pending";
      var promise = {
        state : function() {
          return state;
        },
        always : function() {
          return deferred.done(arguments).fail(arguments), this;
        },
        "catch" : function(fn) {
          return promise.then(null, fn);
        },
        pipe : function() {
          /** @type {!Arguments} */
          var fns = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(dest, function(n, tuple) {
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            /** @type {null} */
            fns = null;
          }).promise();
        },
        then : function(value, callback, next) {
          /**
           * @param {number} i
           * @param {!Object} d
           * @param {!Function} attr
           * @param {boolean} type
           * @return {?}
           */
          function fn(i, d, attr, type) {
            return function() {
              var self = this;
              /** @type {!Arguments} */
              var values = arguments;
              /**
               * @return {undefined}
               */
              var filter = function() {
                var value;
                var element;
                if (!(i < n)) {
                  if ((value = attr.apply(self, values)) === d.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  element = value && ("object" == typeof value || "function" == typeof value) && value.then;
                  if (isFunction(element)) {
                    if (type) {
                      element.call(value, fn(n, d, options, type), fn(n, d, val, type));
                    } else {
                      n++;
                      element.call(value, fn(n, d, options, type), fn(n, d, val, type), fn(n, d, options, d.notifyWith));
                    }
                  } else {
                    if (attr !== options) {
                      self = void 0;
                      /** @type {!Array} */
                      values = [value];
                    }
                    (type || d.resolveWith)(self, values);
                  }
                }
              };
              /** @type {function(): undefined} */
              var t = type ? filter : function() {
                try {
                  filter();
                } catch (scheduled) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(scheduled, t.stackTrace);
                  }
                  if (i + 1 >= n) {
                    if (attr !== val) {
                      self = void 0;
                      /** @type {!Array} */
                      values = [scheduled];
                    }
                    d.rejectWith(self, values);
                  }
                }
              };
              if (i) {
                t();
              } else {
                if (jQuery.Deferred.getStackHook) {
                  t.stackTrace = jQuery.Deferred.getStackHook();
                }
                window.setTimeout(t);
              }
            };
          }
          /** @type {number} */
          var n = 0;
          return jQuery.Deferred(function(d) {
            dest[0][3].add(fn(0, d, isFunction(next) ? next : options, d.notifyWith));
            dest[1][3].add(fn(0, d, isFunction(value) ? value : options));
            dest[2][3].add(fn(0, d, isFunction(callback) ? callback : val));
          }).promise();
        },
        promise : function(context) {
          return null != context ? jQuery.extend(context, promise) : promise;
        }
      };
      var deferred = {};
      return jQuery.each(dest, function(i, tuple) {
        var list = tuple[2];
        var stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, dest[3 - i][2].disable, dest[3 - i][3].disable, dest[0][2].lock, dest[0][3].lock);
        }
        list.add(tuple[3].fire);
        /**
         * @return {?}
         */
        deferred[tuple[0]] = function() {
          return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
    },
    when : function(value) {
      /** @type {number} */
      var sampleSize = arguments.length;
      var i = sampleSize;
      /** @type {!Array} */
      var elements = Array(i);
      /** @type {!Array<?>} */
      var args = slice.call(arguments);
      var d = jQuery.Deferred();
      /**
       * @param {undefined} i
       * @return {?}
       */
      var updateFn = function(i) {
        return function(value) {
          elements[i] = this;
          args[i] = arguments.length > 1 ? slice.call(arguments) : value;
          if (!--sampleSize) {
            d.resolveWith(elements, args);
          }
        };
      };
      if (sampleSize <= 1 && (when(value, d.done(updateFn(i)).resolve, d.reject, !sampleSize), "pending" === d.state() || isFunction(args[i] && args[i].then))) {
        return d.then();
      }
      for (; i--;) {
        when(args[i], updateFn(i), d.reject);
      }
      return d.promise();
    }
  });
  /** @type {!RegExp} */
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  /**
   * @param {?} error
   * @param {?} stack
   * @return {undefined}
   */
  jQuery.Deferred.exceptionHook = function(error, stack) {
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
  /**
   * @param {?} error
   * @return {undefined}
   */
  jQuery.readyException = function(error) {
    window.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  /**
   * @param {?} callback
   * @return {?}
   */
  jQuery.fn.ready = function(callback) {
    return readyList.then(callback)["catch"](function(e) {
      jQuery.readyException(e);
    }), this;
  };
  jQuery.extend({
    isReady : false,
    readyWait : 1,
    ready : function(user) {
      if (!(true === user ? --jQuery.readyWait : jQuery.isReady)) {
        /** @type {boolean} */
        jQuery.isReady = true;
        if (!(true !== user && --jQuery.readyWait > 0)) {
          readyList.resolveWith(document, [jQuery]);
        }
      }
    }
  });
  jQuery.ready.then = readyList.then;
  if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener("DOMContentLoaded", $__jsx_onload);
    window.addEventListener("load", $__jsx_onload);
  }
  /**
   * @param {string} elems
   * @param {!Function} fn
   * @param {string} key
   * @param {?} value
   * @param {number} chainable
   * @param {string} emptyGet
   * @param {boolean} raw
   * @return {?}
   */
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    /** @type {number} */
    var name = 0;
    var len = elems.length;
    /** @type {boolean} */
    var bulk = null == key;
    if ("object" === type(key)) {
      /** @type {boolean} */
      chainable = true;
      for (name in key) {
        access(elems, fn, name, key[name], true, emptyGet, raw);
      }
    } else {
      if (void 0 !== value && (chainable = true, isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, value, arg1) {
        return bulk.call(jQuery(elem), arg1);
      })), fn)) {
        for (; name < len; name++) {
          fn(elems[name], key, raw ? value : value.call(elems[name], name, fn(elems[name], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  /** @type {!RegExp} */
  var _kerningNamesHash_escapeEscape = /^-ms-/;
  /** @type {!RegExp} */
  var tokensRegExp = /-([a-z])/g;
  /**
   * @param {!Object} elem
   * @return {?}
   */
  var acceptData = function(elem) {
    return 1 === elem.nodeType || 9 === elem.nodeType || !+elem.nodeType;
  };
  /** @type {number} */
  Data.uid = 1;
  Data.prototype = {
    cache : function(elem) {
      var value = elem[this.expando];
      return value || (value = {}, acceptData(elem) && (elem.nodeType ? elem[this.expando] = value : Object.defineProperty(elem, this.expando, {
        value : value,
        configurable : true
      }))), value;
    },
    set : function(key, data, str) {
      var prop;
      var cache = this.cache(key);
      if ("string" == typeof data) {
        /** @type {string} */
        cache[camelCase(data)] = str;
      } else {
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get : function(data, key) {
      return void 0 === key ? this.cache(data) : data[this.expando] && data[this.expando][camelCase(key)];
    },
    access : function(value, fn, key) {
      return void 0 === fn || fn && "string" == typeof fn && void 0 === key ? this.get(value, fn) : (this.set(value, fn, key), void 0 !== key ? key : fn);
    },
    remove : function(owner, name) {
      var i;
      var cache = owner[this.expando];
      if (void 0 !== cache) {
        if (void 0 !== name) {
          i = (name = Array.isArray(name) ? name.map(camelCase) : (name = camelCase(name)) in cache ? [name] : name.match(rnotwhite) || []).length;
          for (; i--;) {
            delete cache[name[i]];
          }
        }
        if (void 0 === name || jQuery.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      }
    },
    hasData : function(owner) {
      var cache = owner[this.expando];
      return void 0 !== cache && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data;
  var self = new Data;
  /** @type {!RegExp} */
  var trueRE = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  /** @type {!RegExp} */
  var rhyphen = /[A-Z]/g;
  jQuery.extend({
    hasData : function(elem) {
      return self.hasData(elem) || dataPriv.hasData(elem);
    },
    data : function(elem, name, data) {
      return self.access(elem, name, data);
    },
    removeData : function(elem, name) {
      self.remove(elem, name);
    },
    _data : function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData : function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data : function(value, args) {
      var w;
      var key;
      var selection;
      var elem = this[0];
      var root = elem && elem.attributes;
      if (void 0 === value) {
        if (this.length && (selection = self.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
          w = root.length;
          for (; w--;) {
            if (root[w] && 0 === (key = root[w].name).indexOf("data-")) {
              key = camelCase(key.slice(5));
              parse(elem, key, selection[key]);
            }
          }
          dataPriv.set(elem, "hasDataAttrs", true);
        }
        return selection;
      }
      return "object" == typeof value ? this.each(function() {
        self.set(this, value);
      }) : access(this, function(undefined) {
        var data;
        if (elem && void 0 === undefined) {
          if (void 0 !== (data = self.get(elem, value))) {
            return data;
          }
          if (void 0 !== (data = parse(elem, value))) {
            return data;
          }
        } else {
          this.each(function() {
            self.set(this, value, undefined);
          });
        }
      }, null, args, arguments.length > 1, null, true);
    },
    removeData : function(callback) {
      return this.each(function() {
        self.remove(this, callback);
      });
    }
  });
  jQuery.extend({
    queue : function(elem, type, data) {
      var q;
      if (elem) {
        return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || Array.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
      }
    },
    dequeue : function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type);
      var i = queue.length;
      var listener = queue.shift();
      var handle = jQuery._queueHooks(elem, type);
      /**
       * @return {undefined}
       */
      var next = function() {
        jQuery.dequeue(elem, type);
      };
      if ("inprogress" === listener) {
        listener = queue.shift();
        i--;
      }
      if (listener) {
        if ("fx" === type) {
          queue.unshift("inprogress");
        }
        delete handle.stop;
        listener.call(elem, next, handle);
      }
      if (!i && handle) {
        handle.empty.fire();
      }
    },
    _queueHooks : function(elem, type) {
      /** @type {string} */
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty : jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue : function(type, data) {
      /** @type {number} */
      var setter = 2;
      return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if ("fx" === type && "inprogress" !== queue[0]) {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue : function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue : function(type) {
      return this.queue(type || "fx", []);
    },
    promise : function(type, obj) {
      var sel;
      /** @type {number} */
      var r = 1;
      var defer = jQuery.Deferred();
      var elements = this;
      var i = this.length;
      /**
       * @return {undefined}
       */
      var resolve = function() {
        if (!--r) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if ("string" != typeof type) {
        /** @type {!Object} */
        obj = type;
        type = void 0;
      }
      type = type || "fx";
      for (; i--;) {
        if ((sel = dataPriv.get(elements[i], type + "queueHooks")) && sel.empty) {
          r++;
          sel.empty.add(resolve);
        }
      }
      return resolve(), defer.promise(obj);
    }
  });
  /** @type {string} */
  var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  /** @type {!RegExp} */
  var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
  /** @type {!Array} */
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  /**
   * @param {!Object} element
   * @param {!Object} root
   * @return {?}
   */
  var isHidden = function(element, root) {
    return "none" === (element = root || element).style.display || "" === element.style.display && jQuery.contains(element.ownerDocument, element) && "none" === jQuery.css(element, "display");
  };
  /**
   * @param {!Object} elem
   * @param {!Array} options
   * @param {!Function} callback
   * @param {number} args
   * @return {?}
   */
  var swap = function(elem, options, callback, args) {
    var ret;
    var prop;
    var originObject = {};
    for (prop in options) {
      originObject[prop] = elem.style[prop];
      elem.style[prop] = options[prop];
    }
    ret = callback.apply(elem, args || []);
    for (prop in options) {
      elem.style[prop] = originObject[prop];
    }
    return ret;
  };
  var defaultDisplayMap = {};
  jQuery.fn.extend({
    show : function() {
      return showHide(this, true);
    },
    hide : function() {
      return showHide(this);
    },
    toggle : function(state) {
      return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  /** @type {!RegExp} */
  var reg = /^(?:checkbox|radio)$/i;
  /** @type {!RegExp} */
  var me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  /** @type {!RegExp} */
  var opacityRe = /^$|^module$|\/(?:java|ecma)script/i;
  var wrapMap = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    thead : [1, "<table>", "</table>"],
    col : [2, "<table><colgroup>", "</colgroup></table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default : [0, "", ""]
  };
  /** @type {!Array} */
  wrapMap.optgroup = wrapMap.option;
  /** @type {!Array} */
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  /** @type {!Array} */
  wrapMap.th = wrapMap.td;
  /** @type {!RegExp} */
  var re_commas = /<|&#?\w+;/;
  !function() {
    var e = document.createDocumentFragment().appendChild(document.createElement("div"));
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    e.appendChild(input);
    support.checkClone = e.cloneNode(true).cloneNode(true).lastChild.checked;
    /** @type {string} */
    e.innerHTML = "<textarea>x</textarea>";
    /** @type {boolean} */
    support.noCloneChecked = !!e.cloneNode(true).lastChild.defaultValue;
  }();
  var docElem = document.documentElement;
  /** @type {!RegExp} */
  var receivedErrorEvents = /^key/;
  /** @type {!RegExp} */
  var receivedOpenEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  /** @type {!RegExp} */
  var dre = /^([^.]*)(?:\.(.+)|)/;
  jQuery.event = {
    global : {},
    add : function(elem, data, handler, description, selector) {
      var handleObjIn;
      var eventHandle;
      var BROWSER_ENGINES;
      var events;
      var i;
      var handleObj;
      var special;
      var handlers;
      var type;
      var h;
      var origType;
      var elemData = dataPriv.get(elem);
      if (elemData) {
        if (handler.handler) {
          handler = (handleObjIn = handler).handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery.find.matchesSelector(docElem, selector);
        }
        if (!handler.guid) {
          /** @type {number} */
          handler.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = {};
        }
        if (!(eventHandle = elemData.handle)) {
          /** @type {function(!Object): ?} */
          eventHandle = elemData.handle = function(e) {
            return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        i = (data = (data || "").match(rnotwhite) || [""]).length;
        for (; i--;) {
          type = origType = (BROWSER_ENGINES = dre.exec(data[i]) || [])[1];
          h = (BROWSER_ENGINES[2] || "").split(".").sort();
          if (type) {
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type : type,
              origType : origType,
              data : description,
              handler : handler,
              guid : handler.guid,
              selector : selector,
              needsContext : selector && jQuery.expr.match.needsContext.test(selector),
              namespace : h.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              /** @type {number} */
              (handlers = events[type] = []).delegateCount = 0;
              if (!(special.setup && false !== special.setup.call(elem, description, h, eventHandle))) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            /** @type {boolean} */
            jQuery.event.global[type] = true;
          }
        }
      }
    },
    remove : function(elem, data, fn, selector, mappedTypes) {
      var j;
      var origCount;
      var tmp;
      var events;
      var i;
      var handleObj;
      var special;
      var handlers;
      var type;
      var h;
      var origType;
      var elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (elemData && (events = elemData.events)) {
        i = (data = (data || "").match(rnotwhite) || [""]).length;
        for (; i--;) {
          if (tmp = dre.exec(data[i]) || [], type = origType = tmp[1], h = (tmp[2] || "").split(".").sort(), type) {
            special = jQuery.event.special[type] || {};
            handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            for (; j--;) {
              handleObj = handlers[j];
              if (!(!mappedTypes && origType !== handleObj.origType || fn && fn.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!(special.teardown && false !== special.teardown.call(elem, h, elemData.handle))) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          } else {
            for (type in events) {
              jQuery.event.remove(elem, type + data[i], fn, selector, true);
            }
          }
        }
        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      }
    },
    dispatch : function(e) {
      var event = jQuery.event.fix(e);
      var i;
      var j;
      var ret;
      var matched;
      var handleObj;
      var handlerQueue;
      /** @type {!Array} */
      var args = new Array(arguments.length);
      var handlers = (dataPriv.get(this, "events") || {})[event.type] || [];
      var special = jQuery.event.special[event.type] || {};
      args[0] = event;
      /** @type {number} */
      i = 1;
      for (; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      if (event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        /** @type {number} */
        i = 0;
        for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
          event.currentTarget = matched.elem;
          /** @type {number} */
          j = 0;
          for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
            if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              if (void 0 !== (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) && false === (event.result = ret)) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
        return special.postDispatch && special.postDispatch.call(this, event), event.result;
      }
    },
    handlers : function(event, handlers) {
      var i;
      var handleObj;
      var e;
      var matches;
      var liveEventCtxStorage;
      /** @type {!Array} */
      var handlerQueue = [];
      var delegateCount = handlers.delegateCount;
      var cur = event.target;
      if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (1 === cur.nodeType && ("click" !== event.type || true !== cur.disabled)) {
            /** @type {!Array} */
            matches = [];
            liveEventCtxStorage = {};
            /** @type {number} */
            i = 0;
            for (; i < delegateCount; i++) {
              if (void 0 === liveEventCtxStorage[e = (handleObj = handlers[i]).selector + " "]) {
                liveEventCtxStorage[e] = handleObj.needsContext ? jQuery(e, this).index(cur) > -1 : jQuery.find(e, this, null, [cur]).length;
              }
              if (liveEventCtxStorage[e]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem : cur,
                handlers : matches
              });
            }
          }
        }
      }
      return cur = this, delegateCount < handlers.length && handlerQueue.push({
        elem : cur,
        handlers : handlers.slice(delegateCount)
      }), handlerQueue;
    },
    addProp : function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable : true,
        configurable : true,
        get : isFunction(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set : function(type) {
          Object.defineProperty(this, name, {
            enumerable : true,
            configurable : true,
            writable : true,
            value : type
          });
        }
      });
    },
    fix : function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        trigger : function() {
          if (this !== safeActiveElement() && this.focus) {
            return this.focus(), false;
          }
        },
        delegateType : "focusin"
      },
      blur : {
        trigger : function() {
          if (this === safeActiveElement() && this.blur) {
            return this.blur(), false;
          }
        },
        delegateType : "focusout"
      },
      click : {
        trigger : function() {
          if ("checkbox" === this.type && this.click && callback(this, "input")) {
            return this.click(), false;
          }
        },
        _default : function(event) {
          return callback(event.target, "a");
        }
      },
      beforeunload : {
        postDispatch : function(event) {
          if (void 0 !== event.result && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  };
  /**
   * @param {!Object} elem
   * @param {!Object} type
   * @param {?} fn
   * @return {undefined}
   */
  jQuery.removeEvent = function(elem, type, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, fn);
    }
  };
  /**
   * @param {string} src
   * @param {!Object} props
   * @return {?}
   */
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      /** @type {string} */
      this.originalEvent = src;
      this.type = src.type;
      /** @type {function(): ?} */
      this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
      this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      /** @type {string} */
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || Date.now();
    /** @type {boolean} */
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor : jQuery.Event,
    isDefaultPrevented : returnFalse,
    isPropagationStopped : returnFalse,
    isImmediatePropagationStopped : returnFalse,
    isSimulated : false,
    preventDefault : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      /** @type {function(): ?} */
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey : true,
    bubbles : true,
    cancelable : true,
    changedTouches : true,
    ctrlKey : true,
    detail : true,
    eventPhase : true,
    metaKey : true,
    pageX : true,
    pageY : true,
    shiftKey : true,
    view : true,
    "char" : true,
    charCode : true,
    key : true,
    keyCode : true,
    button : true,
    buttons : true,
    clientX : true,
    clientY : true,
    offsetX : true,
    offsetY : true,
    pointerId : true,
    pointerType : true,
    screenX : true,
    screenY : true,
    targetTouches : true,
    toElement : true,
    touches : true,
    which : function(e) {
      var button = e.button;
      return null == e.which && receivedErrorEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedOpenEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType : fix,
      bindType : fix,
      handle : function(event) {
        var _ref12;
        var target = this;
        var body = event.relatedTarget;
        var handleObj = event.handleObj;
        return body && (body === target || jQuery.contains(target, body)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
      }
    };
  });
  jQuery.fn.extend({
    on : function(el, model, cb, data) {
      return attach(this, el, model, cb, data);
    },
    one : function(name, model, cb, delay) {
      return attach(this, name, model, cb, delay, 1);
    },
    off : function(types, callback, fn) {
      var handleObj;
      var type;
      if (types && types.preventDefault && types.handleObj) {
        return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
      }
      if ("object" == typeof types) {
        for (type in types) {
          this.off(type, callback, types[type]);
        }
        return this;
      }
      return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
        jQuery.event.remove(this, types, fn, callback);
      });
    }
  });
  /** @type {!RegExp} */
  var regPlaceholder = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  /** @type {!RegExp} */
  var _tacet = /<script|<style|<link/i;
  /** @type {!RegExp} */
  var partten = /checked\s*(?:[^=]|=\s*.checked.)/i;
  /** @type {!RegExp} */
  var a = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  jQuery.extend({
    htmlPrefilter : function(src) {
      return src.replace(regPlaceholder, "<$1></$2>");
    },
    clone : function(elem, n, array) {
      var i;
      var l;
      var srcElements;
      var destElements;
      var clone = elem.cloneNode(true);
      var inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
        destElements = getAll(clone);
        /** @type {number} */
        i = 0;
        l = (srcElements = getAll(elem)).length;
        for (; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (n) {
        if (array) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          /** @type {number} */
          i = 0;
          l = srcElements.length;
          for (; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      return (destElements = getAll(clone, "script")).length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
    },
    cleanData : function(elems) {
      var data;
      var elem;
      var type;
      var special = jQuery.event.special;
      /** @type {number} */
      var i = 0;
      for (; void 0 !== (elem = elems[i]); i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = void 0;
          }
          if (elem[self.expando]) {
            elem[self.expando] = void 0;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach : function(selector) {
      return remove(this, selector, true);
    },
    remove : function(selector) {
      return remove(this, selector);
    },
    text : function(value) {
      return access(this, function(value) {
        return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
          if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append : function() {
      return domManip(this, arguments, function(comment) {
        if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
          $(this, comment).appendChild(comment);
        }
      });
    },
    prepend : function() {
      return domManip(this, arguments, function(preview) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var target = $(this, preview);
          target.insertBefore(preview, target.firstChild);
        }
      });
    },
    before : function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after : function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty : function() {
      var elem;
      /** @type {number} */
      var i = 0;
      for (; null != (elem = this[i]); i++) {
        if (1 === elem.nodeType) {
          jQuery.cleanData(getAll(elem, false));
          /** @type {string} */
          elem.textContent = "";
        }
      }
      return this;
    },
    clone : function(c, i) {
      return c = null != c && c, i = null == i ? c : i, this.map(function() {
        return jQuery.clone(this, c, i);
      });
    },
    html : function(value) {
      return access(this, function(value) {
        var elem = this[0] || {};
        /** @type {number} */
        var thatpos = 0;
        var i = this.length;
        if (void 0 === value && 1 === elem.nodeType) {
          return elem.innerHTML;
        }
        if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(me.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; thatpos < i; thatpos++) {
              if (1 === (elem = this[thatpos] || {}).nodeType) {
                jQuery.cleanData(getAll(elem, false));
                /** @type {number} */
                elem.innerHTML = value;
              }
            }
            /** @type {number} */
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith : function() {
      /** @type {!Array} */
      var ignored = [];
      return domManip(this, arguments, function(t) {
        var p = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (p) {
            p.replaceChild(t, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(original, n) {
    /**
     * @param {undefined} body
     * @return {?}
     */
    jQuery.fn[original] = function(body) {
      var what;
      /** @type {!Array} */
      var stack = [];
      var rows = jQuery(body);
      /** @type {number} */
      var last = rows.length - 1;
      /** @type {number} */
      var i = 0;
      for (; i <= last; i++) {
        what = i === last ? this : this.clone(true);
        jQuery(rows[i])[n](what);
        push.apply(stack, what.get());
      }
      return this.pushStack(stack);
    };
  });
  /** @type {!RegExp} */
  var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
  /**
   * @param {!Object} elem
   * @return {?}
   */
  var getStyles = function(elem) {
    var win = elem.ownerDocument.defaultView;
    return win && win.opener || (win = window), win.getComputedStyle(elem);
  };
  /** @type {!RegExp} */
  var inlineAttributeCommentRegex = new RegExp(cssExpand.join("|"), "i");
  !function() {
    /**
     * @return {undefined}
     */
    function computeStyleTests() {
      if (div) {
        /** @type {string} */
        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        /** @type {string} */
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        docElem.appendChild(container).appendChild(div);
        var style = window.getComputedStyle(div);
        /** @type {boolean} */
        res = "1%" !== style.top;
        /** @type {boolean} */
        u = 12 === parseRound(style.marginLeft);
        /** @type {string} */
        div.style.right = "60%";
        /** @type {boolean} */
        s = 36 === parseRound(style.right);
        /** @type {boolean} */
        o = 36 === parseRound(style.width);
        /** @type {string} */
        div.style.position = "absolute";
        /** @type {(boolean|string)} */
        position = 36 === div.offsetWidth || "absolute";
        docElem.removeChild(container);
        /** @type {null} */
        div = null;
      }
    }
    /**
     * @param {?} fontSize
     * @return {?}
     */
    function parseRound(fontSize) {
      return Math.round(parseFloat(fontSize));
    }
    var res;
    var o;
    var position;
    var s;
    var u;
    var container = document.createElement("div");
    var div = document.createElement("div");
    if (div.style) {
      /** @type {string} */
      div.style.backgroundClip = "content-box";
      /** @type {string} */
      div.cloneNode(true).style.backgroundClip = "";
      /** @type {boolean} */
      support.clearCloneStyle = "content-box" === div.style.backgroundClip;
      jQuery.extend(support, {
        boxSizingReliable : function() {
          return computeStyleTests(), o;
        },
        pixelBoxStyles : function() {
          return computeStyleTests(), s;
        },
        pixelPosition : function() {
          return computeStyleTests(), res;
        },
        reliableMarginLeft : function() {
          return computeStyleTests(), u;
        },
        scrollboxSize : function() {
          return computeStyleTests(), position;
        }
      });
    }
  }();
  /** @type {!RegExp} */
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
  /** @type {!RegExp} */
  var ngTranslationProvider = /^--/;
  var cssShow = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var cssNormalTransform = {
    letterSpacing : "0",
    fontWeight : "400"
  };
  /** @type {!Array} */
  var prefixes = ["Webkit", "Moz", "ms"];
  var style = document.createElement("div").style;
  jQuery.extend({
    cssHooks : {
      opacity : {
        get : function(elem, value) {
          if (value) {
            var to = curCSS(elem, "opacity");
            return "" === to ? "1" : to;
          }
        }
      }
    },
    cssNumber : {
      animationIterationCount : true,
      columnCount : true,
      fillOpacity : true,
      flexGrow : true,
      flexShrink : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      order : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {},
    style : function(elem, name, value, extra) {
      if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
        var ret;
        var type;
        var hooks;
        var origName = camelCase(name);
        /** @type {boolean} */
        var versionByName = ngTranslationProvider.test(name);
        var style = elem.style;
        if (versionByName || (name = vendorPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) {
          return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra)) ? ret : style[name];
        }
        if ("string" == (type = typeof value) && (ret = regex.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          /** @type {string} */
          type = "number";
        }
        if (null != value && value === value) {
          if ("number" === type) {
            /** @type {string} */
            value = value + (ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px"));
          }
          if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
            /** @type {string} */
            style[name] = "inherit";
          }
          if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)))) {
            if (versionByName) {
              style.setProperty(name, value);
            } else {
              /** @type {string} */
              style[name] = value;
            }
          }
        }
      }
    },
    css : function(elem, name, value, styles) {
      var val;
      var length;
      var hooks;
      var origName = camelCase(name);
      return ngTranslationProvider.test(name) || (name = vendorPropName(origName)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in hooks && (val = hooks.get(elem, true, value)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === value || value ? (length = parseFloat(val), true === value || isFinite(length) ? length || 0 : val) : val;
    }
  });
  jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
    jQuery.cssHooks[name] = {
      get : function(elem, value, fn) {
        if (value) {
          return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, fn) : swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, fn);
          });
        }
      },
      set : function(elem, value, data) {
        var match;
        var styles = getStyles(elem);
        /** @type {boolean} */
        var valueIsBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
        var id = data && augmentWidthOrHeight(elem, name, data, valueIsBorderBox, styles);
        return valueIsBorderBox && support.scrollboxSize() === styles.position && (id = id - Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - parseFloat(styles[name]) - augmentWidthOrHeight(elem, name, "border", false, styles) - .5)), id && (match = regex.exec(value)) && "px" !== (match[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), set(elem, value, id);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
    if (canCreateDiscussions) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft : 0
      }, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand : function(data) {
        /** @type {number} */
        var i = 0;
        var expanded = {};
        /** @type {!Array} */
        var stops = "string" == typeof data ? data.split(" ") : [data];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
        }
        return expanded;
      }
    };
    if ("margin" !== prefix) {
      /** @type {function(!Object, !Object, string): ?} */
      jQuery.cssHooks[prefix + suffix].set = set;
    }
  });
  jQuery.fn.extend({
    css : function(name, value) {
      return access(this, function(elem, name, undefined) {
        var styles;
        var l;
        var map = {};
        /** @type {number} */
        var i = 0;
        if (Array.isArray(name)) {
          styles = getStyles(elem);
          l = name.length;
          for (; i < l; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });
  /** @type {function(!Object, !Object, !Object, !Object, !Object): ?} */
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor : Tween,
    init : function(domElem, options, prop, end, easing, unit) {
      /** @type {!Element} */
      this.elem = domElem;
      /** @type {!Object} */
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      /** @type {!Object} */
      this.options = options;
      this.start = this.now = this.cur();
      /** @type {number} */
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur : function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run : function(percent) {
      var eased;
      var hooks = Tween.propHooks[this.prop];
      return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default : {
      get : function(s) {
        var fitWidth;
        return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (fitWidth = jQuery.css(s.elem, s.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
      },
      set : function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else {
          if (1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop]) {
            tween.elem[tween.prop] = tween.now;
          } else {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          }
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set : function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear : function(p) {
      return p;
    },
    swing : function(p) {
      return .5 - Math.cos(p * Math.PI) / 2;
    },
    _default : "swing"
  };
  /** @type {function(!Element, !Object, !Object, number, string, string): undefined} */
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow;
  var rt;
  /** @type {!RegExp} */
  var contribRegex = /^(?:toggle|show|hide)$/;
  /** @type {!RegExp} */
  var rrun = /queueHooks$/;
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners : {
      "*" : [function(prop, value) {
        var tween = this.createTween(prop, value);
        return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
      }]
    },
    tweener : function(props, callback) {
      if (isFunction(props)) {
        /** @type {!Object} */
        callback = props;
        /** @type {!Array} */
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }
      var prop;
      /** @type {number} */
      var i = 0;
      var inputsSize = props.length;
      for (; i < inputsSize; i++) {
        prop = props[i];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters : [defaultPrefilter],
    prefilter : function(callback, options) {
      if (options) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  /**
   * @param {!Object} speed
   * @param {string} easing
   * @param {string} fn
   * @return {?}
   */
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
      complete : fn || !fn && easing || isFunction(speed) && speed,
      duration : speed,
      easing : fn && easing || easing && !isFunction(easing) && easing
    };
    return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    }, opt;
  };
  jQuery.fn.extend({
    fadeTo : function(speed, to, callback, context) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({
        opacity : to
      }, speed, callback, context);
    },
    animate : function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop);
      var optall = jQuery.speed(speed, easing, callback);
      /**
       * @return {undefined}
       */
      var doAnimation = function() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);
        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };
      return doAnimation.finish = doAnimation, empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop : function(type, value, options) {
      /**
       * @param {!Object} hooks
       * @return {undefined}
       */
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(options);
      };
      return "string" != typeof type && (options = value, value = type, type = void 0), value && false !== type && this.queue(type || "fx", []), this.each(function() {
        /** @type {boolean} */
        var out = true;
        /** @type {(boolean|string)} */
        var index = null != type && type + "queueHooks";
        /** @type {!Array} */
        var timers = jQuery.timers;
        var data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
            timers[index].anim.stop(options);
            /** @type {boolean} */
            out = false;
            timers.splice(index, 1);
          }
        }
        if (!(!out && options)) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish : function(type) {
      return false !== type && (type = type || "fx"), this.each(function() {
        var index;
        var data = dataPriv.get(this);
        var queue = data[type + "queue"];
        var hooks = data[type + "queueHooks"];
        /** @type {!Array} */
        var timers = jQuery.timers;
        var length = queue ? queue.length : 0;
        /** @type {boolean} */
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        /** @type {number} */
        index = timers.length;
        for (; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        /** @type {number} */
        index = 0;
        for (; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
    var cssFn = jQuery.fn[name];
    /**
     * @param {!Object} x
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[name] = function(x, callback, options) {
      return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
    };
  });
  jQuery.each({
    slideDown : genFx("show"),
    slideUp : genFx("hide"),
    slideToggle : genFx("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(original, props) {
    /**
     * @param {!Object} speed
     * @param {string} callback
     * @param {string} options
     * @return {?}
     */
    jQuery.fn[original] = function(speed, callback, options) {
      return this.animate(props, speed, callback, options);
    };
  });
  /** @type {!Array} */
  jQuery.timers = [];
  /**
   * @return {undefined}
   */
  jQuery.fx.tick = function() {
    var maxBet;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var timers = jQuery.timers;
    /** @type {number} */
    fxNow = Date.now();
    for (; i < timers.length; i++) {
      if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = void 0;
  };
  /**
   * @param {?} url
   * @return {undefined}
   */
  jQuery.fx.timer = function(url) {
    jQuery.timers.push(url);
    jQuery.fx.start();
  };
  /** @type {number} */
  jQuery.fx.interval = 13;
  /**
   * @return {undefined}
   */
  jQuery.fx.start = function() {
    if (!rt) {
      /** @type {boolean} */
      rt = true;
      step();
    }
  };
  /**
   * @return {undefined}
   */
  jQuery.fx.stop = function() {
    /** @type {null} */
    rt = null;
  };
  jQuery.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  /**
   * @param {string} time
   * @param {!Object} type
   * @return {?}
   */
  jQuery.fn.delay = function(time, type) {
    return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(n, incoming_item) {
      var id = window.setTimeout(n, time);
      /**
       * @return {undefined}
       */
      incoming_item.stop = function() {
        window.clearTimeout(id);
      };
    });
  };
  (function() {
    var elem = document.createElement("input");
    var opt = document.createElement("select").appendChild(document.createElement("option"));
    /** @type {string} */
    elem.type = "checkbox";
    /** @type {boolean} */
    support.checkOn = "" !== elem.value;
    support.optSelected = opt.selected;
    /** @type {string} */
    (elem = document.createElement("input")).value = "t";
    /** @type {string} */
    elem.type = "radio";
    /** @type {boolean} */
    support.radioValue = "t" === elem.value;
  })();
  var boolHook;
  var attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr : function(type, value) {
      return access(this, jQuery.attr, type, value, arguments.length > 1);
    },
    removeAttr : function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr : function(elem, name, value) {
      var ret;
      var hooks;
      var type = elem.nodeType;
      if (3 !== type && 8 !== type && 2 !== type) {
        return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? 
        ret : null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
      }
    },
    attrHooks : {
      type : {
        set : function(item, value) {
          if (!support.radioValue && "radio" === value && callback(item, "input")) {
            var n = item.value;
            return item.setAttribute("type", value), n && (item.value = n), value;
          }
        }
      }
    },
    removeAttr : function(elem, value) {
      var ATTR_MAXLENGTH;
      /** @type {number} */
      var callbackCount = 0;
      var callbackVals = value && value.match(rnotwhite);
      if (callbackVals && 1 === elem.nodeType) {
        for (; ATTR_MAXLENGTH = callbackVals[callbackCount++];) {
          elem.removeAttribute(ATTR_MAXLENGTH);
        }
      }
    }
  });
  boolHook = {
    set : function(elem, value, name) {
      return false === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
    var n = attrHandle[name] || jQuery.find.attr;
    /**
     * @param {undefined} window
     * @param {string} status
     * @param {number} s
     * @return {?}
     */
    attrHandle[name] = function(window, status, s) {
      var ret;
      var handle;
      var lowercaseName = status.toLowerCase();
      return s || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != n(window, status, s) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
    };
  });
  /** @type {!RegExp} */
  var inputNodeNames = /^(?:input|select|textarea|button)$/i;
  /** @type {!RegExp} */
  var srsRegex = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop : function(type, value) {
      return access(this, jQuery.prop, type, value, arguments.length > 1);
    },
    removeProp : function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop : function(elem, name, value) {
      var ret;
      var hooks;
      var type = elem.nodeType;
      if (3 !== type && 8 !== type && 2 !== type) {
        return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
      }
    },
    propHooks : {
      tabIndex : {
        get : function(target) {
          var b = jQuery.find.attr(target, "tabindex");
          return b ? parseInt(b, 10) : inputNodeNames.test(target.nodeName) || srsRegex.test(target.nodeName) && target.href ? 0 : -1;
        }
      }
    },
    propFix : {
      "for" : "htmlFor",
      "class" : "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get : function(e) {
        var elem = e.parentNode;
        return elem && elem.parentNode && elem.parentNode.selectedIndex, null;
      },
      set : function(text) {
        var f = text.parentNode;
        if (f) {
          f.selectedIndex;
          if (f.parentNode) {
            f.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  jQuery.fn.extend({
    addClass : function(value) {
      var result;
      var elem;
      var j;
      var i;
      var interval;
      var resIndex;
      var y;
      /** @type {number} */
      var u = 0;
      if (isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).addClass(value.call(this, i, getClass(this)));
        });
      }
      if ((result = trim(value)).length) {
        for (; elem = this[u++];) {
          if (i = getClass(elem), j = 1 === elem.nodeType && " " + log(i) + " ") {
            /** @type {number} */
            resIndex = 0;
            for (; interval = result[resIndex++];) {
              if (j.indexOf(" " + interval + " ") < 0) {
                /** @type {string} */
                j = j + (interval + " ");
              }
            }
            if (i !== (y = log(j))) {
              elem.setAttribute("class", y);
            }
          }
        }
      }
      return this;
    },
    removeClass : function(value) {
      var result;
      var elem;
      var k;
      var i;
      var activeObserveHandle;
      var j;
      var y;
      /** @type {number} */
      var u = 0;
      if (isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).removeClass(value.call(this, i, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((result = trim(value)).length) {
        for (; elem = this[u++];) {
          if (i = getClass(elem), k = 1 === elem.nodeType && " " + log(i) + " ") {
            /** @type {number} */
            j = 0;
            for (; activeObserveHandle = result[j++];) {
              for (; k.indexOf(" " + activeObserveHandle + " ") > -1;) {
                /** @type {string} */
                k = k.replace(" " + activeObserveHandle + " ", " ");
              }
            }
            if (i !== (y = log(k))) {
              elem.setAttribute("class", y);
            }
          }
        }
      }
      return this;
    },
    toggleClass : function(value, stateVal) {
      /** @type {string} */
      var undefined = typeof value;
      /** @type {boolean} */
      var r = "string" === undefined || Array.isArray(value);
      return "boolean" == typeof stateVal && r ? stateVal ? this.addClass(value) : this.removeClass(value) : isFunction(value) ? this.each(function(i) {
        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
      }) : this.each(function() {
        var className;
        var pindex;
        var $body;
        var parts;
        if (r) {
          /** @type {number} */
          pindex = 0;
          $body = jQuery(this);
          parts = trim(value);
          for (; className = parts[pindex++];) {
            if ($body.hasClass(className)) {
              $body.removeClass(className);
            } else {
              $body.addClass(className);
            }
          }
        } else {
          if (!(void 0 !== value && "boolean" !== undefined)) {
            if (className = getClass(this)) {
              dataPriv.set(this, "__className__", className);
            }
            if (this.setAttribute) {
              this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
            }
          }
        }
      });
    },
    hasClass : function(elem) {
      var exactLanguageCode;
      var value;
      /** @type {number} */
      var r = 0;
      /** @type {string} */
      exactLanguageCode = " " + elem + " ";
      for (; value = this[r++];) {
        if (1 === value.nodeType && (" " + log(getClass(value)) + " ").indexOf(exactLanguageCode) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  /** @type {!RegExp} */
  var n = /\r/g;
  jQuery.fn.extend({
    val : function(value) {
      var hooks;
      var value;
      var isNumber;
      var elem = this[0];
      {
        if (arguments.length) {
          return isNumber = isFunction(value), this.each(function(i) {
            var val;
            if (1 === this.nodeType) {
              if (null == (val = isNumber ? value.call(this, i, jQuery(this).val()) : value)) {
                /** @type {string} */
                val = "";
              } else {
                if ("number" == typeof val) {
                  /** @type {string} */
                  val = val + "";
                } else {
                  if (Array.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                      return null == value ? "" : value + "";
                    });
                  }
                }
              }
              if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, val, "value"))) {
                this.value = val;
              }
            }
          });
        }
        if (elem) {
          return (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value;
        }
      }
    }
  });
  jQuery.extend({
    valHooks : {
      option : {
        get : function(key) {
          var setupData = jQuery.find.attr(key, "value");
          return null != setupData ? setupData : log(jQuery.text(key));
        }
      },
      select : {
        get : function(elem) {
          var value;
          var e;
          var i;
          var options = elem.options;
          var index = elem.selectedIndex;
          /** @type {boolean} */
          var one = "select-one" === elem.type;
          /** @type {(Array|null)} */
          var values = one ? null : [];
          var max = one ? index + 1 : options.length;
          i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            if (((e = options[i]).selected || i === index) && !e.disabled && (!e.parentNode.disabled || !callback(e.parentNode, "optgroup"))) {
              if (value = jQuery(e).val(), one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set : function(el, value) {
          var outputFn;
          var val;
          var ops = el.options;
          var result = jQuery.makeArray(value);
          var i = ops.length;
          for (; i--;) {
            if ((val = ops[i]).selected = jQuery.inArray(jQuery.valHooks.option.get(val), result) > -1) {
              /** @type {boolean} */
              outputFn = true;
            }
          }
          return outputFn || (el.selectedIndex = -1), result;
        }
      }
    }
  });
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set : function(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };
    if (!support.checkOn) {
      /**
       * @param {!Object} elem
       * @return {?}
       */
      jQuery.valHooks[this].get = function(elem) {
        return null === elem.getAttribute("value") ? "on" : elem.value;
      };
    }
  });
  /** @type {boolean} */
  support.focusin = "onfocusin" in window;
  /** @type {!RegExp} */
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  var start = function(event) {
    event.stopPropagation();
  };
  jQuery.extend(jQuery.event, {
    trigger : function(event, value, elem, onlyHandlers) {
      var i;
      var cur;
      var old;
      var bubbleType;
      var ontype;
      var next;
      var special;
      var tmp;
      /** @type {!Array} */
      var eventPath = [elem || document];
      var type = hasOwn.call(event, "type") ? event.type : event;
      var parts = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      if (cur = tmp = old = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (type = (parts = type.split(".")).shift(), parts.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = parts.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + 
      parts.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), value = null == value ? [event] : jQuery.makeArray(value, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || false !== special.trigger.apply(elem, value))) {
        if (!onlyHandlers && !special.noBubble && !isString(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            old = cur;
          }
          if (old === (elem.ownerDocument || document)) {
            eventPath.push(old.defaultView || old.parentWindow || window);
          }
        }
        /** @type {number} */
        i = 0;
        for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
          tmp = cur;
          event.type = i > 1 ? bubbleType : special.bindType || type;
          if (next = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle")) {
            next.apply(cur, value);
          }
          if ((next = ontype && cur[ontype]) && next.apply && acceptData(cur)) {
            event.result = next.apply(cur, value);
            if (false === event.result) {
              event.preventDefault();
            }
          }
        }
        return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && false !== special._default.apply(eventPath.pop(), value) || !acceptData(elem) || ontype && isFunction(elem[type]) && !isString(elem) && ((old = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type, event.isPropagationStopped() && tmp.addEventListener(type, start), elem[type](), event.isPropagationStopped() && tmp.removeEventListener(type, start), jQuery.event.triggered = void 0, old && 
        (elem[ontype] = old)), event.result;
      }
    },
    simulate : function(type, node, options) {
      var r = jQuery.extend(new jQuery.Event, options, {
        type : type,
        isSimulated : true
      });
      jQuery.event.trigger(r, null, node);
    }
  });
  jQuery.fn.extend({
    trigger : function(event, data) {
      return this.each(function() {
        jQuery.event.trigger(event, data, this);
      });
    },
    triggerHandler : function(type, data) {
      var parent = this[0];
      if (parent) {
        return jQuery.event.trigger(type, data, parent, true);
      }
    }
  });
  if (!support.focusin) {
    jQuery.each({
      focus : "focusin",
      blur : "focusout"
    }, function(orig, name) {
      /**
       * @param {(Object|string)} event
       * @return {undefined}
       */
      var handler = function(event) {
        jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[name] = {
        setup : function() {
          var doc = this.ownerDocument || this;
          var aggFuncNames = dataPriv.access(doc, name);
          if (!aggFuncNames) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, name, (aggFuncNames || 0) + 1);
        },
        teardown : function() {
          var doc = this.ownerDocument || this;
          /** @type {number} */
          var attaches = dataPriv.access(doc, name) - 1;
          if (attaches) {
            dataPriv.access(doc, name, attaches);
          } else {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, name);
          }
        }
      };
    });
  }
  var location = window.location;
  /** @type {number} */
  var widgetUniqueIDIndex = Date.now();
  /** @type {!RegExp} */
  var rquery = /\?/;
  /**
   * @param {string} data
   * @return {?}
   */
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || "string" != typeof data) {
      return null;
    }
    try {
      xml = (new window.DOMParser).parseFromString(data, "text/xml");
    } catch (e) {
      xml = void 0;
    }
    return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
  };
  /** @type {!RegExp} */
  var hasExtRx = /\[\]$/;
  /** @type {!RegExp} */
  var reVowels = /\r?\n/g;
  /** @type {!RegExp} */
  var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
  /** @type {!RegExp} */
  var rsubmittable = /^(?:input|select|textarea|keygen)/i;
  /**
   * @param {?} obj
   * @param {string} type
   * @return {?}
   */
  jQuery.param = function(obj, type) {
    var name;
    /** @type {!Array} */
    var displayUsedBy = [];
    /**
     * @param {?} part
     * @param {!Object} def
     * @return {undefined}
     */
    var add = function(part, def) {
      var value = isFunction(def) ? def() : def;
      /** @type {string} */
      displayUsedBy[displayUsedBy.length] = encodeURIComponent(part) + "=" + encodeURIComponent(null == value ? "" : value);
    };
    if (Array.isArray(obj) || obj.jquery && !jQuery.isPlainObject(obj)) {
      jQuery.each(obj, function() {
        add(this.name, this.value);
      });
    } else {
      for (name in obj) {
        extend(name, obj[name], type, add);
      }
    }
    return displayUsedBy.join("&");
  };
  jQuery.fn.extend({
    serialize : function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var string = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !reg.test(string));
      }).map(function(canCreateDiscussions, ctlParams) {
        var val = jQuery(this).val();
        return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name : ctlParams.name,
            value : val.replace(reVowels, "\r\n")
          };
        }) : {
          name : ctlParams.name,
          value : val.replace(reVowels, "\r\n")
        };
      }).get();
    }
  });
  /** @type {!RegExp} */
  var jsre = /%20/g;
  /** @type {!RegExp} */
  var rhash = /#.*$/;
  /** @type {!RegExp} */
  var rts = /([?&])_=[^&]*/;
  /** @type {!RegExp} */
  var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  /** @type {!RegExp} */
  var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
  /** @type {!RegExp} */
  var re = /^(?:GET|HEAD)$/;
  /** @type {!RegExp} */
  var rprotocol = /^\/\//;
  var prefilters = {};
  var transports = {};
  /** @type {string} */
  var $t = "*/".concat("*");
  var originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  jQuery.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : location.href,
      type : "GET",
      isLocal : rlocalProtocol.test(location.protocol),
      global : true,
      processData : true,
      async : true,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : $t,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {
        xml : /\bxml\b/,
        html : /\bhtml/,
        json : /\bjson\b/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText",
        json : "responseJSON"
      },
      converters : {
        "* text" : String,
        "text html" : true,
        "text json" : JSON.parse,
        "text xml" : jQuery.parseXML
      },
      flatOptions : {
        url : true,
        context : true
      }
    },
    ajaxSetup : function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
    ajaxTransport : addToPrefiltersOrTransports(transports),
    ajax : function(url, options) {
      /**
       * @param {number} status
       * @param {string} nativeStatusText
       * @param {!Array} responses
       * @param {string} headers
       * @return {undefined}
       */
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess;
        var success;
        var error;
        var response;
        var modified;
        /** @type {string} */
        var statusText = nativeStatusText;
        if (!completed) {
          /** @type {boolean} */
          completed = true;
          if (showAboveTimeout) {
            window.clearTimeout(showAboveTimeout);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          /** @type {number} */
          jqXHR.readyState = status > 0 ? 4 : 0;
          /** @type {boolean} */
          isSuccess = status >= 200 && status < 300 || 304 === status;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                jQuery.lastModified[cacheURL] = modified;
              }
              if (modified = jqXHR.getResponseHeader("etag")) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (204 === status || "HEAD" === s.type) {
              /** @type {string} */
              statusText = "nocontent";
            } else {
              if (304 === status) {
                /** @type {string} */
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                /** @type {boolean} */
                isSuccess = !(error = response.error);
              }
            }
          } else {
            error = statusText;
            if (!(!status && statusText)) {
              /** @type {string} */
              statusText = "error";
              if (status < 0) {
                /** @type {number} */
                status = 0;
              }
            }
          }
          /** @type {number} */
          jqXHR.status = status;
          /** @type {string} */
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (f) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (f) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
      }
      if ("object" == typeof url) {
        /** @type {string} */
        options = url;
        url = void 0;
      }
      options = options || {};
      var transport;
      var cacheURL;
      var responseHeadersString;
      var n;
      var showAboveTimeout;
      var urlAnchor;
      var completed;
      var f;
      var i;
      var uncached;
      var s = jQuery.ajaxSetup({}, options);
      var callbackContext = s.context || s;
      var globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event;
      var deferred = jQuery.Deferred();
      var completeDeferred = jQuery.Callbacks("once memory");
      var statusCode = s.statusCode || {};
      var data = {};
      var requestHeadersNames = {};
      /** @type {string} */
      var status = "canceled";
      var jqXHR = {
        readyState : 0,
        getResponseHeader : function(header) {
          var i;
          if (completed) {
            if (!n) {
              n = {};
              for (; i = rheaders.exec(responseHeadersString);) {
                /** @type {string} */
                n[i[1].toLowerCase()] = i[2];
              }
            }
            i = n[header.toLowerCase()];
          }
          return null == i ? null : i;
        },
        getAllResponseHeaders : function() {
          return completed ? responseHeadersString : null;
        },
        setRequestHeader : function(name, value) {
          return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, data[name] = value), this;
        },
        overrideMimeType : function(type) {
          return null == completed && (s.mimeType = type), this;
        },
        statusCode : function(map) {
          var tmp;
          if (map) {
            if (completed) {
              jqXHR.always(map[jqXHR.status]);
            } else {
              for (tmp in map) {
                /** @type {!Array} */
                statusCode[tmp] = [statusCode[tmp], map[tmp]];
              }
            }
          }
          return this;
        },
        abort : function(type) {
          var statusText = type || status;
          return transport && transport.abort(statusText), done(0, statusText), this;
        }
      };
      if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain) {
        urlAnchor = document.createElement("a");
        try {
          /** @type {string} */
          urlAnchor.href = s.url;
          /** @type {string} */
          urlAnchor.href = urlAnchor.href;
          /** @type {boolean} */
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          /** @type {boolean} */
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
        return jqXHR;
      }
      if ((f = jQuery.event && s.global) && 0 == jQuery.active++) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      /** @type {boolean} */
      s.hasContent = !re.test(s.type);
      /** @type {string} */
      cacheURL = s.url.replace(rhash, "");
      if (s.hasContent) {
        if (s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded")) {
          s.data = s.data.replace(jsre, "+");
        }
      } else {
        /** @type {string} */
        uncached = s.url.slice(cacheURL.length);
        if (s.data && (s.processData || "string" == typeof s.data)) {
          /** @type {string} */
          cacheURL = cacheURL + ((rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (false === s.cache) {
          /** @type {string} */
          cacheURL = cacheURL.replace(rts, "$1");
          /** @type {string} */
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + widgetUniqueIDIndex++ + uncached;
        }
        /** @type {string} */
        s.url = cacheURL + uncached;
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && false !== s.contentType || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (false === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) {
        return jqXHR.abort();
      }
      if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
        if (jqXHR.readyState = 1, f && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          showAboveTimeout = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          /** @type {boolean} */
          completed = false;
          transport.send(data, done);
        } catch (success) {
          if (completed) {
            throw success;
          }
          done(-1, success);
        }
      } else {
        done(-1, "No Transport");
      }
      return jqXHR;
    },
    getJSON : function(data, callback, options) {
      return jQuery.get(data, callback, options, "json");
    },
    getScript : function(data, callback) {
      return jQuery.get(data, void 0, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
    /**
     * @param {!Object} url
     * @param {!Object} revision
     * @param {!Function} undefined
     * @param {string} type
     * @return {?}
     */
    jQuery[method] = function(url, revision, undefined, type) {
      return isFunction(revision) && (type = type || undefined, undefined = revision, revision = void 0), jQuery.ajax(jQuery.extend({
        url : url,
        type : method,
        dataType : type,
        data : revision,
        success : undefined
      }, jQuery.isPlainObject(url) && url));
    };
  });
  /**
   * @param {string} url
   * @return {?}
   */
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url : url,
      type : "GET",
      dataType : "script",
      cache : true,
      async : false,
      global : false,
      "throws" : true
    });
  };
  jQuery.fn.extend({
    wrapAll : function(html) {
      var t;
      return this[0] && (isFunction(html) && (html = html.call(this[0])), t = jQuery(html, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        var elem = this;
        for (; elem.firstElementChild;) {
          elem = elem.firstElementChild;
        }
        return elem;
      }).append(this)), this;
    },
    wrapInner : function(html) {
      return isFunction(html) ? this.each(function(i) {
        jQuery(this).wrapInner(html.call(this, i));
      }) : this.each(function() {
        var t = jQuery(this);
        var contents = t.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          t.append(html);
        }
      });
    },
    wrap : function(f) {
      var func = isFunction(f);
      return this.each(function(args) {
        jQuery(this).wrapAll(func ? f.call(this, args) : f);
      });
    },
    unwrap : function(fn) {
      return this.parent(fn).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      }), this;
    }
  });
  /**
   * @param {!Node} a
   * @return {?}
   */
  jQuery.expr.pseudos.hidden = function(a) {
    return !jQuery.expr.pseudos.visible(a);
  };
  /**
   * @param {!Element} elem
   * @return {?}
   */
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  /**
   * @return {?}
   */
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest;
    } catch (e) {
    }
  };
  var xhrSuccessStatus = {
    0 : 200,
    1223 : 204
  };
  var xhrSupported = jQuery.ajaxSettings.xhr();
  /** @type {boolean} */
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  /** @type {boolean} */
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(s) {
    var callback;
    var errorCallback;
    if (support.cors || xhrSupported && !s.crossDomain) {
      return {
        send : function(headers, callback) {
          var i;
          var xhr = s.xhr();
          if (xhr.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) {
            for (i in s.xhrFields) {
              xhr[i] = s.xhrFields[i];
            }
          }
          if (s.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(s.mimeType);
          }
          if (!(s.crossDomain || headers["X-Requested-With"])) {
            /** @type {string} */
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          /**
           * @param {string} event
           * @return {?}
           */
          callback = function(event) {
            return function() {
              if (callback) {
                /** @type {null} */
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                if ("abort" === event) {
                  xhr.abort();
                } else {
                  if ("error" === event) {
                    if ("number" != typeof xhr.status) {
                      callback(0, "error");
                    } else {
                      callback(xhr.status, xhr.statusText);
                    }
                  } else {
                    callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                      binary : xhr.response
                    } : {
                      text : xhr.responseText
                    }, xhr.getAllResponseHeaders());
                  }
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
          if (void 0 !== xhr.onabort) {
            xhr.onabort = errorCallback;
          } else {
            /**
             * @return {undefined}
             */
            xhr.onreadystatechange = function() {
              if (4 === xhr.readyState) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(s.hasContent && s.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain) {
      /** @type {boolean} */
      options.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /\b(?:java|ecma)script\b/
    },
    converters : {
      "text script" : function(value) {
        return jQuery.globalEval(value), value;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(settings) {
    if (void 0 === settings.cache) {
      /** @type {boolean} */
      settings.cache = false;
    }
    if (settings.crossDomain) {
      /** @type {string} */
      settings.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var fileElem;
      var callback;
      return {
        send : function(packets, callback) {
          fileElem = jQuery("<script>").prop({
            charset : s.scriptCharset,
            src : s.url
          }).on("load error", callback = function(result) {
            fileElem.remove();
            /** @type {null} */
            callback = null;
            if (result) {
              callback("error" === result.type ? 404 : 200, result.type);
            }
          });
          document.head.appendChild(fileElem[0]);
        },
        abort : function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  /** @type {!Array} */
  var oldCallbacks = [];
  /** @type {!RegExp} */
  var t = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + widgetUniqueIDIndex++;
      return this[indexLookupKey] = true, indexLookupKey;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
    var callbackName;
    var overwritten;
    var responseContainer;
    /** @type {(boolean|string)} */
    var i = false !== s.jsonp && (t.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && t.test(s.data) && "data");
    if (i || "jsonp" === s.dataTypes[0]) {
      return callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, i ? s[i] = s[i].replace(t, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
        return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
      }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
        /** @type {!Arguments} */
        responseContainer = arguments;
      }, scanners.always(function() {
        if (void 0 === overwritten) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = void 0;
      }), "script";
    }
  });
  support.createHTMLDocument = function() {
    var iframeBody = document.implementation.createHTMLDocument("").body;
    return iframeBody.innerHTML = "<form></form><form></form>", 2 === iframeBody.childNodes.length;
  }();
  /**
   * @param {string} data
   * @param {!Object} context
   * @param {!Function} keepScripts
   * @return {?}
   */
  jQuery.parseHTML = function(data, context, keepScripts) {
    if ("string" != typeof data) {
      return [];
    }
    if ("boolean" == typeof context) {
      /** @type {!Object} */
      keepScripts = context;
      /** @type {boolean} */
      context = false;
    }
    var target;
    var parsed;
    var scripts;
    return context || (support.createHTMLDocument ? ((target = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, context.head.appendChild(target)) : context = document), parsed = rsingleTag.exec(data), scripts = !keepScripts && [], parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
  };
  /**
   * @param {string} result
   * @param {!Object} value
   * @param {!Array} callback
   * @return {?}
   */
  jQuery.fn.load = function(result, value, callback) {
    var name;
    var method;
    var args;
    var $ = this;
    var i = result.indexOf(" ");
    return i > -1 && (name = log(result.slice(i)), result = result.slice(0, i)), isFunction(value) ? (callback = value, value = void 0) : value && "object" == typeof value && (method = "POST"), $.length > 0 && jQuery.ajax({
      url : result,
      type : method || "GET",
      dataType : "html",
      data : value
    }).done(function(data) {
      /** @type {!Arguments} */
      args = arguments;
      $.html(name ? jQuery("<div>").append(jQuery.parseHTML(data)).find(name) : data);
    }).always(callback && function(elem, document) {
      $.each(function() {
        callback.apply(this, args || [elem.responseText, document, elem]);
      });
    }), this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, name) {
    /**
     * @param {string} e
     * @return {?}
     */
    jQuery.fn[name] = function(e) {
      return this.on(name, e);
    };
  });
  /**
   * @param {?} elem
   * @return {?}
   */
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  jQuery.offset = {
    setOffset : function(data, options, x) {
      var triggerPoint;
      var left;
      var a;
      var h;
      var curOffset;
      var value;
      var l;
      var position = jQuery.css(data, "position");
      var f = jQuery(data);
      var p = {};
      if ("static" === position) {
        /** @type {string} */
        data.style.position = "relative";
      }
      curOffset = f.offset();
      a = jQuery.css(data, "top");
      value = jQuery.css(data, "left");
      if (l = ("absolute" === position || "fixed" === position) && (a + value).indexOf("auto") > -1) {
        h = (triggerPoint = f.position()).top;
        left = triggerPoint.left;
      } else {
        /** @type {number} */
        h = parseFloat(a) || 0;
        /** @type {number} */
        left = parseFloat(value) || 0;
      }
      if (isFunction(options)) {
        options = options.call(data, x, jQuery.extend({}, curOffset));
      }
      if (null != options.top) {
        /** @type {number} */
        p.top = options.top - curOffset.top + h;
      }
      if (null != options.left) {
        /** @type {number} */
        p.left = options.left - curOffset.left + left;
      }
      if ("using" in options) {
        options.using.call(data, p);
      } else {
        f.css(p);
      }
    }
  };
  jQuery.fn.extend({
    offset : function(y) {
      if (arguments.length) {
        return void 0 === y ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, y, i);
        });
      }
      var box;
      var win;
      var aTarget = this[0];
      if (aTarget) {
        return aTarget.getClientRects().length ? (box = aTarget.getBoundingClientRect(), win = aTarget.ownerDocument.defaultView, {
          top : box.top + win.pageYOffset,
          left : box.left + win.pageXOffset
        }) : {
          top : 0,
          left : 0
        };
      }
    },
    position : function() {
      if (this[0]) {
        var el;
        var offset;
        var node;
        var element = this[0];
        var parentOffset = {
          top : 0,
          left : 0
        };
        if ("fixed" === jQuery.css(element, "position")) {
          offset = element.getBoundingClientRect();
        } else {
          offset = this.offset();
          node = element.ownerDocument;
          el = element.offsetParent || node.documentElement;
          for (; el && (el === node.body || el === node.documentElement) && "static" === jQuery.css(el, "position");) {
            el = el.parentNode;
          }
          if (el && el !== element && 1 === el.nodeType) {
            (parentOffset = jQuery(el).offset()).top += jQuery.css(el, "borderTopWidth", true);
            parentOffset.left += jQuery.css(el, "borderLeftWidth", true);
          }
        }
        return {
          top : offset.top - parentOffset.top - jQuery.css(element, "marginTop", true),
          left : offset.left - parentOffset.left - jQuery.css(element, "marginLeft", true)
        };
      }
    },
    offsetParent : function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        for (; offsetParent && "static" === jQuery.css(offsetParent, "position");) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(type, prop) {
    /** @type {boolean} */
    var top = "pageYOffset" === prop;
    /**
     * @param {?} value
     * @return {?}
     */
    jQuery.fn[type] = function(value) {
      return access(this, function(doc, method, val) {
        var win;
        if (isString(doc) ? win = doc : 9 === doc.nodeType && (win = doc.defaultView), void 0 === val) {
          return win ? win[prop] : doc[method];
        }
        if (win) {
          win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset);
        } else {
          /** @type {number} */
          doc[method] = val;
        }
      }, type, value, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, val) {
      if (val) {
        return val = curCSS(elem, prop), rnumnonpx.test(val) ? jQuery(elem).position()[prop] + "px" : val;
      }
    });
  });
  jQuery.each({
    Height : "height",
    Width : "width"
  }, function(name, type) {
    jQuery.each({
      padding : "inner" + name,
      content : type,
      "" : "outer" + name
    }, function(defaultExtra, type) {
      /**
       * @param {boolean} margin
       * @param {(number|string)} boardManager
       * @return {?}
       */
      jQuery.fn[type] = function(margin, boardManager) {
        var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
        var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
        return access(this, function(el, offset, undefined) {
          var doc;
          return isString(el) ? 0 === type.indexOf("outer") ? el["inner" + name] : el.document.documentElement["client" + name] : 9 === el.nodeType ? (doc = el.documentElement, Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(el, offset, extra) : jQuery.style(el, offset, undefined, extra);
        }, type, chainable ? margin : void 0, chainable);
      };
    });
  });
  jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, name) {
    /**
     * @param {!Object} data
     * @param {!Object} fn
     * @return {?}
     */
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover : function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind : function(event, data, fn) {
      return this.on(event, null, data, fn);
    },
    unbind : function(type, fn) {
      return this.off(type, null, fn);
    },
    delegate : function(handler, selector, data, callback) {
      return this.on(selector, handler, data, callback);
    },
    undelegate : function(selector, event, callback) {
      return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", callback);
    }
  });
  /**
   * @param {!Object} f
   * @param {!Object} c
   * @return {?}
   */
  jQuery.proxy = function(f, c) {
    var j;
    var headArgs;
    var proxy;
    if ("string" == typeof c && (j = f[c], c = f, f = j), isFunction(f)) {
      return headArgs = slice.call(arguments, 2), proxy = function() {
        return f.apply(c || this, headArgs.concat(slice.call(arguments)));
      }, proxy.guid = f.guid = f.guid || jQuery.guid++, proxy;
    }
  };
  /**
   * @param {?} hold
   * @return {undefined}
   */
  jQuery.holdReady = function(hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };
  /** @type {function(*): boolean} */
  jQuery.isArray = Array.isArray;
  /** @type {function(this:JSONType, string, function(string, *): *=): *} */
  jQuery.parseJSON = JSON.parse;
  /** @type {function(!Object, string): ?} */
  jQuery.nodeName = callback;
  /** @type {function(!Object): ?} */
  jQuery.isFunction = isFunction;
  /** @type {function(!Object): ?} */
  jQuery.isWindow = isString;
  /** @type {function(!Object): ?} */
  jQuery.camelCase = camelCase;
  /** @type {function(string): ?} */
  jQuery.type = type;
  /** @type {function(): number} */
  jQuery.now = Date.now;
  /**
   * @param {string} value
   * @return {?}
   */
  jQuery.isNumeric = function(value) {
    var undefined = jQuery.type(value);
    return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
  };
  if ("function" == typeof define && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window.jQuery;
  var old$ = window.$;
  return jQuery.noConflict = function(deep) {
    return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
  }, zoomAware || (window.jQuery = window.$ = jQuery), jQuery;
});
