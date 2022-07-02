import { createRouter, createWebHistory } from 'vue-router'


function propsParser(route) {
  return Object.entries(route.params).reduce((props, [key, value]) =>
     // required to ignore params auto fitted by router,
     // which were not provided by developer passing params: {}
     value  ? (props[key] = JSON.parse(value), props) : props 
  , {})
}


const routes = [
  {
    path: '/',
    component: () => import('@/components/view/InitialLayout.vue'),
    children: [
      {
        path: '/Main', alias: '',
        name: 'Main',
        props: propsParser,
        component: () => import('@/components/view/Main.vue'),
        children: [
          
        ],
      },
    ],
  },
  
  // NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/view/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {top: 0}
  },
})



export { router }

