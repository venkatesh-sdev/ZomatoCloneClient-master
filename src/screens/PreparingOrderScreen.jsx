import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
const PreparingOrderScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliverScreen")
        }, 2000);
    }, [])
    return (
        <SafeAreaView className="flex-1 bg-white justify-center items-center">
            <Animatable.Image animation={"slideInUp"} source={require('../../assets/animate.gif')} className="w-56 h-56" />
            <Animatable.Text
                animation={"slideInUp"}
                className="text-2xl font-bold text-center">Your Order In Progress</Animatable.Text>
            <Progress.Circle borderWidth={5} style={{marginTop:20}} size={40} indeterminate={true} color='black' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen