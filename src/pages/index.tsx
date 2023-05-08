import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      Welcome to the official blog of David Envull, Communications Director at CoreFiling. 
      With over a decade of experience in the communications industry, 
      David is a seasoned expert in crafting effective messaging strategies that engage and inform audiences.
    </Layout>
  )
}
