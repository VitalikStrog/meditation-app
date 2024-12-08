import React from 'react';

import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()} className="absolute top-12 z-10">
      <AntDesign name="leftcircleo" size={50} color="white" />
    </Pressable>
  );
};

export default BackButton;
