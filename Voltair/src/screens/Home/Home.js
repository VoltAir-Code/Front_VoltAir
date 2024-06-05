import { Card } from "../../components/Card/Card"
import { ContainerHome } from "../../components/Container/Style"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const Home = ()=>{
    return(
        <ContainerHome>
            <Header/>
            <Card/>
            {/* <Footer/> */}
        </ContainerHome>
    )
}