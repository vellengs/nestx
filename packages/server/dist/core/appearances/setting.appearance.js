"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appearance_1 = require("../../common/types/appearance");
const profile = {
    title: '个人信息',
    properties: {
        avatar: {
            title: '头像',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.avatar,
                fileType: 'image/png,image/jpeg,image/gif,image/bmp',
                listType: 'picture-card',
                action: 'user/upload',
                limit: 1,
                name: 'file',
                grid: {
                    span: 24
                }
            },
        },
        avatar2: {
            title: '头像',
            type: appearance_1.SchemaTypes.string
        },
        name: {
            title: '昵称',
            type: appearance_1.SchemaTypes.string,
        },
        email: {
            title: '邮箱',
            type: appearance_1.SchemaTypes.string
        },
        mobile: {
            title: '手机',
            pattern: '^1[0-9]{10}$',
            type: appearance_1.SchemaTypes.string
        },
        siteUrl: {
            title: '网址',
            type: appearance_1.SchemaTypes.string,
            ui: {
                grid: {
                    span: 12
                }
            }
        },
        company: {
            title: '公司名称',
            type: appearance_1.SchemaTypes.string,
            ui: {
                grid: {
                    span: 12
                }
            }
        },
        address: {
            title: '地址',
            type: appearance_1.SchemaTypes.string,
            ui: {
                grid: {
                    span: 24
                }
            }
        },
    },
    required: ['name', 'email', 'mobile'],
    ui: {
        widget: appearance_1.WidgetTypes.tabs,
        spanLabelFixed: 100,
        grid: {
            span: 8
        },
        tabs: [{
                title: '基本信息',
                fields: [
                    'avatar',
                    'name',
                ]
            }, {
                title: '联系信息',
                fields: [
                    'email',
                    'mobile',
                    'siteUrl',
                    'company',
                    'address',
                ]
            }]
    }
};
const sysSetting = {
    title: '系统设置',
    properties: {
        name: {
            title: '系统名称',
            type: appearance_1.SchemaTypes.string
        },
        logo: {
            title: '系统标志',
            type: appearance_1.SchemaTypes.string,
            description: '尺寸大小 120x30',
            ui: {
                widget: appearance_1.WidgetTypes.avatar,
                fileType: 'image/png,image/jpeg,image/gif,image/bmp',
                listType: 'picture-card',
                action: 'user/upload',
                limit: 1,
                name: 'file',
                grid: {
                    span: 24
                }
            },
        },
        logoFull: {
            title: '系统完整标志',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.avatar,
                fileType: 'image/png,image/jpeg,image/gif,image/bmp',
                listType: 'picture-card',
                action: 'user/upload',
                limit: 1,
                name: 'file',
                grid: {
                    span: 24
                }
            },
        },
        logoFullColor: {
            title: '系统彩色标志',
            type: appearance_1.SchemaTypes.string,
            ui: {
                widget: appearance_1.WidgetTypes.avatar,
                fileType: 'image/png,image/jpeg,image/gif,image/bmp',
                listType: 'picture-card',
                action: 'user/upload',
                limit: 1,
                name: 'file',
                grid: {
                    span: 24
                }
            },
        },
    },
    ui: {
        spanLabelFixed: 100,
        grid: {
            span: 12
        }
    }
};
exports.appearance = {
    columnSets: {},
    formSets: {
        profile: profile,
        sysSetting: sysSetting
    }
};
//# sourceMappingURL=setting.appearance.js.map