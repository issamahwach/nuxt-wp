interface Post {
  id: number;
  title: text;
  excerpt: text;
  slug: string;
  categories: number[];
  _embedded?: Thumbnail;
}

type text = {
  rendered: string;
};

type Thumbnail = {
  "wp:featuredmedia": FeaturedMedia[];
};

type FeaturedMedia = {
  source_url: string;
};

export default Post;
