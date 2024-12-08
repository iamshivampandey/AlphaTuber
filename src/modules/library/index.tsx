import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff'}}>More Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.DARK_CHARCOAL

  },
});

export default LibraryScreen;
