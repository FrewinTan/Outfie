import { View, Text, Image, Touchable, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Myself from '../../../components/Myself'

const data1 = [
  {title: 'My current Plan'},
  {title: 'Payment Settings'},
  {title: 'Region and Langauge'}
]

const data2 = [
  {title: 'Notification Settings'},
  {title: 'Privacy Settings'}
] 

const data3 = [
  {title: 'Fashion Style Preference'},
  {title: 'Customise my AI'}
]

const data4 = [
  {title: 'Terms and Conditions'},
  {title: 'Contact Us'}
]


const myself = () => {
  return (
    <SafeAreaView className='items-center bg-[#54AEFF33]'> 
      <ScrollView className='w-full h-full '>
      <View className='items-center'>
        <View className='rounded-[20px] bg-white h-36 w-[340px]'> 
          <View className='flex-row align-middle items-center h-12 w-[340px] '>
            <Image source={require('../../../assets/images/noman_target-persona.jpg')} resizeMode='stretch' className='h-8 w-8 rounded-full ml-5'/>
            <Text className='font-serif text-lg ml-1'>Norman Khan</Text>
            <TouchableOpacity className='items-center w-[340px]'>
              <Text className='text-gray-300 font-serif text-lg text-right mr-10'>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <View className='h-[2px] bg-gray-300'></View>

          <View className='flex-row items-center justify-between p-5'>
            <View>
              <Text className='font-serif text-lg'>Height</Text>
              <Text className='font-serif text-lg font-bold'>180 cm</Text>
            </View>

            <View>
              <Text className='font-serif text-lg'>Weight</Text>
              <Text className='font-serif text-lg'>70 kg</Text>
            </View>

            <View>
              <Text className='font-serif text-lg'>Shoe size</Text>
              <Text className='font-serif text-lg'>9.5 (US)</Text>
            </View>   
          </View>
        </View>

        <View className='rounded-[20px] bg-[#54AEFF] h-13 w-[340px] items-center justify-center border-2 mt-7'>
          <Text className='text-2xl font-serif m-3'>Scan to Upload Body Details</Text>
        </View>

        <View className='rounded-[20px] bg-white w-[340px] min-h-[525px] mt-7'>
          <View className='ml-3 mt-3'>
            <Text  className='text-2xl font-medium'>Settings</Text>
            <Text  className='text-lg font-medium'>Account and Safety</Text>
            <FlatList data={data1}
            renderItem={({item}) => {
              return(
                <Myself item={item}/>
              )
            }}
            scrollEnabled={false}
            />
          </View>

          <View className='h-[2px] bg-gray-300 my-2'></View>

          <View className='ml-3'>
            <Text  className='text-2xl font-medium'>Common Settings</Text>
            <FlatList data={data2}
            renderItem={({item}) => {
              return(
                <Myself item={item}/>
              )
            }}
            scrollEnabled={false}
            />
          </View>

          <View className='h-[2px] bg-gray-300 my-4'></View>

          <View className='ml-3'>
            <Text  className='text-2xl font-medium'>Common Settings</Text>
            <FlatList data={data3}
            renderItem={({item}) => {
              return(
                <Myself item={item}/>
              )
            }}
            scrollEnabled={false}
            />
          </View>

          <View className='h-[2px] bg-gray-300 my-4'></View>

          <View className='ml-3'>
            <Text  className='text-2xl font-medium'>Common Settings</Text>
            <FlatList data={data4}
            renderItem={({item}) => {
              return(
                <Myself item={item}/>
              )
            }}
            scrollEnabled={false}
            />
          </View>
          
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  )
}

export default myself