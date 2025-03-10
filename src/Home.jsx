
import { Outlet } from "react-router-dom";
import "./Home.css"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";

export function Home() {
    return (
        <div className="body">
            <Navbar/>
            <Sidebar/>
            <Outlet id="content"/>
        </div>
    );
}