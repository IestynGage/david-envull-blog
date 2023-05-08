import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'

const inter = Inter({ subsets: ['latin'] })

export default function Post({ postData }:any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          {/* <Date dateString={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }:any) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
