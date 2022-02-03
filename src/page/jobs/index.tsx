import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { fetchJobs } from "./service/service";
import { Job } from "../../model";
import JobView from "../../component/JobView";
import { MainContext } from "../helper/context/MainContextProvider";

const Jobs = () => {
  const { jobsData: jobs, setJobsData } = useContext(MainContext);
  const [loading, setLoading] = useState<boolean>(false);

  const updateJobs = async () => {
    setLoading(true);
    const jobs: Array<Job> = await fetchJobs();
    setJobsData(jobs);
    setLoading(false);
  };

  useEffect(() => {
    updateJobs();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {loading && (
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={"##FF6600"}
          />
        )}
      </View>
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
