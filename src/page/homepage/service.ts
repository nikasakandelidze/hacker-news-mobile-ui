import { Story, TopStories } from "./../../model/index";
import { requestApi } from "../../commons/Api";

export const fetchStories = async (): Promise<Story[]> => {
  const ids = await requestApi("v0/topstories.json", "GET", {});
  if (!ids.errorMessage) {
    const result: Array<Story> = await Promise.all(
      ids
        .slice(0, 10)
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
