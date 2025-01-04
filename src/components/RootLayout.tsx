import { Outlet } from "react-router-dom"
import { Footer, Nav } from "../hooks/imports"

function RootLayout() {
    return (
        <main className="flex flex-col h-screen overflow-y-auto">
            <Nav/>
            <Outlet />
            <Footer/>
        </main>
    )
}

export default RootLayout