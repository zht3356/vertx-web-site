import Head from "next/head"
import NavBar from "./NavBar"

const Header = ({ title }) => (
  <header>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="Vert.x | Reactive applications on the JVM"/>
      <meta name="robots" content="index,follow"/>
      <link rel="shortcut icon" href="/favicons/favicon.ico"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png"/>
      <link rel="alternate" type="application/rss+xml" href="/feed/rss.xml" />
      <link rel="alternate" type="application/atom+xml" href="/feed/atom.xml" />
      <link rel="alternate" type="application/json" href="/feed/feed.json" />
      <title>{title && title + " | "}Eclipse Vert.x</title>
    </Head>
    <NavBar />
  </header>
)

export default Header
