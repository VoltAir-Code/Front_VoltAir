import { StyleSheet, Text } from "react-native"
import { CardImagens, CardInformation, ContainerCard, ImageCard} from "./Style"
import { useState } from "react";
import ModalLoading from "../Modal/ModalLoading";
import ModalInformations from "../Modal/ModalInformations";

export const Card = ({navigation}) => {

    const [modalLoadingVisible, setModalLoadingVisible] = useState(false);    
    const [modalInformationsVisible, setModalInformationsVisible] = useState(false);    
    

return(
    <ContainerCard>
        <CardImagens onPress={() => setModalLoadingVisible(true)} >
        <ImageCard source={require("../../../assets/Imagem-home-01.png")}/>
        <CardInformation>
            <Text style={styles.textCard}>Carregamento</Text>
        </CardInformation>
        </CardImagens>
        
        <CardImagens  onPress={() => setModalInformationsVisible(true)}>
        <ImageCard source={require("../../../assets/Imagem-home-02.png")}/>
        <CardInformation>
        <Text style={styles.textCard}>Informações Da Bateria </Text>
        </CardInformation>
        </CardImagens>
        
        
        <ModalLoading
                visible={modalLoadingVisible}
                navigation={navigation}
                onClose={() => setModalLoadingVisible(false)}
                setModalVisible={setModalLoadingVisible}
                title={"Carregamento"}
                subTitle={"Sua Bateria Está Em:"}
                buttonTextLoading={"Estou carregando"}
                buttonText={"Confirmar"}
            />
            <ModalInformations
                visible={modalInformationsVisible}
                navigation={navigation}
                onClose={() => setModalInformationsVisible(false)}
                setModalVisible={setModalInformationsVisible}
                title={"Informações Da Bateria"}
                 information1={"Ciclo de vida "}
                 answer1={"98% de capacidade restante"}
                 information2={"Degradação"}
                 answer2={'Capacidade da Bateria: 75 kWh Eficiência do Veículo: 0,15 kWh/km'}
                 information3={'Autonomia'}
                 answer3={'500km'}
                 buttonTextLoading={"teste"}
                buttonText={"Confirmar"}
            />

    </ContainerCard>

    
)
}

const styles = StyleSheet.create({
    textCard:{
       fontSize:16,
       color:'#313131',
       fontFamily: 'Poppins_400Regular',
       textAlign: 'center',
       alignSelf: 'center'
    }
    })