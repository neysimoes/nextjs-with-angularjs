import Head from 'next/head'
import styles from '../styles/Home.module.css'
import template from '../public/js/template'
import mainCss from '../styles/main.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style
            dangerouslySetInnerHTML={{ __html: mainCss }}
          />
        <script type="text/javascript" src="/static/js/angular.min.js"></script>
        <script type="text/javascript" src="/static/js/angular-app.js"></script>
      </Head>

      <main className={styles.main}>
        <div dangerouslySetInnerHTML={{ __html: template }}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
