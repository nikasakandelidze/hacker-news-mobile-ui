import { Job } from "../../../model/index";
import { requestApi } from "../../../commons/Api";

export const fetchJobs = async (): Promise<Job[]> => {
  const ids = await requestApi("v0/jobstories.json", "GET", {});
  if (!ids.errorMessage) {
    const result: Array<Job> = await Promise.all(
      ids
        .slice(0, 15)
        .map(async (id: number) => {
          const response: any = await requestApi(
            `v0/item/${id}.json`,
            "GET",
            {}
          );
          return {
            id: response.id,
            author: response.by,
            score: response.score,
            time: response.time,
            title: response.title,
            type: response.type,
            url: response.url,
          };
        })
        .filter((e: any) => !e.errorMessage)
    );
    return result;
  } else {
    return [];
  }
};
