import '../styles/global.scss'
import type { AppProps } from 'next/app'
import React,{useEffect, useState} from 'react'
import {Layout} from "../components"
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
          <DefaultSeo
                openGraph={{
                  type: 'website',
                  locale: 'en_IE',
                  url: 'https://www.url.ie/',
                  site_name: 'SiteName',
                }}
                twitter={{
                  handle: '@handle',
                  site: '@site',
                  cardType: 'summary_large_image',
                }}
              />
            <Component {...pageProps} />
         </Layout>
}

export default MyApp
