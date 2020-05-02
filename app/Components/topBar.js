import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import images from '../Assets/Images';
import appStyles from '../AppStyles';

export default function TopBar(isCloseModal, backHandler) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => backHandler()}
        activeOpacity={0.9}>
        {isCloseModal ? (
          <Image source={images.closeButton} style={styles.imageCloseButton} />
        ) : (
          <Image source={images.backArrow} style={styles.imageBackArrow} />
        )}
      </TouchableOpacity>
      <Image
        source={images.logoEquine}
        style={styles.imageLogoEquine}
        resizeMode="contain"
      />
      <View style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: (appStyles.metrics.SCREEN_HEIGHT * 1) / 10.5,
    backgroundColor: appStyles.colors.WHITE,
  },
  button: {
    padding: moderateScale(5),
    width: moderateScale(35),
  },
  imageBackArrow: {
    height: '55%',
    width: moderateScale(25),
    tintColor: appStyles.colors.PRIMARY,
    backgroundColor: appStyles.colors.WHITE,
  },
  imageCloseButton: {
    height: '45%',
    width: moderateScale(20),
    tintColor: appStyles.colors.BLACK,
  },
  imageLogoEquine: {height: '80%'},
});
