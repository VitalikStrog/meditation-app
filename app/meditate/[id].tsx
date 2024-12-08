import React, { useContext, useEffect, useState } from 'react';

import { ImageBackground, Pressable, Text, View } from 'react-native';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import BackButton from '@/components/BackButton';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlaying, setIsPlaying] = useState(false);

  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, '0');
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[+id - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setAudioSound(sound);

    return sound;
  };

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) setDuration(10);

    setIsMeditating((prevState) => !prevState);

    await toggleSound();
  };

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus();

    router.push('/(modal)/adjust-meditation-duration');
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      toggleMeditationSessionStatus();
      setIsMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration((prevState) => prevState - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      setDuration(10);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[+id - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']}>
          <BackButton />
          <View className="flex-1 justify-center space-b">
            <Pressable
              className="w-44 h-44 rounded-full justify-center items-center mx-auto"
              onPress={toggleMeditationSessionStatus}
            >
              <View className="bg-neutral-200 rounded-full w-full h-full justify-center items-center">
                <Text className="text-4xl text-blue-800 font-rmono">
                  {formattedTimeMinutes}:{formattedTimeSeconds}
                </Text>
              </View>
            </Pressable>
          </View>
          <View className="mb-5">
            <CustomButton
              onPress={handleAdjustDuration}
              title="Adjust duration"
            />
            <CustomButton
              onPress={toggleMeditationSessionStatus}
              title={isMeditating ? 'Stop' : 'Start meditation'}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
