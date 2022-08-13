import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
interface LoadingModalProps {
  visible: boolean;
}

const LoadingModal = ({visible}: LoadingModalProps) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.backdrop} />
        <View style={styles.content}>
          <Text style={styles.loadingTxt}>Loading</Text>
          <Text style={styles.waitTxt}>Please Wait</Text>
        </View>
      </View>
    </Modal>
  );
};
export default LoadingModal;
const styles = StyleSheet.create({
  content: {
    padding: 18,
    minWidth: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 59,
    height: 53,
  },
  loadingTxt: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 7,
  },
  waitTxt: {
    color: 'gray',
    fontSize: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.8,
  },
});
