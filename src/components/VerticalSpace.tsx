import React from 'react';
import { View, ViewStyle } from 'react-native';

interface VerticalSpaceProps {
  top?: number; 
  bottom?: number; 
  vertical?: number; 
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({ top = 0, bottom = 0,vertical=0 }) => {
  const containerStyle: ViewStyle = {
    marginTop: top,
    marginBottom: bottom,
    marginVertical:vertical,
  };

  return <View style={containerStyle} />;
};

export default VerticalSpace;
