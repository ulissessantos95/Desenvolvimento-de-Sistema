import { Outlet } from "react-router";
import Header from "../Header/Header";


export function Main() {
    return(
        <div className="flex min-h-screen flex-col">
            <Header/>
            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )
}