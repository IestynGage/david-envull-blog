import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import utilStyles from "../../styles/Utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Post({ postData }: any) {
  console.log(utilStyles)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={utilStyles.centerItems}>
          <div
            className={`${utilStyles.centerItems} ${utilStyles.displayContent}`}
          >
            <h1 style={{ textAlign: "center"}}>{postData.title}</h1>
            <div>{/* <Date dateString={postData.date} /> */}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
