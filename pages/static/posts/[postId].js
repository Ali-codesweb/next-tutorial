import { useRouter } from "next/router";
import Fallback from "../../../components/fallback";
const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-5/6">
        <h2 className="font-bold">
          {post.id}. {post.title}
        </h2>
        <p className="italic">
          {post.body}. {post.title}
        </p>
      </div>
    </div>
  );
};
export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((e) => ({
  //   params: { postId: `${e.id}` },
  // }));

  return {
    paths: [
      { params: { postId: `1` } },
      { params: { postId: `2` } },
      { params: { postId: `3` } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
