
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const appStyles = {
  colors: {
    PRIMARY: '#005d56',
    WHITE: '#ffffff',
    BLACK: '#000000',
    BLACK_TRANSPARENT: 'rgba(0,0,0,.5)',
    GREY: '#999999',
    GREY_DARK: '#5e5c5c',
    GREY_LIGHT: '#F3F3F3',
    GREY_TRANSPARENT: 'rgba(110,110,110,.5)',
  },
  metrics: {
    SCREEN_WIDTH: width < height ? width : height,
    SCREEN_HEIGHT: width < height ? height : width,
    NAV_BAR_HEIGHT: Platform.OS === 'ios' ? 54 : 66,
  },
};

export default appStyles;
