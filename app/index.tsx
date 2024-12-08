import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';
import { UserContext } from '@/context/UserContext';
import { useContext } from 'react';

const App = () => {
  const router = useRouter();
  const { userName, setUserName } = useContext(UserContext);

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.4)']}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <TextInput
                value={userName}
                placeholder="Type your name"
                placeholderTextColor="#000"
                className="bg-white rounded-xl min-h-[62] text-lg items-center mb-5 p-3"
                onChangeText={setUserName}
              />
              <CustomButton
                onPress={() => router.push('/nature-meditate')}
                title="Get started"
                disabled={!userName}
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default App;
