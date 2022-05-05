import Link from "next/link";

const ProductsList = ({ products }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <p className="text-4xl font-bold">List of products</p>

      {products.map((e) => (
        <Link key={e.id} href={"/static/products/" + e.id} passHref>
          <p className="font-semibold cursor-pointer p-2 border-2 mt-2 hover:bg-slate-200 transition ease-out">
            {e.id} . {e.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default ProductsList;

export async function getStaticProps() {
  console.log("Generating products list");
  const response = await fetch(" http://localhost:3000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
