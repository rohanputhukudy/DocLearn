import { Button, View, } from "react-native"
import { BasicStylesheet } from "./styles/BasicStylesheet";

export const LoginScreen = ({navigation}) => {
  return (
    <View style={BasicStylesheet.container}>
      <Button
        title="Login"
        onPress={() =>
          navigation.replace('Main Screen')
        }
      />
    </View>
  );
}