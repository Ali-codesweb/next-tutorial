import { useRouter } from "next/router";

function ReviewDetail() {
  const router = useRouter();

  const { reviewId, productId } = router.query;
  return (
    <div>
      ReviewDetail {reviewId} , product id = {productId}
    </div>
  );
}

export default ReviewDetail;
