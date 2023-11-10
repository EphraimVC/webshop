import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
