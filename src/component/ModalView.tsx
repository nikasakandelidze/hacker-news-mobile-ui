import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import React from "react";

const ModalView = ({
  modalVisible,
  children,
}: {
  children: any;
  modalVisible: boolean;
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn={"zoomIn"}
      animationOut={"slideOutDown"}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
    >
      {children}
    </Modal>
  );
};

export default ModalView;
