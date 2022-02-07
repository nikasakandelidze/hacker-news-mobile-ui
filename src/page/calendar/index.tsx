import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ModalView from "../../component/ModalView";
import CalendarView from "../../component/CalendarView";

const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CalendarView />
      <ModalView modalVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text>Hi</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View>
              <Text>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ModalView>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View>
          <Text>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    height: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Calendar;
