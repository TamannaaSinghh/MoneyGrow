import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ padding: 40, fontFamily: "system-ui, sans-serif", maxWidth: 640 }}>
        <h1 style={{ fontSize: 22, marginBottom: 12 }}>Sanity Studio isn’t configured yet</h1>
        <p style={{ lineHeight: 1.6 }}>
          Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code>, then restart
          the dev server.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
