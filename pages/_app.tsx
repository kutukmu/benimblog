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
                  url: 'https://www.flexdirection.com/',
                  site_name: 'flexdirection',
                }}
                twitter={{
                  handle: '@flexdirection',
                  site: '@flexdirection',
                  cardType: 'summary_large_image',
                }}
              />
            <Component {...pageProps} />
         </Layout>
}

export default MyApp
