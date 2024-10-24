import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'


const Index = () => {
  let [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    if (count === 0) {
      return count
    }
    setCount(count - 1)
  }

 
  return (

    <View className='flex-1 gap-10 bg-purple-700 flex-col justify-center items-center' >
      <View className='w-52 h-52 rounded-full flex justify-center items-center bg-purple-300 '>
        <Text className="text-black text-center text-7xl font-black">{count}</Text>
      </View>
      <View className='flex flex-row space-x-5'>
        <Pressable onPressIn={decrement} className='bg-white p-3 w-28 rounded-md '>
          <Text className='text-center text-2xl font-medium  text-purple-950'>Decrement</Text>
        </Pressable>
        <Pressable onPressIn={increment} className='bg-white p-3 w-28 rounded-md'>
          <Text className='text-center text-2xl font-medium  text-purple-950'>Increment</Text>
        </Pressable>
      </View>
    </View>
  )
}


export default Index