import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type CustomButton = {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  disabled?: boolean;
};

const CustomButton = ({
  onPress,
  title,
  textStyles = '',
  containerStyles = '',
  disabled = false,
}: CustomButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className={`bg-white rounded-xl min-h-[62px] justify-center alice items-center ${containerStyles}`}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
