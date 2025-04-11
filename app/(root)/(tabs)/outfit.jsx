import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { imageData } from '../../../assets/constants'
import Outfit from '../../../components/Outfit'
import { StyleSheet } from 'react-native'

const outfit = () => {

  return (
    <SafeAreaView className='w-full h-full bg-[#54AEFF33]'>

      <ScrollView>
      <View className='items-center'> 
        <View className='flex-row bg-[#54AEFF33] h-[144px] w-11/12 rounded-[10px] items-center justify-center' >
          <Image source={require('../../../assets/icons/save.png')} className='' />
          <View className='mr-2'>
            <Text className='font-semibold text-[32px]'>21 April 2025</Text>
            <Text className='font-medium text-[16px]'>Click to save your outfit-for-today!</Text>
          </View>
        </View>
        <Text className='text-xl font-medium text-left m-3 w-full ml-16'>Saved Outfits</Text>
        <View className='w-11/12 h-full justify-center items-center bg-gray-100 rounded-[20px] p-3'>
          <FlatList 
            data={imageData}
            renderItem={({item}) => {
              return (
                <Outfit item={item} />
              )        
            }}
            numColumns={2}
            ItemSeparatorComponent={() => <View className='p-3'></View>}
            scrollEnabled={false}
            />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default outfit
