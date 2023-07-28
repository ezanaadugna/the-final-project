import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuildingScreen = ({ route }) => {
  const { building } = route.params;
  const navigation = useNavigation();

  const handleGeneratePrompt = () => {
    navigation.navigate('PromptScreen', { building});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buildingName}>{building.name}</Text>

      <FlatList
        data={building.photos}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.buildingImage} />
        )}
      />

      <Text style={styles.buildingDescription}>{building.description}</Text>

      <Button
        title="Generate Prompt"
        onPress={handleGeneratePrompt} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buildingName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buildingImage: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  buildingDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default BuildingScreen;

