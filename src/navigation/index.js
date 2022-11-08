import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Sobre } from "../screens/Sobre";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
    return (
        <MBNav.Navigator
            activeColor="#fff"
            inactiveColor="rgba(255,255,255,0.5)"
        >
            <MBNav.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarLabel: 'Sobre',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Contato"
                component={Sobre}
                options={{
                    tabBarLabel: 'Contato',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="phone" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Registro"
                component={Register}
                options={{
                    tabBarLabel: 'Registro',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="android" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </MBNav.Navigator>
    )
}