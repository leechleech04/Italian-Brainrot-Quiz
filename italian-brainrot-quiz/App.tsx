import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Asset, useAssets } from 'expo-asset';
import ImageSources from './ImageSources';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    'PoetsenOne-Regular': require('./assets/fonts/PoetsenOne-Regular.ttf'),
  });

  const [imageLoaded, imageError] = useAssets([
    ...ImageSources.map((item) => item.source),
    require('./assets/SahurQuiz.png'),
    require('./assets/TralaQuiz.png'),
    require('./assets/splash-icon.png'),
  ]);

  useEffect(() => {
    const prepareResources = async () => {
      if (fontLoaded && imageLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    prepareResources();
  }, [fontLoaded, imageLoaded]);

  if (!fontLoaded || !imageLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
