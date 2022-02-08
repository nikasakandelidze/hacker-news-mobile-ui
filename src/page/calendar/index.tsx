import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import ModalView from "../../component/ModalView";
import CalendarView from "../../component/CalendarView";
import { MainContext } from "../helper/context/MainContextProvider";
import { Story } from "../../model";
import moment from "moment";

const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenDay, setChosenDay] = useState(moment().format("DD-MM-YY"));
  const { storiesData: stories } = useContext(MainContext);
  const formattedStories: Array<Story> = stories.map((e) => {
    const temp = { ...e };
    temp.time = moment(e.time, "X").format("DD-MM-YY");
    return temp;
  });

  return (
    <View style={styles.container}>
      <CalendarView
        stories={formattedStories}
        chosenDay={chosenDay}
        setChosenDay={setChosenDay}
      />
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
