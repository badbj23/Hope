import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {SplashScreen, Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {useEffect} from 'react';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {useFonts} from "expo-font";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
    const [fonstLoad] = useFonts({
        "sans-regular": require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        "sans-bold": require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        "sans-semibold": require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        "sans-light": require('../assets/fonts/PlusJakartaSans-Light.ttf'),
        "sans-medium": require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        "sans-extrabold": require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf')
    });

    useEffect(() => {
        if (fonstLoad) {
            SplashScreen.hideAsync()
        }
    }, [fonstLoad])
    if (!fonstLoad) return null;
    return <Stack screenOptions={{headerShown: false}}/>;
}