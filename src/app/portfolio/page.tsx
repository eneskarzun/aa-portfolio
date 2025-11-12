import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, portfolio } from "@/resources";
import { Projects } from "@/components/portfolio/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: portfolio.title,
    description: portfolio.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(portfolio.title)}`,
    path: portfolio.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={portfolio.path}
        title={portfolio.title}
        description={portfolio.description}
        image={`/api/og/generate?title=${encodeURIComponent(portfolio.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {portfolio.title}
      </Heading>
      <Projects />
    </Column>
  );
}
