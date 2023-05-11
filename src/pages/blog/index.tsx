import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/Utils.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Index({ allPostsData }:any) {
  return (
    <Layout>
      <Head>
        {/* <title>{siteTitle}</title> */}
      </Head>
      <section className={utilStyles.centerItems}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }:any) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small>
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
