import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Closet = ({item}) => {
  return (
    <TouchableOpacity>
        <View className='border-2 w-24 h-24 items-center justify-center rounded-[20px] m-3'>
            <Image source={item.uri} className='w-20 h-20'/>
        </View>
    </TouchableOpacity>
   
  )
}

export default Closet