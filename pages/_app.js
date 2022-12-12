import { globalStyles } from "../src/css/stitches.global"

function MyApp({ Component, pageProps }) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
