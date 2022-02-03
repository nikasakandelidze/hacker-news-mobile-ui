import React, { useState } from "react";
import { Job, Story } from "../../../model";
export interface IMainContext {
  jobsData: Array<Job>;
  storiesData: Array<Story>;
  setJobsData: any;
  setStoriesData: any;
}

export const MainContext = React.createContext<IMainContext>({
  jobsData: [],
  storiesData: [],
  setJobsData: (data: Array<Job>) => {},
  setStoriesData: (data: Array<Story>) => {},
});

export const MainContextProvider = ({ children }: { children: any }) => {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [stories, setStories] = useState<Array<Story>>([]);

  return (
    <MainContext.Provider
      value={{
        jobsData: jobs,
        storiesData: stories,
        setJobsData: setJobs,
        setStoriesData: setStories,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
