import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchJobs } from "./service/service";
import { Job } from "../../model";
import JobView from "../../component/JobView";

const Jobs = () => {
  const [jobs, setJobs] = useState<Array<Job>>([]);

  const updateJobs = async () => {
    const jobs: Array<Job> = await fetchJobs();
    setJobs(jobs);
  };

  useEffect(() => {
    updateJobs();
  }, []);

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
