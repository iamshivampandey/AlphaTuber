import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FastImage from "react-native-fast-image";
import { Colors } from "../utils/colors";
import Fonts from "../utils/fonts";

const AnimatedTouchableOpacity =
  Animatable.createAnimatableComponent(TouchableHighlight);

const SongCardHorizontal = ({ item, containerStyle, imageStyle, onPress,titleStyle,descStyle}) => {
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <AnimatedTouchableOpacity
      underlayColor="rgba(0,0,0,.1)"
      style={[styles.container, containerStyle]}
      onPress={() => onPress()}
      animation={fadeIn}
      duration={1000}
    >
      <>
        <Image
          // source={{ uri: item?.image }}
          source={item?.image}
          style={[styles.thumbnailStle, imageStyle]}
        />
        <View style={styles.songDetailView}>
          <Text numberOfLines={1} style={[styles.titleText,titleStyle]}>
            {item?.name}dsfsdfdfasdas
          </Text>
          <Text style={[styles.descText,descStyle]} numberOfLines={1}>
            {item?.artist}
          </Text>
        </View>
      </>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 142,
    alignItems: "flex-end",
    borderRadius: 16,
    gap: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  titleText: {
    fontSize: 18,
    color: Colors.White,
    // fontFamily: 'Gilroy-Regular',
  },
  descText: {
    fontSize: 14,
    color: Colors.White,
    // fontFamily: Fonts.Gilroy_Regular,
    fontWeight: "400",
  },
  thumbnailStle: { width: 130, height: 130, borderRadius: 16 },
  songDetailView: { width: '90%', gap: 3 },
});

export default SongCardHorizontal;
