import Head from 'next/head';
import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '..>?/styles/utils.module.css';
import Link from 'next/link';

export default function Layout({
  children,
  headTitle,
  headDescription,
}: {
  children: React.ReactNode
  headTitle?: string;
  headDescription?: string;
}) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={headDescription ?? "David Envull blog"}
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={headTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <h2 >
          <Link href="/" >
            David Envull
          </Link>
        </h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
