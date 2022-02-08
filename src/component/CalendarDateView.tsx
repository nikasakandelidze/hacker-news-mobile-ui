import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getNumberFromDate } from "../utils";

const CalendarDateView = ({
  date,
  picked,
  setDay,
}: {
  date: string;
  picked: boolean;
  setDay: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setDay(date)}
      style={[styles.container, picked ? styles.picked : {}]}
    >
      <View>
        <Text style={[picked ? styles.pickedTextColor : {}]}>
          {getNumberFromDate(date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    margin: 7,
    padding: 5,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  picked: {
    backgroundColor: "#3B49DF",
  },
  pickedTextColor: {
    color: "white",
  },
});

export default CalendarDateView;
