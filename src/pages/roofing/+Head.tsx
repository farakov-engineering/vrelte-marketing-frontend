export default function Head() {
  const title =
    "Vrelte — AI That Texts Back and Qualifies Your Roofer Leads";

  const description =
    "Vrelte instantly texts new roofing leads, qualifies them, follows up automatically, and helps roofing companies book more estimates faster.";

  const url = "https://vrelte.com/roofing";
  const image = "https://vrelte.com/logo.png";

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="roofing lead response, roofing lead automation, roofing leads, roofing company AI, roofing estimate booking, roofing SMS automation, contractor lead response, roofing appointment booking, roofing sales automation, AI for roofers"
      />

      <meta name="author" content="Vrelte" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Vrelte" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data - Roofing SaaS */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Vrelte",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url,
          description,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Instant SMS response for roofing leads",
            "AI lead qualification for roofing companies",
            "Automated follow-ups for estimate requests",
            "Appointment booking automation",
            "Lead pipeline dashboard",
          ],
        })}
      </script>

      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          url,
          description,
        })}
      </script>
    </>
  );
}
