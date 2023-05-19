import Head from "next/head";
import { Anek_Latin } from "next/font/google";
import Layout from "@/components/layout";
import utilStyles from "../../styles/Utils.module.css";
import capybaraStyles from "../../styles/Capybara.module.css";
import indexStyles from "../../styles/RootIndex.module.css";
import Image from 'next/image';

const anek = Anek_Latin({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Capybara </title>
      </Head>
      <div className={`${utilStyles.centerItems} ${anek.className}`} style={{ textAlign: "center" }}>
        <div className={`${capybaraStyles.centerItems} `} >
          <h1 style={{ textAlign: "center"}}> Capybara</h1>
          <div>
              A large rodent, with a gentle face <br/>
              A friend to all, in every place <br/>
              They love to swim, and eat their hay  <br/>
              And they are always happy, every day  <br/>
          </div>
        </div>
        <Image
          src="/images/capybara/drink-water.jpg"
          className={indexStyles.centerItems}
          height={300}
          width={450}
          alt={""}
          />
        <Image
          src="/images/capybara/family.jpg"
          className={indexStyles.centerItems}
          height={300}
          width={450}
          alt={""}
          />
        <Image
          src="/images/capybara/food-on-nose.jpg"
          className={indexStyles.centerItems}
          height={450}
          width={300}
          alt={""}
          />
        <Image
          src="/images/capybara/in-water.jpg"
          className={indexStyles.centerItems}
          height={450}
          width={300}
          alt={""}
          />
        <Image
          src="/images/capybara/on-rock.jpg"
          className={indexStyles.centerItems}
          height={300}
          width={450}
          alt={""}
          />
        <Image
          src="/images/capybara/with-hat.jpg"
          className={indexStyles.centerItems}
          height={400}
          width={300}
          alt={""}
          />
          Capybara is life.
      </div>
    </Layout>
  );
}
