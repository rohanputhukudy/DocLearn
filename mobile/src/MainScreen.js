import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FeedScreen } from "./screens/FeedScreen.js";
import { AddScreen } from "./screens/AddScreen.js";
import { ProfileScreen } from "./screens/ProfileScreen.js";

const Tab = createBottomTabNavigator();

export const MainScreen = ({ navigation }) => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Feed" component={FeedScreen}/>
        <Tab.Screen name="Add" component={AddScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    );
};