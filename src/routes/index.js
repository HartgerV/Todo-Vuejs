/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [

  {
    path: '/todo',
    name: 'todo.index',
    component: () => import('@/pages/todo/index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/login/index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/register/index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/todo',
  },

  {
    path: '/*',
    redirect: '/todo',
  },
];
