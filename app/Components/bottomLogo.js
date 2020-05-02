import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import images from '../Assets/Images';
import appStyles from '../AppStyles';

export default function BottomLogo() {
  return (
    <View style={styles.container}>
      <Image
        source={images.logoBottom}
        style={styles.imageLogo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: (appStyles.metrics.SCREEN_HEIGHT * 1) / 10.5,
    backgroundColor: appStyles.colors.WHITE,
  },
  imageLogo: {
    width: '70%',
    height: '70%',
  },
});
