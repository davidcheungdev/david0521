// reusing css from home module
import styles from '../styles/Home.module.css'

export default function Page1() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test page 1
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Go to home</p>
          </a>

          <a href="/pages/page2" className={styles.card}>
            <h2>Sample page 2 &rarr;</h2>
            <p>Go to Sample page 2</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/commitdev/zero" target="_blank">
          Powered by{'Zero'}
        </a>
      </footer>
    </div>
  )
}
