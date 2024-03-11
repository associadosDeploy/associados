import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components';

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();

  //   const page = renderPage((App) => (props) =>
  //     sheet.collectStyles(<App {...props} />),
  //   );

  //   const styleTags = sheet.getStyleElement();

  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}