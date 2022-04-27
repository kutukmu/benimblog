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

  
  return <>
  
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`} strategy="afterInteractive"/>
<Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTAG}');
        `}
  </Script>
  <Layout>
    
    <DefaultSeo
          title="Flexdirection by Kerim Kutuk"
          description=""
          canonical="https://www.canonical.ie/"
          openGraph={{
            url: 'https://www.url.ie/a',
            title: 'Open Graph Title',
            description: 'Open Graph Description',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
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
  </>
}

export default MyApp
