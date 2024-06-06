import { ActivityIndicator, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react';
import { SelectList } from "react-native-dropdown-select-list";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const InputSelect = ({ item }) => {


    return (
        <SelectList
            data={item}
            boxStyles={{ width: "82%", height: 60, alignItems: "center", marginTop: 5, borderWidth: 2, borderColor:'#F2732E'}}
            fontFamily="Poppins_400Regular"
            placeholder="Selecione uma marca"
            maxHeight={95}
            dropdownTextStyles={{ fontSize: 15, fontSize: 15, color: '#FFF'  }}
            dropdownItemStyles={{marginHorizontal: 5, marginBottom: 3}}
            dropdownStyles={{borderWidth: 1.5, borderColor:'#F2732E'}}
            arrowicon={<MaterialIcons name="arrow-circle-down" size={23} color="#F2732E" />}

            searchicon={<MaterialIcons name="search" size={20} color='#FFF' />} 
            closeicon={<MaterialIcons name="close" size={20} color='#FFF' />}
            searchPlaceholder=''
            searchInputStyles={{ color: '#FFF', placeholderTextColor: '#FFF' }}
            
            //search={false} 

            inputStyles={{ fontSize: 15, color: '#F2732E', fontWeight: 'bold'}}
            placeholderStyles={{ fontSize: 15, color: '#FFF' }}
            notFoundText='Nenhum dado encontrado'
            />

    )
}

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        width: '230%',
        height: 53,
        borderColor: '#F2732E',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        padding: 5,
        alignSelf: 'center',

        marginBottom: 16,

    },
    icon: {
        position: 'absolute',
        left: 45,
        top: 13,
    },
    placeholder: {
        color: "#FFF"
    }
});