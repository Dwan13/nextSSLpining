import Link from "next/link";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import styles from "./Header.module.sass";
import dynamic from "next/dynamic";
import { LogOutForm } from "app/components/logout";

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          {customer && (
            <>
              <li>
                <Link href="/simulador">Credit simulator</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (
          <>
            <Link href="/my-account">Hi! {customer.firstName}</Link>{" "}
            <LogOutForm />
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </header>
  );
};
