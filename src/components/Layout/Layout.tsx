import { Outlet } from "react-router"
import {Header,Footer} from '../index'


export function Layout () {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

