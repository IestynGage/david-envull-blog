import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { getSortedPostsData } from '@/lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/Utils.module.css'
import { Card } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Index({ allPostsData }:any) {
  return (
    <Layout>
      <Head>
        <title> David Envull posts </title>
      </Head>
      <section className={utilStyles.centerItems}>
        <h2>Blog</h2>
        <ul className={utilStyles.centerItems}>
          {allPostsData.map(({ id, date, title }:any) => (
            <Card key={id} className={utilStyles.centerItems} as="li" style={{width: '34em', padding: '1em', marginBottom:'1em'}}>
              <Card.Title style={{textAlign:'center'}}>
                <Link href={`/blog/${id}`}>{title}</Link>
              </Card.Title>
              {/* <Card.Body className={utilStyles.centerItems + " " + utilStyles.centerItems}>
                {date}
              </Card.Body> */}
            </Card>
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
