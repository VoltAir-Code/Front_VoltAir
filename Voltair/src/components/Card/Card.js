import { Alert, StyleSheet, Text, View } from "react-native"
import { CardImagens, CardInformation, ContainerCard, ImageCard } from "./Style"
import { useEffect, useState } from "react";
import ModalLoading from "../Modal/ModalLoading";
import ModalInformations from "../Modal/ModalInformations";
import api from "../../services/Service";
import { useDecodeToken } from "../../utils/Auth";

export const Card = ({ navigation, autonomia, capacidade,data, progressValue, setProgressValue }) => {

    const [modalLoadingVisible, setModalLoadingVisible] = useState(false);
    const [modalInformationsVisible, setModalInformationsVisible] = useState(false);    



const OpenModal = (modalType) => {
  
if(capacidade != null && capacidade != undefined)
    {
        if(modalType == 'loading')
            {
                setModalLoadingVisible(true)
            }else{
                setModalInformationsVisible(true)
            }
    }else{
        Alert.alert("Voltaire - Informação", "É necessário realizar o cadastro do carro!")
    }

}
    return (
        <ContainerCard>
            <CardImagens onPress={() => OpenModal('loading')} >
                <ImageCard source={require("../../../assets/Imagem-home-01.png")} />
                <CardInformation>
                    <Text style={styles.textCard}>Carregamento</Text>
                </CardInformation>
            </CardImagens>

            <CardImagens onPress={() => OpenModal('information')}>
                <ImageCard source={require("../../../assets/Imagem-home-02.png")} />
                <CardInformation>
                    <Text style={styles.textCard}>Bateria</Text>
                </CardInformation>
            </CardImagens>


            <ModalLoading
                visible={modalLoadingVisible}
                navigation={navigation}
                onClose={() => setModalLoadingVisible(false)}
                setModalVisible={setModalLoadingVisible}
                title={"Carga da bateria:"}
          
                buttonTextLoading={"Carregar Bateria"}
                buttonText={"Confirmar"}
           
            />

            <ModalInformations
                visible={modalInformationsVisible}
                navigation={navigation}
                onClose={() => setModalInformationsVisible(false)}
                setModalVisible={setModalInformationsVisible}
                information1={"Ciclo de vida:"}
                answer1={"100% de capacidade restante"}
                information2={"Degradação:"}
                answer2={`Capacidade: ${capacidade} kWh`}
                answer21={`Eficiência: ${(capacidade/autonomia).toFixed(2)} kWh/km`}
                information3={'Autonomia:'}
                answer3={`${autonomia} Km`}
                buttonTextLoading={"teste"}
                buttonText={"Confirmar"}
            />

        </ContainerCard>


    )
}

const styles = StyleSheet.create({
    textCard: {
        fontSize: 16,
        color: '#313131',
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        alignSelf: 'center'
    }
})