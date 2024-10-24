import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'


const random = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://randomuser.me/api/')
        const apiData = await res.json();
        setData(apiData.results[0])  
      } catch (error) {
        console.error(error)
      } finally{
        setLoading(false);
      }     
    };
    fetchApiData();
  },[fetchTrigger])

  return (
    <View className={`flex-1 gap-10 ${data?.gender === 'male' ? 'bg-purple-700' :  'bg-pink-500'} flex-col justify-center items-center px-5 pt-10`}> 
      {loading ? <Text className='text-white font-bold text-5xl'>Loading....</Text> : (
        <>
          <Image src={data?.picture?.large} className='block w-40 h-40 rounded-full' />
          <View className='flex-1 rounded-xl w-full bg-orange-300'>
          <Text className='text-purple-950 p-3'>{data?.gender}</Text>
          </View>
          <Pressable className='bg-white w-auto m-5 px-8 py-2 rounded-md' onPress={() => setFetchTrigger(() => fetchTrigger + 1)}>
            <Text className='text-purple-950 font-bold text-base'>Get User</Text>
          </Pressable>
        </>
        ) }
    </View>
  )
}

export default random