export interface IBlog {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  fields: {
    title: string;
    slug: string;
    author: {
      fields: {
        name: string;
      };
    }
    excerpt: string;
    coverImage: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    content: unknown;
    date: string;
  };
}