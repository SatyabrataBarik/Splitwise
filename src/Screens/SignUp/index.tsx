import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SignUp = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.rootReducer.DarkTheme,
  );
  const backgroundStyle = {
    backgroundColor: isDarkMode.isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={{flex: 1, backgroundColor: backgroundStyle.backgroundColor}}>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
