import {View, Text} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
interface CustomButtonProps {
  buttonName?: string;
  Height: number;
  Width: number;
  color?: String;
  backgroundColor?: string;
}
const CustomButton = ({
  buttonName,
  Height,
  Width,
  color,
  backgroundColor,
}: CustomButtonProps) => {
  return (
    <Neomorph
    inner // <- enable shadow inside of neomorph
    swapShadows // <- change zIndex of each shadow color
    style={{
      shadowRadius: 10,
      borderRadius: 25,
      backgroundColor: '#DDDDDD',
      width:Width ,
      height: Height,
    }}
    >
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: backgroundColor,
          flex:1,
          justifyContent:'center'
        }}>
        <Text style={{color: color, fontSize: 15,textAlign:'center'}}>{buttonName}</Text>
      </View>
    </Neomorph>
  );
};

export default CustomButton;
