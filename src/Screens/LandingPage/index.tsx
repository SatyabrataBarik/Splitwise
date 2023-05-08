import 'react-native-gesture-handler';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import React from 'react';
import {theme} from '../../utils/theme';

import CustomText from '../../Componets/CustomText';
import {Size} from '../../utils/Height_Width';
import Carousel from 'react-native-reanimated-carousel';

const LandingPages = ({navigation}: any) => {
  let name = '';
  const data = [
    {
      id: 1,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/88eb3520626587.562ee74be3a54.png',
      Heading: 'Welcome to HisabKhatas,',
      describe: 'Splitwise keeps track of balances between friends.',
    },
    {
      id: 2,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/88eb3520626587.562ee74be3a54.png',
      Heading: 'Welcome to HisabKhatas,',
      describe: 'Splitwise keeps track of balances between friends.',
    },
    {
      id: 3,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/88eb3520626587.562ee74be3a54.png',
      Heading: 'Welcome to HisabKhatas,',
      describe: 'Splitwise keeps track of balances between friends.',
    },
  ];
  const RenderItem = ({item}: any) => {
    console.log('item', item);
    return (
      <View
        style={{
          justifyContent: 'space-evenly',
          height: Size.Height,
         
        }}>
       
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.landingBg}}>
       <Carousel
        // loop
        loop={false}
        width={Size.Width}
        height={Size.Height}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
       defaultIndex={0}
        renderItem={({item,index}) => (
          <View
            style={{
              flex: 1,
              
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
          <Image source={{uri: item.image}} style={{height: 50, width: 50}} />
        </View>

        <View>
          <CustomText text={item.Heading} />
        </View>
          </View>
        )}
      />
      <View>
        
      </View>
    </View>
  );
};

export default LandingPages;
