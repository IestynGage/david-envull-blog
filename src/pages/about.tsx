import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import utilStyles from "../styles/Utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <Layout>
      <div className={utilStyles.centerItems} style={{ textAlign: "center" }}>
        <div
          className={utilStyles.centerItems}
          style={{ textAlign: "center", width: "50em" }}
        >
          <h1
            className={utilStyles.centerItems}
            style={{ textAlign: "center" }}
          >
            {" "}
            About me
          </h1>
          <p>
            Hello and welcome to my blog! My name is David Envull, and I am the
            Communications Director at CoreFiling, a dynamic SME company
            specializing in financial reporting software and services.
          </p>
          <p>
            With over a decade of experience in the communications industry, I
            have honed my skills in crafting effective messaging strategies that
            engage and inform audiences. As the Communications Director at
            CoreFiling, I am responsible for overseeing all aspects of our
            companys external and internal communications, from public relations
            and marketing to employee engagement and corporate social
            responsibility.
          </p>
          <p>
            My passion for effective communication extends beyond the workplace.
            I am also an avid writer and public speaker, regularly sharing my
            insights and experiences with others through a variety of channels.
            Whether its through a thought-provoking blog post or an engaging
            keynote speech, I am always eager to connect with others and share
            my knowledge and expertise.
          </p>
          <p>
            In my free time, I enjoy exploring the great outdoors and staying
            active through activities like hiking, cycling, and yoga. I also
            enjoy traveling and experiencing new cultures and cuisines.
          </p>
          <p>
            I am excited to share my insights and perspectives with you through
            this blog. Whether youre interested in the latest trends in
            corporate communications, tips for effective public speaking, or
            simply want to learn more about life as a Communications Director at
            a fast-paced SME company, youll find plenty of valuable information
            and resources here. Thank you for joining me on this journey!
          </p>
        </div>
      </div>
    </Layout>
  );
}
