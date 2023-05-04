import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
