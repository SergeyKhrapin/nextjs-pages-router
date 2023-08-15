import { useRouter } from "next/router"
import Link from "next/link"
import BackToHomeLink from "@/components/BackToHome"
import Layout from "../../components/layout"

export default function Page(props) {
  const router = useRouter();

  console.log("render >>>>>");

  // useEffect(() => {
  //   console.log("useEffect");
  //   const countFromLocalStorage = localStorage.getItem("counter");
  //   if (countFromLocalStorage) {
  //     setCount(+countFromLocalStorage);
  //   }
  // }, []);

  // console.log("logs", {props, router});

  return (
    <>
      <h1>This is index.js</h1>
      <h3>id {router.query.id}</h3>
      <BackToHomeLink />
      <Link href="./articles/1">Article 1</Link>
    </>
  )
};

Page.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
