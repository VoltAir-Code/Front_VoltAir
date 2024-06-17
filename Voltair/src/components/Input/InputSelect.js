import { ActivityIndicator, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react';
import { SelectList } from "react-native-dropdown-select-list";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const InputSelect = ({ item, save, setSelected, placeholder }) => {


    return (
        <SelectList
            data={item}
            boxStyles={{ width: "81.6%", height: 60, alignItems: "center", marginTop: 5, borderWidth: 1, borderRadius: 5, borderColor: '#F2732E' }}
            fontFamily="Poppins_400Regular"
            placeholder= {placeholder}
            maxHeight={95}
            dropdownTextStyles={{ fontSize: 15, color: '#FFF' }}
            dropdownItemStyles={{ marginHorizontal: 5, marginBottom: 3 }}
            dropdownStyles={{ borderWidth: 1, borderColor: '#F2732E' }}
            arrowicon={<MaterialIcons name="arrow-circle-down" size={23} color="#F2732E" />}
            inputStyles={{ fontSize: 15, color: '#F2732E', fontWeight: 'bold' }}
            placeholderStyles={{ fontSize: 15, color: '#FFF' }}
            notFoundText='Nenhum dado encontrado'
            searchPlaceholder='Pesquisar'
            searchicon={<MaterialIcons name="search" size={20} color="white" />}
            closeicon={<MaterialIcons name="close" size={20} color="white" />}
            searchPlaceholderTextColor={'white'}
            setSelected={setSelected}
            save={save}
      
        />

    )
}

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        width: '230%',
        height: 53,
        borderColor: '#F2732E',
        borderWidth: 1,
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