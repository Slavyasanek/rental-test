import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <div>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/catalog'}>Catalog</NavLink></li>
                    <li><NavLink to={'favorites'}>Favourite</NavLink></li>
                </ul>
            </div>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
};
