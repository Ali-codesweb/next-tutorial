import Link from "next/link";
function Product() {
  return (
    <>
      <Link href={"/pages"}>Home</Link>
      <Link href={"/pages/product/1"}>
        <h1 className="text-2xl font-bold cursor-pointer">Product 1 </h1>
      </Link>
      <Link href={"/pages/product/2"}>
        <h1 className="text-2xl font-bold cursor-pointer">Product 1 </h1>
      </Link>
      <Link href={"/pages/product/3"}>
        <h1 className="text-2xl font-bold cursor-pointer">Product 1 </h1>
      </Link>
    </>
  );
}

export default Product;
