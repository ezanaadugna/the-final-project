import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MapStyles from '../styles/mapStyles';

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the current searchText
    onSearch(searchText);
  };

  return (
    <View style={MapStyles.searchContainer}>
      <TextInput
        style={MapStyles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

export default SearchComponent;
