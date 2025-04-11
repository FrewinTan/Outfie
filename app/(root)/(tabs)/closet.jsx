import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Closet from '../../../components/Closet'
import { icons, pants, shirts, shoes } from '../../../assets/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const closet = () => {

  return (
    <SafeAreaView className='bg-[#54AEFF33]'>
      <ScrollView className='w-full h-full'>

        

        <View className='flex-row w-full justify-center'>
          <View className='items-center'> 
            <Image source={require('../../../assets/icons/outfie_logo.png')} className='w-24 h-24' resizeMode='contain'/>        
            <Text className='text-3xl font-bold text-[#54AEFF]'>Outfie Closet</Text>
          </View>

          <View className='right-0 absolute'>
            <TouchableOpacity className='p-1' onPress={() => router.push('/closet')}>
              <Image source={icons.add} className='h-12 w-12'/>
            </TouchableOpacity> 
          </View>
          
        </View> 
            

        <Text className='text-xl font-medium m-3'>Top</Text>
        <View className='items-center'>
          <View className='bg-white rounded-[20px] w-96 h-36 justify-center p-3'>
            <FlatList 
              data={shirts}
              renderItem={({item}) => {
                return(
                  <Closet item={item}/>
                )
              }}
              horizontal
              />
          </View>
        </View>
        

        <Text className='text-xl text-left font-medium m-3'>Bottom</Text>
        <View className='items-center'>
          <View className='bg-white rounded-[20px] w-96 h-36 justify-center p-3'>
            <FlatList 
            data={pants} 
            renderItem={({item}) => {
              return(
                <Closet item={item}/>
              )
            }}
            horizontal
            />
          </View>
        </View>

        <Text className='text-xl text-left font-medium m-3'>Bottom</Text>
        <View className='items-center'>
          <View className='bg-white rounded-[20px] w-96 h-36 justify-center p-3'>
            <FlatList 
            data={shoes} 
            renderItem={({item}) => {
              return(
                <Closet item={item}/>
              )
            }}
            horizontal
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default closet