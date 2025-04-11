import { View, Text, Image, FlatList} from 'react-native'
import React, { useState } from 'react'
import CustomButton1 from '../../../components/CustomButton1'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton2 from '../../../components/CustomButton2'
import { outfitImages } from '../../../assets/constants'
import { router } from 'expo-router'

const imageData = [
  { id: '1', uri: outfitImages.one, title: 'Image 1' },
  { id: '2', uri: outfitImages.two, title: 'Image 2' },
  { id: '3', uri: outfitImages.three, title: 'Image 3' },
];

const outfit = () => {

  const [imageIndex, setImageIndex] = useState(0)

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  return (
    <SafeAreaView className='w-full h-full bg-[#54AEFF33] '>
      <View className='w-full h-full items-center justify-center'>
        <Image source={imageData[imageIndex].uri} resizeMode='contain' className='w-144 h-144' />
      </View>
      <View className='flex-row bottom-5 absolute justify-between'>
        <View className='ml-6'>
          <CustomButton1 title='AI Outfit of the Day' onPress={changeImage}/>
        </View>
        <View className='ml-10'>
           <CustomButton2 title='Match' onPress={() => router.push('/closet')}/>
        </View>
       
      </View>
    </SafeAreaView>
  )
}

export default outfit