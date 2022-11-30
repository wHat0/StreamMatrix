import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 25}}>Terms Screen</Text>
    </View>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
