import Head from "next/head";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import utilStyles from "../../styles/Utils.module.css";
import { getAllPosts, getPost } from "@/lib/database/user";
import { Post } from '@/types/Post';

interface IndexProps {
  post: Post;
}

export default function PostPage(params:any) {
  console.log(params)
  // console.log("title", post.title);
  // console.log("content", post.content);

  return (
    <Layout>
      <Head>
        {/* <title>{post.title}</title> */}
      </Head>
      <article>
        <div className={utilStyles.centerItems}>
          <article
            className={`${utilStyles.centerItems} ${utilStyles.displayContent}`}
          >
            {/* <h1 style={{ textAlign: "center"}}>{post.title}</h1> */}
            <div>{/* <Date dateString={postData.date} /> */}</div>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
          </article>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  const post = await getPost(Number(params.id));

  // Pass data to the page via props
  return {
    props: {
      allPostsData: post,
    }
   };
}