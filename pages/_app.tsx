import MainLayout from "@/layout/mainLayout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <div>
        {/* <Signin /> */}
        <MainLayout>
          <div className="desktop:mx-auto max-w-[1830px] mx-6">
            <Component {...pageProps} />
          </div>
        </MainLayout>
      </div>
    </>
  );
}
