import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import appStyles from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.colors.WHITE,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBG: {
    width: '100%',
    height: (appStyles.metrics.SCREEN_HEIGHT * 8.5) / 11,
  },
  viewMain: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    padding: moderateScale(10),
  },
  textCaption: {
    fontWeight: '700',
    fontSize: moderateScale(24),
    color: appStyles.colors.WHITE,
  },
  textContent: {
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
    opacity: 0.8,
    color: appStyles.colors.WHITE,
  },
  touchTextInput: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(3),
    backgroundColor: appStyles.colors.BLACK_TRANSPARENT,
  },
  textName: {
    fontSize: moderateScale(10),
    marginBottom: moderateScale(-5),
    opacity: 0.8,
    color: appStyles.colors.WHITE,
  },
  textInputName: {
    fontSize: moderateScale(14),
    padding: 0,
    color: appStyles.colors.WHITE,
  },
  touchAddrressInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(3),
    backgroundColor: appStyles.colors.BLACK_TRANSPARENT,
  },
  imageBackArrow: {
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
    height: moderateScale(15),
    width: moderateScale(5),
    paddingRight: moderateScale(30),
    tintColor: appStyles.colors.WHITE,
  },
  buttonSearchCED: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(40),
    backgroundColor: appStyles.colors.PRIMARY,
  },
  viewTransparent: {
    height: moderateScale(40),
  },
  touchCloseModal: {
    backgroundColor: 'transparent',
    width: moderateScale(30),
    height: (appStyles.metrics.SCREEN_HEIGHT * 1) / 11,
  },
  viewModalMain: {
    padding: moderateScale(10),
    height: (appStyles.metrics.SCREEN_HEIGHT * 10) / 11,
    backgroundColor: appStyles.colors.GREY_LIGHT,
  },
  textModalTitle: {
    fontSize: moderateScale(18),
    color: appStyles.colors.BLACK,
  },
  textModalContent: {
    fontSize: moderateScale(14),
    marginVertical: moderateScale(5),
    color: appStyles.colors.BLACK_TRANSPARENT,
  },
  viewAddressSearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: moderateScale(0.5),
    borderColor: appStyles.colors.BLACK_TRANSPARENT,
  },
  imageSearchIcon: {
    alignSelf: 'center',
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: appStyles.colors.PRIMARY,
  },
  textInputPostcode: {
    flex: 1,
    padding: 0,
    marginHorizontal: moderateScale(5),
    fontSize: moderateScale(14),
    color: appStyles.colors.BLACK,
  },
  buttonFindAddress: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    height: moderateScale(35),
    marginVertical: moderateScale(3),
    borderRadius: moderateScale(3),
    backgroundColor: appStyles.colors.PRIMARY,
  },
  textFindAddress: {
    fontSize: moderateScale(12),
    color: appStyles.colors.WHITE,
  },
  textManualAddress: {
    alignSelf: 'flex-end',
    fontSize: moderateScale(10),
    padding: moderateScale(3),
    color: appStyles.colors.PRIMARY,
  },
  textSelectAddressTitle: {
    fontWeight: 'bold',
    padding: moderateScale(5),
    paddingBottom: moderateScale(10),
    fontSize: moderateScale(16),
    borderBottomWidth: moderateScale(0),
    borderColor: appStyles.colors.GREY,
    color: appStyles.colors.GREY_DARK,
  },
  touchAddressList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(5),
    paddingVertical: moderateScale(10),
    borderTopWidth: moderateScale(0.5),
    borderColor: appStyles.colors.GREY,
  },
  viewAddressList: {width: '80%'},
  textAddressLine1: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    color: appStyles.colors.GREY_DARK,
  },
  textAddressLine2: {
    fontSize: moderateScale(10),
    color: appStyles.colors.GREY_DARK,
  },
});

export default styles;
