import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const TabLayout = () => {
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
            <Tabs.Screen name="index" options={{headerShown: false, title:"Counter", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}}/>
            <Tabs.Screen name="random" options={{headerShown: false,title:"Counter", tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />}}/>
        </Tabs>
    )
}

export default TabLayout