/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  env:{
    NEXT_PUBLIC_GOOGLE_ANALYTICS : process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    GRAPHCMS_TOKEN:process.env.GRAPHCMS_TOKEN,
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT:process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
  }

}
