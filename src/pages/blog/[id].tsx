import Head from "next/head";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import utilStyles from "../../styles/Utils.module.css";


export default function Post({ postData }: any) {
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={utilStyles.centerItems}>
          <article
            className={`${utilStyles.centerItems} ${utilStyles.displayContent}`}
          >
            <h1 style={{ textAlign: "center"}}>{postData.title}</h1>
            <div>{/* <Date dateString={postData.date} /> */}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
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
