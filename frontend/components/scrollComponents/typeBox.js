import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import ScrollStyles from '../styles/scrollStyles';

const TypeBoxComponent = ({ text }) => { // Accept the 'text' prop here
  const [typeBoxWidth, setTypeBoxWidth] = useState({});

  const typeBoxRefs = useRef([]);

  useLayoutEffect(() => {
    const newWidths = {};
    typeBoxRefs.current.forEach((ref) => {
      if (ref && ref.current) {
        const { width } = ref.current.measureLayout();
        newWidths[ref.current.props.text] = width;
      }
    });
    setTypeBoxWidth(newWidths);
  }, [typeBoxRefs.current]);

  const renderTypeBox = (text) => { // Use the 'text' prop here as well
    return (
      <View
        key={text}
        style={[
          ScrollStyles.typeBox,
          { width: typeBoxWidth[text], height: 50, marginLeft: 10 },
        ]}
        ref={(ref) => (typeBoxRefs.current[text] = ref)}
      >
        <Text style={ScrollStyles.typeBoxContent}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={ScrollStyles.typeContainer}>
      {renderTypeBox(text)} 
    </View>
  );
};

export default TypeBoxComponent;
