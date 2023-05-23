import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/Utils.module.css";
import { Card } from "react-bootstrap";
import { PrismaClient } from "@prisma/client";
import { getAllPosts } from "@/lib/database/user";
import {
  GetStaticPropsResult,
} from "next";
import { Configuration, OpenAIApi } from "openai";

interface Post {
  id: number;
  title: string;
}

interface IndexProps {
  allPostsData: Post[];
  date: string;
  a?: any;
}

export default function Index({ allPostsData, date, a }: IndexProps) {
  console.log(date);
  console.log(a);

  return (
    <Layout>
      <Head>
        <title> David Envull posts </title>
      </Head>
      <section className={utilStyles.centerItems}>
        <h2>Blog</h2>
        <p> Last generated {date} </p>
        <ul className={utilStyles.centerItems} style={{ padding: "0" }}>
          {allPostsData.map(({ id, title }: any) => (
            <Card
              key={id}
              className={utilStyles.centerItems}
              as="li"
              style={{
                width: "min(80%, 34em)",
                padding: "1em",
                marginBottom: "1em",
              }}
            >
              <Card.Title style={{ textAlign: "center" }}>
                <Link href={`/blog/${id}`}>{title}</Link>
              </Card.Title>
            </Card>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexProps>
> {

  const config = new Configuration({
    apiKey: process.env.OPEN_API_KEY
  });

  const openai = new OpenAIApi(config);

  // const result = await openai.listModels();
  // console.log(result.data)
  let result = undefined;
  try {
    result = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: "create a blog"
    }) 
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
  const posts: Post[] = await getAllPosts();
  const date = new Date();
  
  return {
    props: {
      allPostsData: posts,
      date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      a: result?.data,
    },
    revalidate: 30,
  };
}
