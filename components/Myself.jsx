import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../assets/constants'

const Myself = ({item}) => {
  return (
    <TouchableOpacity>
        <View className='flex-row align-middle items-center justify-between'>
        <Text className='text-lg font-medium'>{item.title}</Text>
        <Image source={icons.right} />    
        </View>
    </TouchableOpacity>
    
  )
}

export default Myself   