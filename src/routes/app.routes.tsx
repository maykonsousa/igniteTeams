import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colabs } from "@screens/Colabs";
import { Home } from "@screens/Home";
import { NewTeam } from "@screens/NewTeam";


const {Navigator, Screen} = createNativeStackNavigator();

export const AppRoutes = () => {

    return (
        <Navigator
        screenOptions={{
            headerShown: false
        }}
        
        >
            <Screen
            name="home"
            component={Home}
            />
            <Screen
            name="colabs"
            component={Colabs}
            />

            <Screen 
            name="new"
            component={NewTeam}
            />

        </Navigator>
    )
}