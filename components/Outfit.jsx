import { View, Text, Image } from 'react-native'
import React from 'react'

const Outfit = ({item}) => {
  return (
    <View className='rounded-[20px] h-[250px] w-[150px] bg-white m-3 items-center'>
      <View className='rounded-[20px] h-[200px] w-[150px] border-2 border-black items-center justify-center'>
        <Image source={item.uri} resizeMode='contain' className='h-48 w-48'/>
      </View>
      <Text className='font-serif text-[18px] p-1'>{item.title}</Text>
    </View>
  )
}

export default Outfit