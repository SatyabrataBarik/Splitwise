import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
interface CustomButtonProps {
  buttonName?: string;
  Height: number;
  Width: number;
  color: String|any;
  backgroundColor?: string;
  uppercase?: boolean;
}
const CustomButton = ({
  buttonName,
  Height,
  Width,
  color,
  backgroundColor,
  uppercase,
}: CustomButtonProps) => {
  return (
    <Neomorph
      // inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      style={{
        shadowRadius: 10,

        backgroundColor: '#DDDDDD',
        width: Width,
        height: Height,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: backgroundColor,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={[
            style.buttonText,
            {color: color},
            uppercase && {textTransform: 'uppercase'},
          ]}>
          {buttonName}
        </Text>
      </View>
    </Neomorph>
  );
};
const style = StyleSheet.create({
  buttonText: {fontSize: 15, textAlign: 'center'},
});
export default CustomButton;
