
const routes = [
  
  {
    path: '/admin',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/015.admin.vue') }
    ]
  },

]

export default routes
