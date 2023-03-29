import Head from "next/head";
import Navbar from "@/components/Navbar/index";
// import Footer from './Footer.jsx'
import styles from "./styles.module.css";
import Footer from "../Footer";
const Layout = ({ children }) => (
  <div className={styles.MobileOptimized}>
    <Head>
      <title>My App</title>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
);
export default Layout;
