const ArticleListByCategory = ({ articles }) => {
  return (
    <div>
      {articles.map((e) => (
        <h1>{e.title}</h1>
      ))}
    </div>
  );
};
export default ArticleListByCategory;

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { category } = params;
  const response = await fetch(
    "http://localhost:3000/news?category=" + category
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
