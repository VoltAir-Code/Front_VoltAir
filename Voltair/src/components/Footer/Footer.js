import { ButtonHome,ButtonMaps,ButtonProfile,  ImageCar, ImageCircle, ImageMap, ImageRay,  } from "../Button/Button"
import { ContainerBlackHome } from "../Container/Style"
import { StyleSheet, Text } from "react-native"



export const Footer = ()=>{
return(
   <ContainerBlackHome height={"15%"} radius={'10px 10px 0px 0px'} gap={'80px'}>
      <ButtonHome>
      <ImageRay source={require("../../../assets/Logo/LogoRay.png")}/>
      <Text style={styles.textFooter}>Home</Text>
      </ButtonHome>

      <ButtonMaps>
      <ImageCircle source={require("../../../assets/Img/MapPoint.png")}/>
      <Text style={styles.textFooter}>Mapa</Text>
      </ButtonMaps>

      <ButtonProfile>
      <ImageCar source={require("../../../assets/Img/Volante.png")}/>
      <Text style={styles.textFooter}>Meu carro</Text>
      </ButtonProfile>
      
   </ContainerBlackHome>
   
)
}

const styles = StyleSheet.create({
textFooter:{
   fontSize:16,
   color: 'white',
   fontFamily: 'Poppins_400Regular',
   textAlign: 'center',
   alignSelf: 'center',
   marginTop: 20,
   height:40,
   width:100,
   marginRight:'3%'
}
})