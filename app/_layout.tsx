import { AppProviders } from '@/context/AppProviders';
import { Stack } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';

export default function Layout() {

  useEffect(() => {
    async function lockLayout() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    lockLayout();
  }, []);

  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>      
  );
}