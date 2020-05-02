import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  BackHandler,
  Modal,
  TextInput,
  ScrollView,
  FlatList,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import Toast from 'react-native-simple-toast';

import * as ownerActions from '../../Action/ownerAction';
import Loader from '../../Components/loader';
import TopBar from '../../Components/topBar';
import BottomLogo from '../../Components/bottomLogo';
import appStyles from '../../AppStyles';
import images from '../../Assets/Images';
import styles from './styles';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      firstName: '',
      lastName: '',
      address: '',
      postcode: '',
      isManualAddress: true,
    };
    this.exit = false;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () =>
      this._backHandlerPress(),
    );
  }

  _backHandlerPress() {
    if (!this.state.isModalVisible && this.exit) {
      BackHandler.exitApp();
      return true;
    } else {
      Toast.show('Press again to exit app');
      this.exit = true;
      setTimeout(() => {
        this.exit = false;
      }, 2000);
      return true;
    }
  }

  _showModal = () => {
    this.setState({isModalVisible: true});
  };

  _closeModal = () => {
    this.setState({isModalVisible: false});
  };

  _findOwnerAddress = () => {
    Keyboard.dismiss();
    this.state.postcode.trim() == ''
      ? Toast.show("Postcode can't be empty")
      : this.props.getOwnerAddress(this.state.postcode);
  };

  _renderList = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.touchAddressList}
        onPress={() =>
          this.setState({
            address: item.addressline1 + ', ' + item.postcode,
            isModalVisible: false,
          })
        }>
        <View style={styles.viewAddressList}>
          <Text style={styles.textAddressLine1}>{item.addressline1}</Text>

          <Text style={styles.textAddressLine2}>
            {item.addressline2 + ', ' + item.postcode}
          </Text>
        </View>
        <Image
          source={images.backArrow}
          style={[styles.imageBackArrow, {tintColor: appStyles.colors.BLACK}]}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {Owner} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />

        {TopBar(this.state.isModalVisible, () => this._backHandlerPress())}
        <ImageBackground
          style={styles.imageBG}
          source={images.homeBG}
          resizeMode="stretch"
          blurRadius={
            this.state.firstName != '' &&
            this.state.lastName != '' &&
            this.state.address != ''
              ? 5
              : 0
          }>
          <ScrollView contentContainerStyle={styles.viewMain}>
            <View>
              <Text style={styles.textCaption}>Owner lookup</Text>
              <Text style={styles.textContent}>
                Search the Central Equine Database for equine based on owner
                name or address
              </Text>
              <TouchableOpacity
                onPress={() => this.FirstName.focus()}
                style={[
                  styles.touchTextInput,
                  {
                    paddingVertical:
                      this.state.firstName != ''
                        ? moderateScale(5)
                        : moderateScale(0),
                    height:
                      this.state.firstName != '' ? null : moderateScale(50),
                  },
                ]}>
                {this.state.firstName != '' && (
                  <Text style={styles.textName}>Owner First Name</Text>
                )}
                <TextInput
                  ref={ref => {
                    this.FirstName = ref;
                  }}
                  style={styles.textInputName}
                  placeholder={'Owner First Name'}
                  placeholderTextColor={appStyles.colors.WHITE}
                  onChangeText={name => this.setState({firstName: name.trim()})}
                  value={this.state.firstName}
                  onEndEditing={() => {
                    this.state.lastName == '' && this.LastName.focus();
                  }}
                  maxLength={30}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.LastName.focus()}
                style={[
                  styles.touchTextInput,
                  {
                    paddingVertical:
                      this.state.lastName != ''
                        ? moderateScale(5)
                        : moderateScale(0),
                    height:
                      this.state.lastName != '' ? null : moderateScale(50),
                  },
                ]}>
                {this.state.lastName != '' && (
                  <Text style={styles.textName}>Owner Last Name</Text>
                )}
                <TextInput
                  ref={ref => {
                    this.LastName = ref;
                  }}
                  style={styles.textInputName}
                  placeholder={'Owner Last Name'}
                  placeholderTextColor={appStyles.colors.WHITE}
                  onChangeText={name => this.setState({lastName: name.trim()})}
                  value={this.state.lastName}
                  maxLength={30}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({isModalVisible: true})}
                style={[
                  styles.touchAddrressInput,
                  {
                    paddingVertical:
                      this.state.address != ''
                        ? moderateScale(5)
                        : moderateScale(0),
                    height: this.state.address != '' ? null : moderateScale(50),
                  },
                ]}>
                {this.state.address == '' ? (
                  <Text style={styles.textInputName}>Owner Address</Text>
                ) : (
                  <View style={styles.viewAddressList}>
                    <Text style={[styles.textName, {marginBottom: 0}]}>
                      Owner Address
                    </Text>
                    <Text style={styles.textInputName}>
                      {this.state.address}
                    </Text>
                  </View>
                )}
                <Image
                  source={images.backArrow}
                  style={styles.imageBackArrow}
                />
              </TouchableOpacity>
            </View>
            {this.state.firstName != '' &&
            this.state.lastName != '' &&
            this.state.address != '' ? (
              <TouchableOpacity
                onPress={() => console.warn('not mentioned')}
                style={styles.buttonSearchCED}>
                <Text style={styles.textInputName}>SEARCH CED</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.viewTransparent} />
            )}
          </ScrollView>
        </ImageBackground>
        <BottomLogo />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => this._closeModal()}>
          {this.props.Loader.isLoading && <Loader />}
          <TouchableOpacity
            style={styles.touchCloseModal}
            activeOpacity={0.9}
            onPress={() => this._closeModal()}
          />
          <View style={styles.viewModalMain}>
            <Text style={styles.textModalTitle}>Owner Address Lookup</Text>
            <Text style={styles.textModalContent}>
              Enter the owners postcode to lookup address on Central Equine
              Database:
            </Text>
            <View style={styles.viewAddressSearchBar}>
              <Image
                source={images.searchIcon}
                style={styles.imageSearchIcon}
              />
              <TextInput
                ref={ref => {
                  this.Postcode = ref;
                }}
                style={styles.textInputPostcode}
                placeholder={'Postcode'}
                placeholderTextColor={appStyles.colors.GREY_TRANSPARENT}
                onFocus={() => this.setState({isManualAddress: false})}
                onBlur={() => this.setState({isManualAddress: true})}
                onChangeText={code =>
                  this.setState({postcode: code, address: ''})
                }
                value={this.state.postcode}
                onSubmitEditing={() => {
                  this._findOwnerAddress();
                }}
                maxLength={10}
              />
              <TouchableOpacity
                onPress={() => this._findOwnerAddress()}
                style={styles.buttonFindAddress}>
                <Text style={styles.textFindAddress}>FIND ADDRESS</Text>
              </TouchableOpacity>
            </View>
            {this.state.isManualAddress && (
              <Text
                onPress={() => console.warn('not mentioned')}
                style={styles.textManualAddress}>
                Enter Address Manually
              </Text>
            )}
            {this.state.postcode == Owner.ownerPostCode &&
              Owner.ownerAddressArray.length > 0 && (
                <Text style={styles.textSelectAddressTitle}>
                  {`Select Address - ${Owner.ownerAddressArray.length} Results`}
                </Text>
              )}
            <FlatList
              style={{marginBottom: moderateScale(20)}}
              data={
                this.state.postcode == Owner.ownerPostCode
                  ? Owner.ownerAddressArray
                  : []
              }
              renderItem={(item, index) => this._renderList(item, index)}
              extraData={this.state}
              keyboardShouldPersistTaps={'always'}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    Owner: state.ownerReducer,
    Loader: state.loaderReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOwnerAddress: payload =>
      dispatch(ownerActions.ownerAddressRequest(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
