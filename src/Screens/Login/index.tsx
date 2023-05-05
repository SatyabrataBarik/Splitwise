import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../CustomButton';

const Login = () => {
  return (
    <View style={[{flex: 1}]}>
      <View style={{alignItems:'center'}}>
        <Image
          source={{uri:'https://descargar.org/wp-content/uploads/2013/11/splitwise-logo-300x300.png'}}
         style={{height:120,width:100}}
        />
      </View>
      <CustomButton buttonName='ok'  Height={40} Width={90} backgroundColor='red'/>
    </View>
  );
};

export default Login;
