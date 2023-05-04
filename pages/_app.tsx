import MainLayout from "@/layout/mainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <div className="container 2xl : mx-auto  max-w-[1830px]	">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </>
  );
}
