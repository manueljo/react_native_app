import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
const Layout = () =>{
   return(
    <SafeAreaView className='flex-1 bg-red-950' >
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
    </SafeAreaView>
   )
}

export default Layout