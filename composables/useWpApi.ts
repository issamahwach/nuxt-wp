export default () => {
  const config = useRuntimeConfig();
  const url = config.public.API_URL;

  /**
   * To reduce response payload as much as possible
   * **/

  const postFields =
    "?_embed=wp:featuredmedia&_fields=id,title,slug,categories,excerpt,_links,_embedded.wp:featuredmedia";

  const categoryFields = "?_fields=id,name,slug";

  /**
   * Standard GET request
   * @param endpoint
   * @returns Response
   */

  const get = async <T>(endpoint: string) =>
    useFetch<T>(`${url}/wp-json/wp/v2/${endpoint}`);

  /**
   * GET all Posts
   * @param categories
   * @param page
   * @param perPage
   * @returns
   */
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

  /**
   * GET Post
   * @param slug
   * @returns
   */
  const getPost = async <T>(slug: string) =>
    get<T>(`posts${postFields}&slug=${slug}`);

  /**
   * GET all Categories
   * @returns
   */
  const getCategories = async <T>() => get<T>(`categories${categoryFields}`);

  /**
   * GET single Category
   * @param slug
   * @returns
   */
  const getCategory = async <T>(slug: string) =>
    get<T>(`categories${categoryFields}&slug=${slug}`);

  return {
    get,
    getPosts,
    getPost,
    getCategories,
    getCategory,
  };
};
