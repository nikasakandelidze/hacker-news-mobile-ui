import { View, Text, StyleSheet } from "react-native";
import React from "react";
import moment from "moment";
import CalendarDateView from "./CalendarDateView";
import { datesRange, getNumberFromDate } from "../utils";
import { Story } from "../model";

const CalendarView = ({
  stories,
  chosenDay,
  setChosenDay,
}: {
  stories: Array<Story>;
  chosenDay: string;
  setChosenDay: any;
}) => {
  const start = moment().startOf("month").format("DD-MM-YY");
  const end = moment().endOf("month").format("DD-MM-YY");
  const days: Array<string> = datesRange(start, end);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Calendar</Text>
      </View>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarWrapper}>
          {days.map((date) => (
            <CalendarDateView
              key={getNumberFromDate(date)}
              date={date}
              picked={date + "" === chosenDay + ""}
              setDay={(d: number) => setChosenDay(d)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  calendarContainer: {
    width: "100%",
    padding: 10,
  },
  calendarWrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CalendarView;
