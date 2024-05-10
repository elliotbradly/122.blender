
const routes = [
  
  {
    path: '/sower',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/017.sower.vue') }
    ]
  },

]

export default routes
