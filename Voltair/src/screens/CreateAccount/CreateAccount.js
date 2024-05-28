import { ButtonDefault } from "../../components/Button/Button"
import { ContainerBlack, ContainerWhite } from "../../components/Container/Style"

export const CreateAccount = () => {
    return (
        <>
            <ContainerBlack>
                <ContainerWhite height={"91.41%"}>
                    <ButtonDefault
                        text={"Cadastrar"}
                        height={"58px"}
                    />
                </ContainerWhite>
            </ContainerBlack>
        </>
    )
}