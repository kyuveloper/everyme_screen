import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./MainPage";
import Login from "./Login";
import SignUp from "./SignUp";
import EmailSignUp from "./EmailSignUp";


const Stack = createNativeStackNavigator();

const IndexPage = () => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
        >

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='MainPage'
                component={MainPage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='EmailSignUp'
                component={EmailSignUp}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}

export default IndexPage;