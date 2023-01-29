import { SafeAreaView, Text } from "react-native"
import { BasicStylesheet } from "../styles/BasicStylesheet";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={BasicStylesheet.container}>
      <Text>This is your settings page</Text>
    </SafeAreaView>
  );
};