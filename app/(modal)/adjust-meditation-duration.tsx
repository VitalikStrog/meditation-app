import React, { useContext } from 'react';

import { Pressable, Text, View } from 'react-native';
import AppGradient from '@/components/AppGradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const durations = [
  { title: '10 seconds', duration: 10 },
  { title: '5 minutes', duration: 300 },
  { title: '10 minutes', duration: 600 },
  { title: '15 minutes', duration: 900 },
];

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-5 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-full">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust your meditation duration
          </Text>
          <View>
            {durations.map(({ title, duration }) => (
              <CustomButton
                key={title}
                onPress={() => handlePress(duration)}
                title={title}
                containerStyles="mb-5"
              />
            ))}
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
