import {View, Text} from 'react-native';
import React from 'react';
interface CustomTextProps {
  text?: string;
  color?: String;
  fontSize?: number;
  fontWeight?: string | any;
  latterSpacing?: number;
}
const CustomText = ({
  text,
  color,
  fontSize,
  fontWeight,
  latterSpacing,
}: CustomTextProps) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        letterSpacing: latterSpacing,
      }}>
      {text}
    </Text>
  );
};

export default CustomText;
