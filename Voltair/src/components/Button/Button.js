import { Button, TextButton } from "./Style"

export const ButtonDefault = ({text, height}) =>{
    return(
        <Button height={height}>
            <TextButton>{text}</TextButton>
        </Button>
    )
}