const NewsArticleList = ({ articles }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-semibold">List of news articles</h1>
      {articles.map((e) => (
        <p>
          {e.id}. {e.title}
        </p>
      ))}
    </div>
  );
};
export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
