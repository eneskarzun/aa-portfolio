import { Flex, Meta, Schema } from "@once-ui-system/core";
import CertificateView from "@/components/certificate/CertificateView";
import { baseURL, certificate, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: certificate.title,
    description: certificate.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certificate.title)}`,
    path: certificate.path,
  });
}

export default function Certificate() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certificate.title}
        description={certificate.description}
        path={certificate.path}
        image={`/api/og/generate?title=${encodeURIComponent(certificate.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${certificate.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <CertificateView />
    </Flex>
  );
}
