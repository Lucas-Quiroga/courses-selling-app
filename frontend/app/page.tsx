import { Sidebar, Banner, SearchBar, Cards } from "@/components";

export default function Home() {
  return (
    <main className="relative flex mx-auto w-full">
      <div className="flex">
        <div className="relative ">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full">
            <Banner />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
          <div className="flex flex-wrap w-full justify-center items-center mx-auto gap-5 grow-1">
            <div className="grow">
              <Cards />
            </div>
            <div className="grow">
              <Cards />
            </div>
            <div className="grow">
              <Cards />
            </div>
            <div className="grow">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
