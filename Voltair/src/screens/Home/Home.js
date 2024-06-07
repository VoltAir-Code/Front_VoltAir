import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { ContainerHome } from "../../components/Container/Style";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";

export const Home = () => {
  const [user, setUser] = useState({});
  const [userCar, setUserCar] = useState({});

  async function profileLoad() {
    const token = await useDecodeToken();
    try {
      const response = await api.get(`Usuario/BuscarPorId?id=${token.id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function userCarLoad() {
    try {
      const car = await api.get(`Carro/BuscarPorId?idCarro=${user.idCarro}`);
      setUserCar(car.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    profileLoad();
    userCarLoad();
    console.log(userCar);
  }, []);
  return (
    <ContainerHome>
      <Header 
      nome={user.nome}
      modelo={userCar.modelo}
      />
      <Card />
      {/* <Footer/> */}
    </ContainerHome>
  );
};
