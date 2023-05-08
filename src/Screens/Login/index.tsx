import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import CustomButton from '../../Componets/CustomButton';
import {theme} from '../../utils/theme';
import {Size} from '../../utils/Height_Width';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import CustomText from '../../Componets/CustomText';

const Login = ({navigation}: any) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.rootReducer.DarkTheme,
  );
  console.log('isDarkMode5', isDarkMode.isDarkMode);
  const backgroundStyle = {
    backgroundColor: isDarkMode.isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[{flex: 1, backgroundColor: backgroundStyle.backgroundColor}]}>
      <View
        style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
        <View>
          <Image
            source={{
              uri: 'https://descargar.org/wp-content/uploads/2013/11/splitwise-logo-300x300.png',
            }}
            style={{height: 300, width: 250}}
          />
          <CustomText
            text="Hisabkhatas"
            fontWeight={'700'}
            fontSize={34}
            color={isDarkMode.isDarkMode ? 'white' : 'black'}
            latterSpacing={5}
          />
        </View>
        <View>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('landingPage')}>
            <CustomButton
              buttonName="Log in"
              Height={40}
              Width={Size.Width - 50}
              backgroundColor={theme.colors.loginBG}
              color={theme.colors.loginText}
              uppercase={true}
            />
          </TouchableHighlight>
          <TouchableOpacity
            style={{marginTop: 12}}
            onPress={() => navigation.navigate('signUp')}>
            <CustomButton
              buttonName="Sign up"
              Height={40}
              Width={Size.Width - 50}
              backgroundColor={theme.colors.signUpBg}
              color={theme.colors.loginText}
              uppercase={true}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
