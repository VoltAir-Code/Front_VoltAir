import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { ContainerHome } from "./Style"

export const Home = ()=>{
    return(
        <ContainerHome>
            <Header/>
            <Card/>
        </ContainerHome>
    )
}