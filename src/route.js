import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Pages/Home";
import Busca from "./Pages/Busca";
import Reels from "./Pages/Reels";
import Loja from "./Pages/Loja";
import Perfil from "./Pages/Perfil";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function Routes() {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="home" size={26} color={color} />
            }else{
              return <Ionicons name="home-outline" size={26} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Busca"
        component={Busca}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="search" size={26} color={color} />
            }else{
              return <Ionicons name="search-outline" size={26} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="videocam" size={26} color={color} />
            }else{
              return <Ionicons name="videocam-outline" size={26} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="basket" size={26} color={color} />
            }else{
              return <Ionicons name="basket-outline" size={26} color={color} />
            }
          }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="person" size={26} color={color} />
            }else{
              return <Ionicons name="person-outline" size={26} color={color} />
            }
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes