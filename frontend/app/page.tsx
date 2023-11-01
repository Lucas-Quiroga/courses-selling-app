import { getCourses } from "@/coreComponents/helper/apiCalls";
import { HomeWeb } from "@/components";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main>
      <HomeWeb courses={courses} />
    </main>
  );
}
