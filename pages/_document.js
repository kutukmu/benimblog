import { NextSeo } from 'next-seo';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <NextSeo
          title={"Flex Direction by Kerim Kutuk"}
          description="Flex Direction: A blogging website for nerds and average Joes. Helping you lose weight, get stronger, live better "
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;