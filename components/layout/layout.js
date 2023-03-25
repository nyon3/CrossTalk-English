import Head from "next/head";
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
import styles from "./styles.module.css";
const Layout = ({ children }) => (
  <div className={styles.MobileOptimized}>
        
    <Head>
       <title>My App</title>
          
    </Head>
    {/*     <Header /> */}
          {children}
    {/* <Footer /> */}
      
  </div>
);
export default Layout;
