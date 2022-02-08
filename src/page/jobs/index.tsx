import { View, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import JobView from "../../component/JobView";
import { MainContext } from "../helper/context/MainContextProvider";

const Jobs = () => {
  const { jobsData: jobs } = useContext(MainContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {jobs.map((job) => (
          <JobView key={job.id} job={job} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#DAE7EF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Jobs;
