import Vue from "vue"
import Router from "vue-router"
import store from "@/store"
import Home from "@/view/ChannelList.vue"
import MoviesComp from "@/view/MovieList.vue"
import NotFound from "@/view/NotFound.vue"
import MovieSingle from "@/view/MovieSingle"
import Login from "@/view/LoginForm.vue"
Vue.use(Router)

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/movie",
        component: MoviesComp,
        name: "Movie"
    },
    {
        path: "/movie/:id",
        component: MovieSingle,
        name: "MovieSingle"
    },
    {
        path: "/login",
        component: Login,
        name: "Login"
    },
    {
        path: "*",
        component: NotFound,
        name: "404",
        redirect: "/404"
    },
    {
        path: "/404",
        component: NotFound,
    }

]

const router = new Router({
    routes: routes,
    mode: "history"
})


router.beforeEach((to, from, next) => {
    let isAuth = store.getters['auth/isAuth']
    if (to.name == 'Login' && isAuth) {
        return next("/")
    }
    if(to.name !== 'Login' && !isAuth){
        return next('/login')
    }
    return next()
})

export default router