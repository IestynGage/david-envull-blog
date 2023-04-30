import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm'
import { Card } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <Layout>
      <p> About me</p>
    </Layout>
  )
}
