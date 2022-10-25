import NextLink from "next/link";

import { Layout, CourseListItem, elements as UI } from "@/components";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Courses({ courses }) {
  const metadata = {
    title: "Cursos de Programación Web Gratuitos",
  };

  return (
    <Layout type="page" metadata={metadata}>
      <UI.Text as="p" mb={8}>
        Aprende las últimas tecnologías web siguiendo los siguientes cursos en
        vídeo gratuitos.
      </UI.Text>
      {courses
        .map((course) => (
          <NextLink href={`/cursos/${course.slug}`} key={course.slug}>
            <a>
              <CourseListItem title={course.title} />
            </a>
          </NextLink>
        ))
        .reverse()}
    </Layout>
  );
}

export async function getStaticProps() {
  const courses = await getAllFilesFrontMatter("courses");

  return {
    props: { courses },
  };
}
