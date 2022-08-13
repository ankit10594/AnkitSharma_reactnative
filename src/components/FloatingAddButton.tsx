import {StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FloatingAddButtonProps {
  onPress: () => void;
}

export default function FloatingAddButton({onPress}: FloatingAddButtonProps) {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress();
      }}
      style={styles.btnContainer}>
      <Icon name="add" color="white" size={30} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: 'black',
    zIndex: 100,
    padding: 20,
    borderRadius: 50,
    elevation: 10,
  },
});
