import "@/styles";
import { Head } from "minista/head";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";
import Banner from "@/sections/Banner";
import withBase from "@/utils/withBase";

export default function (props) {
  const { children, title, url, isPositionFixed } = props;

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }} title={`Stream Vibe | ${title}`}>
        <script src="/src/main.js" type="module"></script>
        <link rel="icon" href={withBase("favicon.ico?v=2")} sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={withBase("apple-touch-icon.png?v=2")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={withBase("favicon-32x32.png?v=2")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={withBase("favicon-16x16.png?v=2")}
        />
        <link rel="manifest" href={withBase("site.webmanifest")} />
      </Head>
      <Header url={url} isHeaderPositionFixed={isPositionFixed}></Header>
      <Content>
        {children}
        <Banner></Banner>
      </Content>
      <Footer></Footer>
    </>
  );
}
