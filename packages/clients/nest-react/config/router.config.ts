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
    authority: ["5b1e8b2559989d1ffc06ac7d",
      "5b1e8b3e59989d1ffc06ac7e"]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [{
      path: '/dashboard/analysis',
      name: 'analysis',
      component: './Dashboard/Analysis',
    }],
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
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account/center',
        name: 'center',
        component: './Account/Center/Center',
        routes: [
          {
            path: '/account/center',
            redirect: '/account/center/articles',
          },
          {
            path: '/account/center/articles',
            component: './Account/Center/Articles',
          },
          {
            path: '/account/center/applications',
            component: './Account/Center/Applications',
          },
          {
            path: '/account/center/projects',
            component: './Account/Center/Projects',
          },
        ],
      },
      {
        path: '/account/settings',
        name: 'settings',
        component: './Account/Settings/Info',
        routes: [
          {
            path: '/account/settings',
            redirect: '/account/settings/base',
          },
          {
            path: '/account/settings/base',
            component: './Account/Settings/BaseView',
          },
          {
            path: '/account/settings/security',
            component: './Account/Settings/SecurityView',
          },
          {
            path: '/account/settings/binding',
            component: './Account/Settings/BindingView',
          },
          {
            path: '/account/settings/notification',
            component: './Account/Settings/NotificationView',
          },
        ],
      },
    ],
  },

  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      // profile
      {
        path: '/profile/basic',
        name: 'basic',
        component: './Profile/BasicProfile',
      },
      {
        path: '/profile/basic/:id',
        name: 'basic',
        hideInMenu: true,
        component: './Profile/BasicProfile',
      },
      {
        path: '/profile/advanced',
        name: 'advanced',
        authority: ['admin'],
        component: './Profile/AdvancedProfile',
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
}

];
