import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import DavidNavBar from "./DavidNavBar/DavidNavBar";

export default function Layout({
  children,
  headTitle,
  headDescription,
}: {
  children: React.ReactNode;
  headTitle?: string;
  headDescription?: string;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={headDescription ?? "David Envull blog"}
        />
        <meta name="og:title" content={headTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <DavidNavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}
