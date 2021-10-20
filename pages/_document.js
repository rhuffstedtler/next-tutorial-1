import Document, {Html, Head, Main, NextScript} from 'next/document';
import { render } from 'nprogress';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="My programming portfolio."/>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style jsx>{`
          body {
            font-family: 'Roboto', sans-serif;

          }
        `}</style>

      </Html>
    )
  }
}