import BackToHomeLink from "@/components/BackToHome"
import { useRouter } from "next/router"

export default function Article3() {
    const router = useRouter()
    return (
        <>
            <h1>This is [...id].js</h1>
            <h3>id { router.query.id }</h3>
            <BackToHomeLink />
        </>
    )
}
