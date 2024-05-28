import { Button, TextButton } from "./Style"

const ButtonDefault = ({text, height}) =>{
    return(
        <Button height={height}>
            <TextButton>{text}</TextButton>
        </Button>
    )
}