import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { scale } from '../../utils/responsive';
// import { typography } from '../../theme/typography';
// import { colors } from '../../theme/colors';
import { useResponsive } from '../../hooks/useResponsive';
import { styles } from './Styles';
import { ROUTES } from '../../constants/routes';
import axios from 'axios';
import useDebounce from '../../hooks/useDebounce';

const HomeScreen = ({ navigation }: any) => {
  const { isLandscape } = useResponsive();
  const navigateToProfile = () => navigation.navigate(ROUTES.PROFILE);
  const [languageName, setLanguageName] = useState('javascript')
  const [product, setProduct] = useState<any>({})
  const debouncedSearchTerm = useDebounce(languageName, 500)
  const abortControllerRef = useRef<AbortController | null>(null);
  const getSearchApiDetails = async (controller: any) => {
    // const url =
    //   "https://slowwly.robertomurray.co.uk/delay/5000/url/https://api.duckduckgo.com/?q=react+native&format=json";

    try {
      const result = await axios.get('https://free.mockerapi.com/200', {
        headers: {
          'x-delay': '10000'
        },
        signal: controller.signal,
      })
      console.log('result', result)
      //     {
      //    signal: controller.signal,
      //  }
      setProduct(result?.data)
    } catch (error) {
      console.log('Error from the search API: ', error)
    }
  }

  const countryNameHandler = (text: string) => {
    console.log('text', text)
    setLanguageName(text)


  }

  useEffect(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;
    if (debouncedSearchTerm) {
      getSearchApiDetails(controller)
    }

    return () => {
      controller.abort();
    };

  }, [debouncedSearchTerm])

  return (
    <View style={[
      styles.container,
      { padding: isLandscape ? scale(24) : scale(16) }
    ]}>

      {/* ✅ RESPONSIVE */}
      <Text style={styles.titleScaled}>Responsive UI</Text>

      <View style={styles.cardScaled}>
        <Text style={styles.bodyScaled}>
          Text uses moderateScale
        </Text>
        <Text style={styles.captionScaled}>
          Works on all phones
        </Text>
      </View>

      {/* ❌ NON-RESPONSIVE */}
      {/* <Text style={styles.titleNormal}>Non-Responsive UI</Text>

      <View style={styles.cardNormal}>
        <Text style={styles.bodyNormal}>
          Fixed font size
        </Text>
      </View> */}

      <TextInput placeholder='Search Country' style={styles.inputWrapper} onChangeText={countryNameHandler} />

      {product && <Text>{product?.Abstract}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToProfile}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
