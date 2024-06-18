import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { ContainerHome } from "../../components/Container/Style";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Token, useDecodeToken } from "../../utils/Auth";
import api from "../../services/Service";

export const Home = ({progressValue, setProgressValue}) => {
  const [user, setUser] = useState({});
  const [userCar, setUserCar] = useState({});
  const [capacidadeAtual, setCapacidadeAtual] = useState();
  const [duracao, setDuracao] = useState();
  const [loading, setLoading] = useState(false)
  
  
  async function userCarLoad() {
    try {
      const car = await api.get(`Carro/BuscarPorId?idUser=${user.idUsuario}`);
      console.log(car.data);
      setUserCar(car.data);
      setCapacidadeAtual(parseInt(new Date(car.data.bateriaAtual).toLocaleTimeString('pt-br', { hour: "2-digit"})));
      setDuracao(parseInt(new Date(car.data?.idModeloNavigation?.durBateria).getHours()));
    } catch (error) {
      console.log(error);
    }
  }
  
  async function profileLoad() {
    setLoading(true)
    const token = await useDecodeToken();
    try {
   
      const response = await api.get(`Usuario/BuscarPorId?id=${token.id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    profileLoad();
  }, []);

  useEffect(() => {
    userCarLoad();
  }, [user]);

  return (
    <ContainerHome>
      <Header
        nome={user.nome}
        marca={userCar?.idModeloNavigation?.idMarcaNavigation?.nomeMarca}
        modelo={userCar?.idModeloNavigation?.nomeModelo}
      />
      <Card
        autonomia={userCar?.idModeloNavigation?.autonomia}
        capacidade={userCar?.idModeloNavigation?.capacidade}
        progressValue={progressValue}
        setProgressValue={setProgressValue}
      />
      {/* <Footer/> */}
    </ContainerHome>
  );
};
