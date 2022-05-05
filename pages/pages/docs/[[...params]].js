import { useRouter } from "next/router";
function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length == 2) {
    return (
      <h1>
        Viewing docs for {params[0]} and conecpt {params[1]}
      </h1>
    );
  } else if (params.length == 1) {
    return <h1>Viewing docs for {params[0]}</h1>;
  }
  return <div className="text-3xl text-blue-600 font-bold underline ">Doc</div>;
}

export default Doc;
