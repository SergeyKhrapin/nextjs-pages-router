import BackToHomeLink from "@/components/BackToHome"
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Article(props) {
    const router = useRouter()

    console.log("props", props);
    console.log("router", router);

    return (
        <>
            <h1>This is [id].js</h1>
            <h3>id { router.query.id }</h3>
            <div>
              <Link href="/articles">Go to articles</Link>
            </div>
            <BackToHomeLink />
        </>
    )
}
