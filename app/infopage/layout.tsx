import NavLinks from "@/app/ui/infopage/nav-links"

export default function Layout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="h-[100vh] mt-40 p-1 sm:mt-0 sm:flex justify-between font-serif text-lg">
      {children}
      <div className="w-[98vw] gap-1 fixed top-0 bg-white sm:bg-none sm:static sm:w-[15%] shrink-0 flex sm:flex-col justify-center sm:gap-3">
        <NavLinks />
      </div>
    </div>
  );
}