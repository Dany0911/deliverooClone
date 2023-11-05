import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000)
    }, []);

    return (
        <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Image
                source={{
                    uri: "https://i1.wp.com/codemyui.com/wp-content/uploads/2018/02/fried-egg-loader.gif?fit=440%2C220&ssl=1",
                }}
                className='h-96 w-96'
            />

            <Text className='text-center font-extrabold text-lg'>Waiting for Restaurant to accept your order!
            </Text>
            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen