import Head from "next/head"
import BackToHomeLink from "@/components/BackToHome"
import Layout from "@/components/layout"

console.log('FIRST_POST')

export default function FirstPost(props) {
    console.log('props', props)
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <BackToHomeLink />
        </Layout>
    )
}
