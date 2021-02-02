import * as React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="es-AR">
        <Head>
          <link
            rel="preload"
            href="/fonts/Mukta/Mukta-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
