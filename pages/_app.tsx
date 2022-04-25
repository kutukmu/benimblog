import '../styles/global.scss'
import type { AppProps } from 'next/app'
import React,{useEffect, useState} from 'react'
import {Layout} from "../components"
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as ga from "../lib/ga"
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const GTAG = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  console.log(GTAG)
  
  return <>
  
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`} strategy="afterInteractive"/>
<Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GTAG});
        `}
  </Script>
  <Layout>
    
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
  </>
}

export default MyApp
