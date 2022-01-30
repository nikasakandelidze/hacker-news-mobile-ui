export interface Story {
  id: number;
  author: string;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface TopStories {
  storyIds: Array<Number>;
}
