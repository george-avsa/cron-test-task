import Header from "Widgets/Header/ui/Header";
// import Menu from "Widgets/Menu/ui/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="app">
            <Header></Header>
            {/* <Menu></Menu> */}
            <Outlet />
        </div>
    );
}

export default Layout;