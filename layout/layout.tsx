export default function Layout({ children }: any) {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className=" py-0 ">{children}</div>
        </div>
    </div>
  );
}
