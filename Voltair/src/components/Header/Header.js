import { ContainerBack, TextCar, TextName } from "./Style";
export const Header = ({nome, marca, modelo}) => {
  return (
    <ContainerBack>
      <TextName>Olá, {nome}</TextName>
      <TextCar>{marca} {modelo}</TextCar>
    </ContainerBack>
  );
};
