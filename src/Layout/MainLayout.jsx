import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";


const MainLayout = () => {


    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default MainLayout;