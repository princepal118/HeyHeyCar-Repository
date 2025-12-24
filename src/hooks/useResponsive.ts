import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const useResponsive = () => {
  const [screen, setScreen] = useState(
    Dimensions.get('window')
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window }) => {
        setScreen(window);
      }
    );

    return () => subscription?.remove();
  }, []);

  const isPortrait = screen.height >= screen.width;
  const isLandscape = screen.width > screen.height;

  return {
    width: screen.width,
    height: screen.height,
    isPortrait,
    isLandscape,
  };
};
