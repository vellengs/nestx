System.register(["rxjs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var rxjs_1, columnSets, formSets;
    return {
        setters: [
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }
        ],
        execute: function () {
            exports_1("columnSets", columnSets = {
                default: [
                    {
                        title: 'name',
                        i18n: '名称',
                        index: 'name'
                    },
                    {
                        title: 'icon',
                        i18n: '图标',
                        index: 'icon'
                    },
                    {
                        title: 'link',
                        i18n: '链接',
                        index: 'link'
                    },
                    {
                        title: 'slug',
                        index: 'slug'
                    },
                    {
                        title: 'order',
                        i18n: '排序',
                        index: 'order'
                    }
                ]
            });
            exports_1("formSets", formSets = {
                query: {
                    properties: {
                        name: {
                            type: 'string',
                            title: '名称',
                            maxLength: 20,
                            ui: {
                                widget: 'autocomplete',
                                debounceTime: 100,
                                placeholder: '请输入菜单名称',
                                asyncData: function (input) { return rxjs_1.of(input ? [input, input + input, input + input + input] : []); }
                            }
                        }
                    }
                },
                default: {
                    properties: {
                        email: {
                            type: 'string',
                            title: '',
                            format: 'email',
                            maxLength: 20
                        },
                        name: {
                            type: 'string',
                            title: '姓名',
                            minLength: 3
                        }
                    }
                }
            });
            exports_1("default", {
                columnSets: columnSets,
                formSets: formSets
            });
        }
    };
});
//# sourceMappingURL=menu.appearance.js.map