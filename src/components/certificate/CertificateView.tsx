"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { certificate } from "@/resources";

export default function CertificateView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {certificate.images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          // sizes="(max-width: 560px) 100vw, 50vw"
          sizes="100vw"
          key={index}
          radius="m"
          // aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          style={{
            width: "100%",
            height: "auto", // biar proporsional
            objectFit: "cover", // kalau mau isi penuh tapi tetap proporsional
          }}
        />
      ))}
    </MasonryGrid>
  );
}
