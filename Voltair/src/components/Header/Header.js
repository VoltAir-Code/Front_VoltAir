import { ContainerBack, TextCar, TextName } from "./Style";
export const Header = ({nome, modelo}) => {
  return (
    <ContainerBack>
      <TextName>Olá, {nome}</TextName>
      <TextCar>{modelo}</TextCar>
    </ContainerBack>
  );
};
