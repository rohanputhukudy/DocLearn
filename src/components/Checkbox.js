import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export const Checkbox = ({ value, onChange, inverted = false }) => {
  const boxStyle = inverted ? [styles.box, styles.boxInverted] : styles.box;
  const checkStyle = inverted ? [styles.check, styles.checkInverted] : styles.check;

  return (
    <TouchableOpacity onPress={() => onChange(!value)}>
      <View style={boxStyle}>
        {value ? <Image style={checkStyle} source={require('../../assets/check.png')}/> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    height: 22,
    width: 22,
  },
});