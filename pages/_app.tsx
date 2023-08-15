import '@/styles/globals.css'
import {Component} from "react"
import type { AppProps } from 'next/app'
import Layout from "../components/layout"

type ComponentProps = {
  getLayout: (page: Component) => Component
}

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: Component) => page);
  return getLayout(<Component {...pageProps} />);
}
