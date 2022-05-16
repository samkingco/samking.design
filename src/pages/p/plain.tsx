import Link from "next/link";
import { ImageCarousel } from "../../components/ImageCarousel";
import { SocialMeta } from "../../components/SocialMeta";

export default function Plain() {
  return (
    <>
      <SocialMeta
        title="Plain « Sam King"
        description="Product Design and Design Systems for Plain, a modern customer service tool."
        socialImage="plain/og-image.png"
      />

      <main>
        <p>
          <Link href="/">
            <a>Back</a>
          </Link>
        </p>
        <h1>Plain</h1>
        <p className="subdued">Product Design and Design Systems</p>
        <p>
          Plain is a modern customer service tool. It's built around being fast
          and workflow driven, allowing businesses to spend more time helping
          customers and less time managing tickets.
        </p>
        <p>
          <a href="https://plain.com">plain.com</a>
        </p>

        <ImageCarousel
          images={[
            {
              src: "/plain/01 - plain - customer queue.png",
              alt: "Customer queue view of the Plain advisor app",
            },
            {
              src: "/plain/02 - plain - customer page.png",
              alt: "Customer page with timeline and issue information in the Plain advisor app",
            },

            {
              src: "/plain/03 - plain - cmd + K.png",
              alt: "CMD + K modal view allowing advisors to perform quick actions related to a customer",
            },

            {
              src: "/plain/04 - plain - workspace settings.png",
              alt: "Workspace settings for the Plain advisor app",
            },

            {
              src: "/plain/05 - plain - snippets.png",
              alt: "Snippets settings for the Plain advisor app",
            },

            {
              src: "/plain/06 - plain - members.png",
              alt: "Member settings for the Plain advisor app",
            },
          ]}
        />
      </main>
    </>
  );
}
