import "@/styles";
import { Head } from "minista/head";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";

export default function (props) {
  const { children, title } = props;

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }} title={`Stream Vibe | ${title}`}>
        <script src="/src/main.js" type="module"></script>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </>
  );
}
