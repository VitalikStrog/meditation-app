import React from 'react';

import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Href, Link } from 'expo-router';

type GuidedAffirmationsGalleryProps = {
  title: string;
  previews: GalleryPreviewData[];
};

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          horizontal
          data={previews}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}` as Href} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
