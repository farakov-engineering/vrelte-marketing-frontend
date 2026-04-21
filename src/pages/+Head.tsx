export default function Head() {
  const title =
    "Vrelte — AI That Texts Back and Qualifies Your Contractor Leads";

  const description =
    "Stop losing jobs to whoever answered first. Vrelte instantly texts your leads, qualifies them, and hands your team cleaner, higher-intent opportunities.";

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="AI lead response, contractor leads, HVAC leads, plumbing leads, lead automation, SMS lead response, AI lead qualification, small business automation"
      />

      <meta name="author" content="Vrelte" />
      <link rel="canonical" href="https://vrelte.com/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vrelte.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://vrelte.com/og-image.png" />
      <meta property="og:site_name" content="Vrelte" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://vrelte.com/og-image.png" />

      {/* Structured Data - SaaS Product */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Vrelte",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://vrelte.com",
          description,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Instant SMS lead response",
            "AI lead qualification",
            "Automated follow-ups",
            "Clean lead handoff",
            "Lead pipeline dashboard",
          ],
        })}
      </script>

      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Vrelte",
          url: "https://vrelte.com",
        })}
      </script>
    </>
  );
}
