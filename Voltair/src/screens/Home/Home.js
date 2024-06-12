import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { ContainerHome } from "../../components/Container/Style";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Token, useDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";

export const Home = () => {
  const [user, setUser] = useState({});
  const [userCar, setUserCar] = useState({});
  const [capacidadeAtual, setCapacidadeAtual] = useState();
  const [duracao, setDuracao] = useState();

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
      setCapacidadeAtual(parseInt(new Date(car.data.capacidadeAtual).toLocaleTimeString('pt-br', { hour: "2-digit"})));
      setDuracao(parseInt(new Date(car.data.durBateria).getHours()));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    profileLoad();
  }, []);

  useEffect(() => {
    userCarLoad();
   console.log(capacidadeAtual);
   console.log(duracao);
  }, [user]);

  return (
    <ContainerHome>
      <Header 
      nome={user.nome}
      marca={userCar?.idMarcaNavigation?.nomeMarca}
      modelo={userCar.modelo}
      />
      <Card
      autonomia={userCar.autonomia}
      capacidade={userCar.capacidade}
      porcetagem={(capacidadeAtual/duracao) * 100}
       />
      {/* <Footer/> */}
    </ContainerHome>
  );
};
