import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../config/colors';

export default class CustomAlertComponent extends React.Component {
  onNegativeButtonPress = () => {
    this.props.onPressNegativeButton();
  };

  onPositiveButtonPress = () => {
    this.props.onPressPositiveButton();
  };

  render() {
    return (
      <Modal
        visible={this.props.displayAlert}
        transparent={true}
        animationType={'fade'}>
        <View style={styles.mainOuterComponent}>
          <View
            style={[
              styles.mainContainer,
              {
                borderColor: this.props.displayAlertIcon
                  ? '#82CE34'
                  : '#9B2226',
                width: this.props.displayAlertIcon ? '80%' : '60%',
              },
            ]}>
            {/* First ROw - Alert Icon and Title */}
            <View style={styles.topPart}>
              {this.props.displayAlertIcon && this.props.displayImageOfAlert && (
                <View
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./alert/ic_notification.png')}
                    resizeMode={'contain'}
                    style={styles.alertIconStyle}
                  />
                </View>
              )}
              {this.props.displayCorrectIcon && (
                <Image
                  source={require('./alert/check.png')}
                  resizeMode={'contain'}
                  style={styles.alertIconStyle}
                />
              )}
              {this.props.alertTitleText && (
                <Text style={styles.alertTitleTextStyle}>
                  {`${this.props.alertTitleText}`}
                </Text>
              )}
            </View>
            {/* Second Row - Alert Message Text */}
            <View style={styles.middlePart}>
              <Text
                style={[
                  styles.alertMessageTextStyle,
                  {
                    fontSize: this.props.size ? this.props.size * 0.045 : 16,
                  },
                ]}>
                {`${this.props.alertMessageText}`}
              </Text>
            </View>
            {/* Third Row - Positive and Negative Button */}
            <View
              style={[
                styles.bottomPart,
                // {height: this.props.size ? this.props.size * 0.02 : 60},
                !this.props.displayImageOfAlert && {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                },
              ]}>
              {this.props.displayPositiveButton && (
                <TouchableOpacity
                  onPress={this.onPositiveButtonPress}
                  style={[
                    styles.alertMessageButtonStyle,
                    {
                      marginTop: 0,
                      backgroundColor: this.props.displayAlertIcon
                        ? '#82CE34'
                        : colors.secondary,
                      width: this.props.displayImageOfAlert
                        ? '45%'
                        : this.props.displayCorrectIcon
                        ? '55%'
                        : '35%',
                      height: this.props.size ? this.props.size * 0.15 : 60,
                      alignSelf: this.props.displayImageOfAlert && 'center',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.alertMessageButtonTextStyle,
                      {
                        fontSize: this.props.size
                          ? this.props.size * 0.039
                          : 14,
                        color: this.props.displayAlertIcon ? 'white' : 'black',
                      },
                    ]}>
                    {this.props.positiveButtonText}
                  </Text>
                </TouchableOpacity>
              )}
              {this.props.displayNegativeButton && (
                <TouchableOpacity
                  onPress={this.onNegativeButtonPress}
                  style={styles.alertMessageNegativeButtonStyle}>
                  <Text style={styles.alertMessageButtonTextStyle}>
                    {this.props.negativeButtonText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

CustomAlertComponent.propTypes = {
  displayAlert: PropTypes.bool,
  displayAlertIcon: PropTypes.bool,
  alertTitleText: PropTypes.string,
  alertMessageText: PropTypes.string,
  displayPositiveButton: PropTypes.bool,
  positiveButtonText: PropTypes.string,
  displayNegativeButton: PropTypes.bool,
  negativeButtonText: PropTypes.string,
  onPressPositiveButton: PropTypes.func,
  onPressNegativeButton: PropTypes.func,
};

// export default CustomAlertComponent;

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088',
  },
  mainContainer: {
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 18,
    padding: 4,
  },
  topPart: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: '2%',
    // paddingVertical: 4,
  },
  middlePart: {
    // flex: 1,
    width: '100%',
    // height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '10%',
    fontSize: 16,
    // marginVertical: 2,
    // marginBottom: 5,
  },
  bottomPart: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: '15%',
    // marginBottom: '15%',
  },
  alertIconStyle: {
    marginTop: 40,
    height: 50,
    width: 50,
  },
  alertTitleTextStyle: {
    // flex: 1,
    textAlign: 'justify',
    color: '#001219',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: '#660066',
    padding: 2,
    marginHorizontal: 2,
  },
  alertMessageTextStyle: {
    color: '#001219',
    // height: '30%',
    textAlign: 'center',
    alignSelf: 'center',
    // backgroundColor: 'black',

    // padding: '20%',
  },
  alertMessageButtonStyle: {
    width: '35%',
    opacity: 0.7,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#9B2226',
  },
  alertMessageNegativeButtonStyle: {
    width: '35%',
    opacity: 0.7,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#9B2226',
  },
  alertMessageButtonTextStyle: {
    fontWeight: '400',
    color: 'white',
  },
});
