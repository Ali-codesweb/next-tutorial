import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  function handleClick() {
    router.push("/pages/product");
  }
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/pages/blog"}>Blog</Link>
      <div>
        <Link href={"/pages/product"}>Products</Link>
      </div>
      <button
        onClick={handleClick}
        className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100"
      >
        Place Order
      </button>
    </div>
  );
}

export default Home;
