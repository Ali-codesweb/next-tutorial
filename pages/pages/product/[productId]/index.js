import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const id = router.query.productId;
  return <div>Details{id}</div>;
}

export default ProductDetail;
