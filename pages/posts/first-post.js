import {useState, useEffect} from "react"
import Head from "next/head"
import BackToHomeLink from "@/components/BackToHome"
import Layout from "@/components/layout"

// console.log('FIRST_POST')

export default function FirstPost(props) {
    const printDocument = () => {
        window.print();
      }

    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <br/>
            <button onClick={printDocument}>Print document</button>
            <br/>
            <br/>
            <BackToHomeLink />
        </Layout>
    )
}
