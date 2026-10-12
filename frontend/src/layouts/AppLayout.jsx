import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./layout.css";

function AppLayout() {

    return (

        <div className="app-layout">

            <Sidebar />

            <div className="main-section">

                <Header />

                <main className="page-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}

export default AppLayout;