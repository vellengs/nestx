export default [{
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [{
        path: '/user',
        redirect: '/user/login'
      },
      {
        path: '/user/login',
        name: 'login',
        component: './User/Login'
      },
      {
        path: '/user/register',
        name: 'register',
        component: './User/Register'
      },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [{
        path: '/',
        redirect: '/dashboard/analysis',
        // authority: ['admin', 'user']
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [{
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [{
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          {
            path: '/result/fail',
            name: 'fail',
            component: './Result/Error'
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [{
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
