import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My Deliveroo Clone App!</Text>
      <Button title="Go to Home Screen" onPress={handleNavigateToHome} />
    </View>
  );
};

export default WelcomeScreen;
