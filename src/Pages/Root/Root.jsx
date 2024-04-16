import { Outlet, } from "react-router-dom";
import Navbar from "../Navfooter/Navbar/Navbar";
import Footer from "../Navfooter/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className=" min-h-screen container mx-auto font-display">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    )
}

export default Root