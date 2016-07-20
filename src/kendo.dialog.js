﻿(function(f, define) {
    define(["./kendo.core", "./kendo.popup"], f);
})(function() {

    var __meta__ = { // jshint ignore:line
        id: "dialog",
        name: "Dialog",
        category: "web", // suite
        description: "The dialog widget is a modal popup that brings information to the user.",
        depends: ["core", "popup"] // dependencies
    };

    // START WIDGET DEFINITION - only if it will have a single script file

    (function($, undefined) {
        var kendo = window.kendo,
            Widget = kendo.ui.Widget,
            template = kendo.template,
            KDIALOG = ".k-dialog",
            KCONTENT = "k-content",
            KTITLELESS = "k-dialog-titleless",
            templates;

        var Dialog = Widget.extend({
            init: function(element, options) {
                var that = this,
                    wrapper;

                Widget.fn.init.call(that, element, options);

                element = that.element;
                that._createDialog();
                wrapper = that.wrapper = element.closest(KDIALOG);
                kendo.notify(that);
            },

            _createDialog: function() {
                var that = this,
                    contentHtml = that.element,
                    options = that.options,
                    titlebar = $(templates.titlebar(options)),
                    wrapper = $(templates.wrapper(options));

                contentHtml.addClass(KCONTENT);

                wrapper.appendTo("body");

                if (options.closable !== false) {
                    wrapper.append(templates.close);
                }

                if (options.title !== false) {
                    wrapper.append(titlebar);
                } else {
                    wrapper.addClass(KTITLELESS);
                }

                wrapper.append(contentHtml);

                if (options.actions.length) {
                    that._createActionbar(wrapper);
                }

                wrapper = contentHtml = null;
            },


            _createActionbar: function(wrapper) {
                var actionbar = $(templates.actionbar);
                this._addButtons(actionbar);
                wrapper.append(actionbar);
            },

            _addButtons: function(actionbar) {
                var actions = this.options.actions,
                    action;
                for (var i = 0; i < actions.length; i++) {
                        action = actions[i],
                        button = $(templates.action(action));

                    if (action.primary) {
                        button.addClass("k-primary");
                    }
                    actionbar.append(button);
                }
            },

            _destroy: function() {
                Widget.fn.destroy.call(this);
            },

            destroy: function() {
                this._destroy();
                this.wrapper.remove();
                this.wrapper = this.element = $();
            },

            events: [
            ],

            options: {
                name: "Dialog",
                title: "",
                actions: [],
                modal: true,
                closable: true
            }
        });

        templates = {
            wrapper: template("<div class='k-widget k-dialog k-window' />"),
            action: template("<li class='k-button'>#= text #</li>"),
            titlebar: template(
                "<div class='k-window-titlebar k-header'>" +
                  "<span class='k-dialog-title'>#= title #</span>" +
                "</div>"
            ),
            actionbar: "<ul class='k-dialog-buttongroup' />",
            close: "<span class='k-i-close'>Close</span>",
            overlay: "<div class='k-overlay' />"
        };

        kendo.ui.plugin(Dialog);

    })(window.kendo.jQuery);

    return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f) { f(); });