import { useRouter } from "next/router";
import Fallback from "../../../components/fallback";
const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-5/6">
        <h2 className="font-bold">
          {product.id}. {product.title}
        </h2>
        <p className="italic">{product.description}</p>
      </div>
    </div>
  );
};
export default Product;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((e) => ({
  //   params: { postId: `${e.id}` },
  // }));

  return {
    paths: [
      { params: { productId: `1` } },
      { params: { productId: `2` } },
      { params: { productId: `3` } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const response = await fetch(
    "http://localhost:3000/products/" + params.productId
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
  };
}
