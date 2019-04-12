"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
exports.appearance = {
    columnSets: {
        default: [
            {
                title: 'name',
                i18n: '日志名称',
                index: ['name']
            },
            {
                title: 'operator',
                i18n: '操作人',
                index: ['operator']
            },
            {
                title: 'operation',
                i18n: '操作',
                index: ['operation']
            },
            {
                title: 'operatorIp',
                i18n: '操作IP',
                index: ['operatorIp']
            },
            {
                title: 'createAt',
                i18n: '日期',
                type: 'date',
                index: ['createdAt']
            },
            {
                title: 'comment',
                i18n: '备注',
                index: ['comment']
            },
        ]
    },
    formSets: {
        query: {
            properties: {
                keyword: {
                    type: 'string',
                    title: '日志关键词',
                    maxLength: 20,
                    ui: {
                        widget: 'autocomplete',
                        debounceTime: 100,
                        placeholder: '请输入日志关键词'
                    }
                },
                dateRange: {
                    type: 'string',
                    title: '日期范围',
                    ui: {
                        widget: appearance_1.WidgetTypes.date,
                        mode: 'range'
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=log.appearance.js.map