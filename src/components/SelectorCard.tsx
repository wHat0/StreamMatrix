import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';

interface Props {
  title: string;
  discription: string;
  margin?: number;
  icon?: boolean;
  onPress: () => void;
}

const SelectorCard: React.FC<Props> = ({
  title,
  discription,
  onPress,
  margin,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        width: '90%',
        // height: 100,
        marginTop: margin ? margin : 25,
        alignSelf: 'center',
        alignItems: 'center',
        // borderRadius: 15,
        // backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          padding: 20,
          borderRadius: 15,
        }}>
        <Text style={[styles.Title, {fontWeight: '700'}]}>{title}</Text>
        <Text style={styles.dis}>{discription}</Text>
      </View>
      {icon && (
        <FontAwesome
          name={'lock'}
          color={'black'}
          style={{
            position: 'absolute',
            right: 15,
            alignSelf: 'center',
          }}
          size={25}
        />
      )}
    </TouchableOpacity>
  );
};

export default SelectorCard;

const entireScreenWidth = Dimensions.get('window').height;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
  Title: {
    color: colors.black,
    fontSize: '9.25rem',
    fontFamily: 'Nunito-Regular',
  },
  dis: {
    color: 'grey',
    fontFamily: 'Inter-Light',
    fontSize: '6.5rem',
  },
});
