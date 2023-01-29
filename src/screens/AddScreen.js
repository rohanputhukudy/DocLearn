import { SafeAreaView, Text } from "react-native"
import { BasicStylesheet } from "../styles/BasicStylesheet";

export const AddScreen = () => {
  return (
    <SafeAreaView style={BasicStylesheet.container}>
      <Text>This is where you add content</Text>
    </SafeAreaView>
  );
};