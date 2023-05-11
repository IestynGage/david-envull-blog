import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";
import { Card, Toast } from "react-bootstrap";
import { useState } from "react";
import utilStyles from "../../styles/Utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [displayToast, setDisplayToast] = useState(false);

  return (
    <Layout>
      <Toast
        show={displayToast}
        style={{ position: "absolute", zIndex: "1000", right: "40px" }}
        onClose={() => setDisplayToast(false)}
      >
        <Toast.Header>
          <strong className="me-auto">Message sender</strong>
        </Toast.Header>
        <Toast.Body>Message successfully sent.</Toast.Body>
      </Toast>
      <div className={utilStyles.centerItems}>
        <h1> Contact me</h1>
        <p> Use the below form to contact me. </p>
        <Card style={{ width: "50rem", padding: "1em", margin: "1em" }}>
          <ContactUsForm setToast={setDisplayToast} />
        </Card>
      </div>
    </Layout>
  );
}
