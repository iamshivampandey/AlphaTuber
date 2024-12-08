import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Colors } from '../../utils/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',width:'93%',alignSelf:'center',justifyContent:'space-between' }}>
        <Text style={{ color: '#fff' }}>Home Screen</Text>
        <TouchableOpacity>   
          <Text style={{ color: '#fff' }}>Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_CHARCOAL
  },
});

export default HomeScreen;
