import React from 'react';
import Home from '../components/home/Home';
import View from '../components/shop/View';
import Itemdetail from '../components/detail/Itemdetail';
import Login from '../components/login/Login';
import Cart from '../components/cart/ListItem';
import Register from '../components/register/Register';
const routes=[
    {
        path:"/",
        exact:true,
        main:()=><Home />
    },
    {
        path:"/shop/:id",
        exact: false,
        main:({match})=><View match={match}/>
    },
    {
        path:"/view/:id",
        exact:true,
        main:({match})=><Itemdetail match={match}/>
    },
    {
        path:"/login",
        exact:false,
        main:()=><Login/>
    },
    {
        path:"/register",
        exact:false,
        main:()=><Register/>
    },
    {
        path:"/cart",
        exact:true,
        main:()=><Cart />
    },
]
export default routes;