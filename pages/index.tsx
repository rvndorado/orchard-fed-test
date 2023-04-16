import Head from "next/head";
import Component01 from "@/components/Component01";
import Component02 from "@/components/Component02";

export default function Home() {
  return (
    <>
      <Head>
        <title>Orchard FED test</title>
        <meta name="description" content="Orchard FED test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component01 />
        <Component02 />
      </main>
    </>
  );
}
