import styles from './Styles.module.sass'
export default async function Layout({ children }: { children: React.ReactNode }) {


  return (
    <main className={styles.payLayout}>
      {children}
    </main>
  )
}