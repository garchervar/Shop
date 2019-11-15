import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import axios from 'axios'
import ListCar from './components/ListCar.vue'
import Shop from './Shop.vue'
import Address from './Address.vue'
import Login from "./Login.vue"
Vue.use(Router)
Vue.use(axios)
const router = new Router({
 mode:"history",
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      meta:{
        requiresAuth:true
      },
      component: Home,
    },
{
  path:'/shop',
  name:"shop",

  component:Shop,

},
{
  path:'/list',
  name:'listcar',
  component:ListCar
},{
  path:'/address',
  name:"address",
  component:Address
},
{
  path:'/login',
  name:'login',
  component: Login,
}
// {
//   path:'/store',
//   name:"shopstore",
//   component: ShopStore,

// },
  ]
})
// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     try {
//       const token = localStorage.getItem('ast-token')
//       if (token === null || token === undefined) {
      
//         window.location.href = "/login";
//       }
//       next()
//     } catch (e) {
//       console.log(e)
//       next({
//         path: '/shop',
//       })
//     }
//   } else {
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token=localStorage.getItem("as_token");
    if (token===null||token===undefined) {
      // window.location.href = "/login";
      next({
        name: 'login',
        query: {
          'redirectTo': to.path
        }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router