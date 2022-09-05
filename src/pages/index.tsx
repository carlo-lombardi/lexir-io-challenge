import Head from "next/head";
import Nav from "../components/nav";
import Main from "@components/main";
import Footer from "@components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
