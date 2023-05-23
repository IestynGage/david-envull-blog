import Head from "next/head";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import utilStyles from "../../styles/Utils.module.css";
import { getAllPosts, getPost } from "@/lib/database/user";
import { Post } from '@/types/Post';


interface PostPageProps {
  post: Post;
}

export default function PostPage({ post } :PostPageProps) {

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <div className={utilStyles.centerItems}>
          <article
            className={`${utilStyles.centerItems} ${utilStyles.displayContent}`}
          >
            <h1 style={{ textAlign: "center"}}>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </article>
    </Layout>
  );
}

interface PostServerProps {
  props: {
    post: Post;
  }
}

export async function getServerSideProps({ params }: any): Promise<PostServerProps> {
  const post = await getPost(Number(params.id));

  // Pass data to the page via props
  return {
    props: {
      post: post,
    }
   };
}