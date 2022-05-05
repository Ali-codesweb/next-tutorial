import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <p className="text-4xl font-bold">List of Posts</p>

      {posts.map((e) => (
        <Link key={e.id} href={"/static/posts/" + e.id} passHref>
          <p className="font-semibold cursor-pointer p-2 border-2 mt-2 hover:bg-slate-200 transition ease-out w-5/6 text-center">
            {e.id} . {e.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
