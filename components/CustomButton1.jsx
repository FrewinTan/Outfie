import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity className={`items-center justify-center bg-[#54AEFF] w-[200px] rounded-[24px] h-12 border-black border-2`} onPress={onPress}>
        <Text className='font-serif text-xl'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton