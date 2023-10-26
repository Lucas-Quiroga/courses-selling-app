import { Sidebar, Banner, SearchBar, Cards } from "@/components";
import { getCourses } from "@/coreComponents/helper/apiCalls";

type Course = {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: number;
};

export default async function Home() {
  const courses = await getCourses();

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
            {courses.length > 0 ? (
              courses.map((course: Course, index: any) => (
                <Cards
                  key={index}
                  image={course.image}
                  name={course.name}
                  description={course.description}
                  price={course.price}
                  _id={course._id}
                />
              ))
            ) : (
              <div>Not available courses</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
