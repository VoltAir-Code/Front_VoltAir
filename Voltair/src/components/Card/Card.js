import { StyleSheet, Text, View } from "react-native"
import { CardImagens, CardInformation, ContainerCard, ImageCard } from "./Style"
import { useEffect, useState } from "react";
import ModalLoading from "../Modal/ModalLoading";
import ModalInformations from "../Modal/ModalInformations";
import api from "../../services/Service";
import { useDecodeToken } from "../../utils/Auth";

export const Card = ({ navigation, autonomia, capacidade, progressValue, setProgressValue }) => {

    const [modalLoadingVisible, setModalLoadingVisible] = useState(false);
    const [modalInformationsVisible, setModalInformationsVisible] = useState(false);    

    return (
        <ContainerCard>
            <CardImagens onPress={() => setModalLoadingVisible(true)} >
                <ImageCard source={require("../../../assets/Imagem-home-01.png")} />
                <CardInformation>
                    <Text style={styles.textCard}>Carregamento</Text>
                </CardInformation>
            </CardImagens>

            <CardImagens onPress={() => setModalInformationsVisible(true)}>
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
                Percentage={progressValue}
                buttonTextLoading={"Carregar Bateria"}
                buttonText={"Confirmar"}
                setProgressValue={setProgressValue}
            />

            <ModalInformations
                visible={modalInformationsVisible}
                navigation={navigation}
                onClose={() => setModalInformationsVisible(false)}
                setModalVisible={setModalInformationsVisible}
                information1={"Ciclo de vida:"}
                answer1={"98% de capacidade restante"}
                information2={"Degradação:"}
                answer2={`Capacidade: ${capacidade} kWh`}
                answer21={'Eficiência: 0,15 kWh/km'}
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