import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import utilStyles from "../styles/Utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> David Envull blog </title>
      </Head>
      <div className={`${utilStyles.centerItems}`}>
        <p className={`${utilStyles.displayContent}`}>
          Welcome to the official blog of David Envull, Communications Director at
          CoreFiling. With over a decade of experience in the communications
          industry, David is a seasoned expert in crafting effective messaging
          strategies that engage and inform audiences.
        </p>
      </div>
    </Layout>
  );
}
