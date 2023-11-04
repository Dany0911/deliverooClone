import { View, Text, Image } from 'react-native'
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
        <View className='bg-[#00CCBB] flex-1 justify-center items-center'>
            <Text className='text-center font-extrabold'>Preparing Your order!
            <Progress.Circle className='items-center' 
            size={60} indeterminate={true} color='blue' />
            </Text>
            <Image
                    source={{
                        uri: "https//links.papareact.com/fls",
                    }}
                        className='h-20 w-20'
                    />
        </View>
    )
}

export default PreparingOrderScreen