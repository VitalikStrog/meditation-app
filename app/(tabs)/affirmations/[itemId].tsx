import React, { useEffect, useState } from 'react';

import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from '@/components/BackButton';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;

      const affirmationToStart = affirmationData.find(
        (item) => item.id === +itemId
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationArray = affirmationToStart.text.split('.');

        if (!affirmationArray.at(-1)) {
          affirmationArray.pop();
        }

        setSentences(affirmationArray);

        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.9)']}>
          <BackButton />
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence) => (
                  <Text
                    key={sentence}
                    className="text-white text-3xl mb-12 font-bold text-center"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
