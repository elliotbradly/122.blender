
const routes = [
  
  {
    path: '/actor-new',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/014.actor-new.vue') }
    ]
  },

  {
    path: '/actor-list',
    component: () => import('layouts/FictiqLayout.vue'),
    children: [
      { path: '', component: () => import('pages/013.actor-list.vue') }
    ]
  }

]

export default routes
