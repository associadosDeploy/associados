import Document, { Html, Head, Main, NextScript } from 'next/document'

// import { ServerStyleSheet } from 'styled-components';

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  // static getInitialProps({ renderPage }:any) {
  //   // Step 1: Create an instance of ServerStyleSheet
  //   const sheet = new ServerStyleSheet();

  //   // Step 2: Retrieve styles from components in the page
  //   const page = renderPage((App:any) => (props:any) =>
  //     sheet.collectStyles(<App {...props} />),
  //   );

  //   // Step 3: Extract the styles as <style> tags
  //   const styleTags = sheet.getStyleElement();

  //   // Step 4: Pass styleTags as a prop
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
          <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
        </body>
      </Html>
    );
  }
}