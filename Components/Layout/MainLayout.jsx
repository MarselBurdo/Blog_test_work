import Link from "next/link";
import Head from "next/head";

import { Navbar } from "../Styled/styled";
import GlobalStyle from "../Styled/theme";

export function MainLayouts({ children, title = "Test Work" }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="test work, html, htmlacademy" />
        <meta name="description" content="htmlacademy" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Navbar>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </Navbar>
      <main>{children}</main>
    </>
  );
}
