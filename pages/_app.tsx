import MainLayout from "@/layout/mainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <div>
        {/* <MainLayout> */}
        <div className="">
          <Component {...pageProps} />
        </div>
        {/* </MainLayout> */}
      </div>
    </>
  );
}
2;
