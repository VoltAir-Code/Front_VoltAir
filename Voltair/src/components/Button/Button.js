import { Button, TextButton } from "./Style"

export const ButtonDefault = ({text, height, margin, onPress}) =>{
    return(
        <Button height={height} margin={margin} onPress={onPress}>
            <TextButton>{text}</TextButton>
        </Button>
    )
}