import TheHeader from "../components/common/TheHeader";
import TheFooter from "../components/common/TheFooter";

const Layout =({children}) =>{
    return(
        <>
            <TheHeader />
            <main>{children}</main>
            <TheFooter />
        </>
    )
}

export default Layout;