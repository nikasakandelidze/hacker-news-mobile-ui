import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import CalendarDate from "./CalendarDate";
import { numberRange } from "../utils";

const CalendarView = () => {
  const [chosenDay, setChosenDay] = useState(Number(moment().format("D")));

  const start = Number(moment().startOf("month").format("D"));
  const end = Number(moment().endOf("month").format("D"));
  const days = numberRange(start, end);

  return (
    <View style={styles.container}>
      {days.map((date) => (
        <CalendarDate
          key={date}
          date={date + ""}
          picked={date == chosenDay}
          setDay={(d: number) => setChosenDay(d)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
});

export default CalendarView;
