import { ReactNode } from "react"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


const Layout = ({children}:{children:ReactNode})=>{
    return(
        <MyDiv>
            <Header />
            {children}
            <Footer />
        </MyDiv>
    )
}
export default Layout

const MyDiv = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`