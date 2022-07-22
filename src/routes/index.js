import Vue from "vue"
import Router from "vue-router"

import Home from "@/components/ChannelList.vue"
import MoviesComp from "@/components/MovieList.vue"
import NotFound from "@/components/NotFound.vue"
import MovieSingle from "@/components/MovieSingle"
import Login from "@/components/LoginForm.vue"
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
        path : "/login",
        component : Login,
        name : "Login"
    },
    {
        path: "*",
        component: NotFound,
        name: "404",
        redirect : "/404"
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

export default router