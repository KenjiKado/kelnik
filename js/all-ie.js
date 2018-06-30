"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  var e = -1,
      o = -1,
      n = function n(t) {
    return parseFloat(t) || 0;
  },
      a = function a(e) {
    var o = 1,
        a = t(e),
        i = null,
        r = [];return a.each(function () {
      var e = t(this),
          a = e.offset().top - n(e.css("margin-top")),
          s = r.length > 0 ? r[r.length - 1] : null;null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a;
    }), r;
  },
      i = function i(e) {
    var o = {
      byRow: !0, property: "height", target: null, remove: !1 };return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o);
  },
      r = t.fn.matchHeight = function (e) {
    var o = i(e);if (o.remove) {
      var n = this;return this.css(o.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(n);
      }), this;
    }return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this);
  };r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
    var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");return u.each(function () {
      var e = t(this);e.data("style-cache", e.attr("style"));
    }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
      var e = t(this),
          o = e.css("display");"inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({ display: o, "padding-top": "0",
        "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" });
    }), l = a(h), h.each(function () {
      var e = t(this);e.attr("style", e.data("style-cache") || "");
    })), t.each(l, function (e, o) {
      var a = t(o),
          i = 0;if (s.target) i = s.target.outerHeight(!1);else {
        if (s.byRow && a.length <= 1) return void a.css(s.property, "");a.each(function () {
          var e = t(this),
              o = e.attr("style"),
              n = e.css("display");"inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");var a = {
            display: n };a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "");
        });
      }a.each(function () {
        var e = t(this),
            o = 0;s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px"));
      });
    }), u.each(function () {
      var e = t(this);e.attr("style", e.data("style-cache") || null);
    }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var e = {};t("[data-match-height], [data-mh]").each(function () {
      var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");n in e ? e[n] = e[n].add(o) : e[n] = o;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };var s = function s(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(e, r._groups);
  };r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();if (i === e) return;e = i;
    }n ? o === -1 && (o = setTimeout(function () {
      s(a), o = -1;
    }, r._throttle)) : s(a);
  }, t(r._applyDataApi);var h = t.fn.on ? "on" : "bind";t(window)[h]("load", function (t) {
    r._update(!1, t);
  }), t(window)[h]("resize orientationchange", function (t) {
    r._update(!0, t);
  });
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 JГ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function (c) {
    c.extend(c.fn, { validate: function validate(a) {
            if (this.length) {
                var b = c.data(this[0], "validator");if (b) return b;b = new c.validator(a, this[0]);c.data(this[0], "validator", b);if (b.settings.onsubmit) {
                    this.find("input, button").filter(".cancel").click(function () {
                        b.cancelSubmit = true;
                    });b.settings.submitHandler && this.find("input, button").filter(":submit").click(function () {
                        b.submitButton = this;
                    });this.submit(function (d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton) var f = c("<input type='hidden'/>").attr("name", b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b, b.currentForm);b.submitButton && f.remove();return false;
                            }return true;
                        }b.settings.debug && d.preventDefault();if (b.cancelSubmit) {
                            b.cancelSubmit = false;return e();
                        }if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;return false;
                            }return e();
                        } else {
                            b.focusInvalid();return false;
                        }
                    });
                }return b;
            } else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
        }, valid: function valid() {
            if (c(this[0]).is("form")) return this.validate().form();else {
                var a = true,
                    b = c(this[0].form).validate();this.each(function () {
                    a &= b.element(this);
                });return a;
            }
        }, removeAttrs: function removeAttrs(a) {
            var b = {},
                d = this;c.each(a.split(/\s/), function (e, f) {
                b[f] = d.attr(f);d.removeAttr(f);
            });return b;
        }, rules: function rules(a, b) {
            var d = this[0];if (a) {
                var e = c.data(d.form, "validator").settings,
                    f = e.rules,
                    g = c.validator.staticRules(d);switch (a) {case "add":
                        c.extend(g, c.validator.normalizeRule(b));f[d.name] = g;if (b.messages) e.messages[d.name] = c.extend(e.messages[d.name], b.messages);break;case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g;
                        }var h = {};c.each(b.split(/\s/), function (j, i) {
                            h[i] = g[i];delete g[i];
                        });return h;}
            }d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d);if (d.required) {
                e = d.required;delete d.required;d = c.extend({ required: e }, d);
            }return d;
        } });c.extend(c.expr[":"], { blank: function blank(a) {
            return !c.trim("" + a.value);
        }, filled: function filled(a) {
            return !!c.trim("" + a.value);
        }, unchecked: function unchecked(a) {
            return !a.checked;
        } });c.validator = function (a, b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);this.currentForm = b;this.init();
    };c.validator.format = function (a, b) {
        if (arguments.length == 1) return function () {
            var d = c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this, d);
        };if (arguments.length > 2 && b.constructor != Array) b = c.makeArray(arguments).slice(1);if (b.constructor != Array) b = [b];c.each(b, function (d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e);
        });return a;
    };c.extend(c.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error",
            validClass: "valid", errorElement: "label", focusInvalid: true, errorContainer: c([]), errorLabelContainer: c([]), onsubmit: true, ignore: [], ignoreTitle: false, onfocusin: function onfocusin(a) {
                this.lastActive = a;if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide();
                }
            }, onfocusout: function onfocusout(a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) this.element(a);
            },
            onkeyup: function onkeyup(a) {
                if (a.name in this.submitted || a == this.lastElement) this.element(a);
            }, onclick: function onclick(a) {
                if (a.name in this.submitted) this.element(a);else a.parentNode.name in this.submitted && this.element(a.parentNode);
            }, highlight: function highlight(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).addClass(b).removeClass(d) : c(a).addClass(b).removeClass(d);
            }, unhighlight: function unhighlight(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).removeClass(b).addClass(d) : c(a).removeClass(b).addClass(d);
            } }, setDefaults: function setDefaults(a) {
            c.extend(c.validator.defaults, a);
        }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", accept: "Please enter a value with a valid extension.", maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."), rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."), range: c.validator.format("Please enter a value between {0} and {1}."), max: c.validator.format("Please enter a value less than or equal to {0}."), min: c.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: false, prototype: { init: function init() {
                function a(e) {
                    var f = c.data(this[0].form, "validator");e = "on" + e.type.replace(/^validate/, "");f.settings[e] && f.settings[e].call(f, this[0]);
                }this.labelContainer = c(this.settings.errorLabelContainer);this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted = {};this.valueCache = {};this.pendingRequest = 0;this.pending = {};this.invalid = {};this.reset();var b = this.groups = {};c.each(this.settings.groups, function (e, f) {
                    c.each(f.split(/\s/), function (g, h) {
                        b[h] = e;
                    });
                });var d = this.settings.rules;
                c.each(d, function (e, f) {
                    d[e] = c.validator.normalizeRule(f);
                });c(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", a).validateDelegate(":radio, :checkbox, select, option", "click", a);this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
            }, form: function form() {
                this.checkForm();c.extend(this.submitted, this.errorMap);this.invalid = c.extend({}, this.errorMap);this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]);this.showErrors();return this.valid();
            }, checkForm: function checkForm() {
                this.prepareForm();for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
                    this.check(b[a]);
                }return this.valid();
            }, element: function element(a) {
                this.lastElement = a = this.clean(a);this.prepareElement(a);this.currentElements = c(a);var b = this.check(a);if (b) delete this.invalid[a.name];else this.invalid[a.name] = true;if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);this.showErrors();return b;
            }, showErrors: function showErrors(a) {
                if (a) {
                    c.extend(this.errorMap, a);this.errorList = [];for (var b in a) {
                        this.errorList.push({ message: a[b], element: this.findByName(b)[0] });
                    }this.successList = c.grep(this.successList, function (d) {
                        return !(d.name in a);
                    });
                }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            }, resetForm: function resetForm() {
                c.fn.resetForm && c(this.currentForm).resetForm();this.submitted = {};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);
            }, numberOfInvalids: function numberOfInvalids() {
                return this.objectLength(this.invalid);
            },
            objectLength: function objectLength(a) {
                var b = 0,
                    d;for (d in a) {
                    b++;
                }return b;
            }, hideErrors: function hideErrors() {
                this.addWrapper(this.toHide).hide();
            }, valid: function valid() {
                return this.size() == 0;
            }, size: function size() {
                return this.errorList.length;
            }, focusInvalid: function focusInvalid() {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (a) {}
            }, findLastActive: function findLastActive() {
                var a = this.lastActive;return a && c.grep(this.errorList, function (b) {
                    return b.element.name == a.name;
                }).length == 1 && a;
            }, elements: function elements() {
                var a = this,
                    b = {};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    !this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this);if (this.name in b || !a.objectLength(c(this).rules())) return false;return b[this.name] = true;
                });
            }, clean: function clean(a) {
                return c(a)[0];
            }, errors: function errors() {
                return c(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
            }, reset: function reset() {
                this.successList = [];this.errorList = [];this.errorMap = {};this.toShow = c([]);this.toHide = c([]);this.currentElements = c([]);
            }, prepareForm: function prepareForm() {
                this.reset();this.toHide = this.errors().add(this.containers);
            }, prepareElement: function prepareElement(a) {
                this.reset();this.toHide = this.errorsFor(a);
            }, check: function check(a) {
                a = this.clean(a);if (this.checkable(a)) a = this.findByName(a.name).not(this.settings.ignore)[0];var b = c(a).rules(),
                    d = false,
                    e;for (e in b) {
                    var f = { method: e, parameters: b[e] };try {
                        var g = c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters);if (g == "dependency-mismatch") d = true;else {
                            d = false;if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));return;
                            }if (!g) {
                                this.formatAndAdd(a, f);return false;
                            }
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + a.id + ", check the '" + f.method + "' method", h);throw h;
                    }
                }if (!d) {
                    this.objectLength(b) && this.successList.push(a);return true;
                }
            }, customMetaMessage: function customMetaMessage(a, b) {
                if (c.metadata) {
                    var d = this.settings.meta ? c(a).metadata()[this.settings.meta] : c(a).metadata();return d && d.messages && d.messages[b];
                }
            }, customMessage: function customMessage(a, b) {
                var d = this.settings.messages[a];return d && (d.constructor == String ? d : d[b]);
            }, findDefined: function findDefined() {
                for (var a = 0; a < arguments.length; a++) {
                    if (arguments[a] !== undefined) return arguments[a];
                }
            }, defaultMessage: function defaultMessage(a, b) {
                return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " + a.name + "</strong>");
            }, formatAndAdd: function formatAndAdd(a, b) {
                var d = this.defaultMessage(a, b.method),
                    e = /\$?\{(\d+)\}/g;if (typeof d == "function") d = d.call(this, b.parameters, a);else if (e.test(d)) d = jQuery.format(d.replace(e, "{$1}"), b.parameters);this.errorList.push({ message: d, element: a });this.errorMap[a.name] = d;this.submitted[a.name] = d;
            }, addWrapper: function addWrapper(a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));return a;
            }, defaultShowErrors: function defaultShowErrors() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);this.showLabel(b.element, b.message);
                }if (this.errorList.length) this.toShow = this.toShow.add(this.containers);if (this.settings.success) for (a = 0; this.successList[a]; a++) {
                    this.showLabel(this.successList[a]);
                }if (this.settings.unhighlight) {
                    a = 0;for (b = this.validElements(); b[a]; a++) {
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    }
                }this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();this.addWrapper(this.toShow).show();
            }, validElements: function validElements() {
                return this.currentElements.not(this.invalidElements());
            }, invalidElements: function invalidElements() {
                return c(this.errorList).map(function () {
                    return this.element;
                });
            }, showLabel: function showLabel(a, b) {
                var d = this.errorsFor(a);if (d.length) {
                    d.removeClass().addClass(this.settings.errorClass);d.attr("generated") && d.html(b);
                } else {
                    d = c("<" + this.settings.errorElement + "/>").attr({ "for": this.idOrName(a), generated: true }).addClass(this.settings.errorClass).html(b || "");if (this.settings.wrapper) d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, c(a)) : d.insertAfter(a));
                }if (!b && this.settings.success) {
                    d.text("");typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d);
                }this.toShow = this.toShow.add(d);
            }, errorsFor: function errorsFor(a) {
                var b = this.idOrName(a);return this.errors().filter(function () {
                    return c(this).attr("for") == b;
                });
            },
            idOrName: function idOrName(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            }, checkable: function checkable(a) {
                return (/radio|checkbox/i.test(a.type)
                );
            }, findByName: function findByName(a) {
                var b = this.currentForm;return c(document.getElementsByName(a)).map(function (d, e) {
                    return e.form == b && e.name == a && e || null;
                });
            }, getLength: function getLength(a, b) {
                switch (b.nodeName.toLowerCase()) {case "select":
                        return c("option:selected", b).length;case "input":
                        if (this.checkable(b)) return this.findByName(b.name).filter(":checked").length;}return a.length;
            },
            depend: function depend(a, b) {
                return this.dependTypes[typeof a === "undefined" ? "undefined" : _typeof(a)] ? this.dependTypes[typeof a === "undefined" ? "undefined" : _typeof(a)](a, b) : true;
            }, dependTypes: { "boolean": function boolean(a) {
                    return a;
                }, string: function string(a, b) {
                    return !!c(a, b.form).length;
                }, "function": function _function(a, b) {
                    return a(b);
                } }, optional: function optional(a) {
                return !c.validator.methods.required.call(this, c.trim(a.value), a) && "dependency-mismatch";
            }, startRequest: function startRequest(a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;this.pending[a.name] = true;
                }
            }, stopRequest: function stopRequest(a, b) {
                this.pendingRequest--;if (this.pendingRequest < 0) this.pendingRequest = 0;delete this.pending[a.name];if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();this.formSubmitted = false;
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);this.formSubmitted = false;
                }
            }, previousValue: function previousValue(a) {
                return c.data(a, "previousValue") || c.data(a, "previousValue", { old: null, valid: true, message: this.defaultMessage(a, "remote") });
            } }, classRuleSettings: { required: { required: true },
            email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, dateDE: { dateDE: true }, number: { number: true }, numberDE: { numberDE: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function addClassRules(a, b) {
            a.constructor == String ? this.classRuleSettings[a] = b : c.extend(this.classRuleSettings, a);
        }, classRules: function classRules(a) {
            var b = {};(a = c(a).attr("class")) && c.each(a.split(" "), function () {
                this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this]);
            });return b;
        }, attributeRules: function attributeRules(a) {
            var b = {};a = c(a);for (var d in c.validator.methods) {
                var e = a.attr(d);if (e) b[d] = e;
            }b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;return b;
        }, metadataRules: function metadataRules(a) {
            if (!c.metadata) return {};var b = c.data(a.form, "validator").settings.meta;return b ? c(a).metadata()[b] : c(a).metadata();
        }, staticRules: function staticRules(a) {
            var b = {},
                d = c.data(a.form, "validator");if (d.settings.rules) b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};return b;
        }, normalizeRules: function normalizeRules(a, b) {
            c.each(a, function (d, e) {
                if (e === false) delete a[d];else if (e.param || e.depends) {
                    var f = true;switch (_typeof(e.depends)) {case "string":
                            f = !!c(e.depends, b.form).length;break;case "function":
                            f = e.depends.call(b, b);}if (f) a[d] = e.param !== undefined ? e.param : true;else delete a[d];
                }
            });c.each(a, function (d, e) {
                a[d] = c.isFunction(e) ? e(b) : e;
            });c.each(["minlength", "maxlength", "min", "max"], function () {
                if (a[this]) a[this] = Number(a[this]);
            });c.each(["rangelength", "range"], function () {
                if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])];
            });if (c.validator.autoCreateRanges) {
                if (a.min && a.max) {
                    a.range = [a.min, a.max];delete a.min;delete a.max;
                }if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];delete a.minlength;delete a.maxlength;
                }
            }a.messages && delete a.messages;return a;
        }, normalizeRule: function normalizeRule(a) {
            if (typeof a == "string") {
                var b = {};c.each(a.split(/\s/), function () {
                    b[this] = true;
                });a = b;
            }return a;
        }, addMethod: function addMethod(a, b, d) {
            c.validator.methods[a] = b;c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a));
        },
        methods: { required: function required(a, b, d) {
                if (!this.depend(d, b)) return "dependency-mismatch";switch (b.nodeName.toLowerCase()) {case "select":
                        return (a = c(b).val()) && a.length > 0;case "input":
                        if (this.checkable(b)) return this.getLength(a, b) > 0;default:
                        return c.trim(a).length > 0;}
            }, remote: function remote(a, b, d) {
                if (this.optional(b)) return "dependency-mismatch";var e = this.previousValue(b);this.settings.messages[b.name] || (this.settings.messages[b.name] = {});e.originalMessage = this.settings.messages[b.name].remote;this.settings.messages[b.name].remote = e.message;d = typeof d == "string" && { url: d } || d;if (this.pending[b.name]) return "pending";if (e.old === a) return e.valid;e.old = a;var f = this;this.startRequest(b);var g = {};g[b.name] = a;c.ajax(c.extend(true, { url: d, mode: "abort", port: "validate" + b.name, dataType: "json", data: g, success: function success(h) {
                        f.settings.messages[b.name].remote = e.originalMessage;var j = h === true;if (j) {
                            var i = f.formSubmitted;f.prepareElement(b);f.formSubmitted = i;f.successList.push(b);f.showErrors();
                        } else {
                            i = {};h = h || f.defaultMessage(b, "remote");i[b.name] = e.message = c.isFunction(h) ? h(a) : h;f.showErrors(i);
                        }e.valid = j;f.stopRequest(b, j);
                    } }, d));return "pending";
            }, minlength: function minlength(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d;
            }, maxlength: function maxlength(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d;
            }, rangelength: function rangelength(a, b, d) {
                a = this.getLength(c.trim(a), b);return this.optional(b) || a >= d[0] && a <= d[1];
            }, min: function min(a, b, d) {
                return this.optional(b) || a >= d;
            }, max: function max(a, b, d) {
                return this.optional(b) || a <= d;
            }, range: function range(a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1];
            }, email: function email(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a);
            },
            url: function url(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
            },
            date: function date(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a));
            }, dateISO: function dateISO(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a);
            }, number: function number(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a);
            }, digits: function digits(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            }, creditcard: function creditcard(a, b) {
                if (this.optional(b)) return "dependency-mismatch";if (/[^0-9-]+/.test(a)) return false;var d = 0,
                    e = 0,
                    f = false;a = a.replace(/\D/g, "");for (var g = a.length - 1; g >= 0; g--) {
                    e = a.charAt(g);e = parseInt(e, 10);if (f) if ((e *= 2) > 9) e -= 9;d += e;f = !f;
                }return d % 10 == 0;
            }, accept: function accept(a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"));
            }, equalTo: function equalTo(a, b, d) {
                d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    c(b).valid();
                });return a == d.val();
            } } });c.format = c.validator.format;
})(jQuery);
(function (c) {
    var a = {};if (c.ajaxPrefilter) c.ajaxPrefilter(function (d, e, f) {
        e = d.port;if (d.mode == "abort") {
            a[e] && a[e].abort();a[e] = f;
        }
    });else {
        var b = c.ajax;c.ajax = function (d) {
            var e = ("port" in d ? d : c.ajaxSettings).port;if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();return a[e] = b.apply(this, arguments);
            }return b.apply(this, arguments);
        };
    }
})(jQuery);
(function (c) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        function d(e) {
            e = c.event.fix(e);e.type = b;return c.event.handle.call(this, e);
        }c.event.special[b] = { setup: function setup() {
                this.addEventListener(a, d, true);
            }, teardown: function teardown() {
                this.removeEventListener(a, d, true);
            }, handler: function handler(e) {
                arguments[0] = c.event.fix(e);arguments[0].type = b;return c.event.handle.apply(this, arguments);
            } };
    });c.extend(c.fn, { validateDelegate: function validateDelegate(a, b, d) {
            return this.bind(b, function (e) {
                var f = c(e.target);if (f.is(a)) return d.apply(f, arguments);
            });
        } });
})(jQuery);
'use strict';

$(document).ready(function () {
    $('.item-block').matchHeight();
    $('.item-block__text').matchHeight();
    $('.up-link a').on("click touch", function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
    $("form").validate({
        rules: {
            email: "required"
        },
        messages: {
            email: "Пожалуйста введите email"
        }
    });
    $("label[for=checkbox]").on("click change ", function () {
        var span = $(this).children("span");
        if (span.hasClass("checked")) {
            span.removeClass("checked");
        } else {
            span.addClass("checked");
        }
    });
    $(".title-container__sorting a").on("click touch", function () {
        if ($(this).hasClass('down')) {
            $(this).addClass("top");
            $(this).removeClass("down");
        } else {
            $(this).addClass("down");
            $(this).removeClass("top");
        }
        $(this).siblings('a').removeClass("top").removeClass("down");
    });
});