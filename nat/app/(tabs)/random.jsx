import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'


const random = () => {
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/')
        const apiData = await res.json();
        setData(apiData.results[0])  
      } catch (error) {
        console.error(error)
      }      
    };
    fetchApiData();
  },[fetchTrigger])

  return (
    <View className='flex-1 gap-10 bg-purple-700 flex-col justify-center items-center'> 
      {data ? (
        <>
          <Image src={data?.picture?.large} className='w-40 h-40 rounded-full' />
          <View>
          <Text>{data.gender}</Text>
          <Pressable onPress={() => setFetchTrigger(() => fetchTrigger + 1)}>
            <Text className='text-white font-bold text-3xl'>Get User</Text>
          </Pressable>
          </View>
        </>
        ) : <Text className='text-white font-bold text-5xl'>Loading....</Text>}
    </View>
  )
}

export default random