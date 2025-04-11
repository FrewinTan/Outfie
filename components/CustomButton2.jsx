import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className={`items-center justify-center bg-white w-[100px] rounded-[24px] h-12 border-black border-2`}>
        <Text className='font-serif text-xl'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton