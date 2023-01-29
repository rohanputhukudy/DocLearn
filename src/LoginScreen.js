import { Button, View, } from "react-native"

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Get Started')
        }
      />
    </View>
  );
}