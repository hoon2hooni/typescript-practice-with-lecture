{
  type Video = {
    title: string;
    author: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };
}