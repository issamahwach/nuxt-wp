export default () => {
  const config = useRuntimeConfig();
  const url = config.public.API_URL;
  const postFields =
    "?_embed=wp:featuredmedia&_fields=id,title,slug,excerpt,_links,_embedded.wp:featuredmedia";

  const categoryFields = "?_fields=id,name,slug";

  //Get
  const get = async <T>(endpoint: string) =>
    useFetch<T>(`${url}/wp-json/wp/v2/${endpoint}`);

  //Get all Posts
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 10
  ) => {
    let query = `posts${postFields}&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    return get<T>(query);
  };

  //Get Single Post
  const getPost = async <T>(slug: string) =>
    get<T>(`posts${postFields}&slug=${slug}`);

  //Get All Categories
  const getCategories = async <T>() => get<T>(`categories${categoryFields}`);

  //Get Single Category
  const getCategory = async <T>(slug: string) =>
    get<T>(`categories${postFields}&slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
