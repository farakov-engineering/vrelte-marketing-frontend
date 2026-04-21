export default function Head() {
  const title =
    "Vrelte — AI That Texts Back and Qualifies Your Plumber Leads";

  const description =
    "Vrelte instantly texts new plumbing leads, qualifies them, follows up automatically, and helps plumbing companies book more jobs faster.";

  const url = "https://vrelte.com/plumbing";
  const image = "https://vrelte.com/logo.png";

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="plumbing lead response, plumbing leads, plumber AI, plumbing automation, plumbing SMS response, plumbing appointment booking, emergency plumbing leads, plumber marketing automation, AI for plumbers"
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

      {/* Structured Data */}
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
            "Instant SMS response for plumbing leads",
            "AI qualification for plumbing jobs",
            "Automated follow-ups for service requests",
            "Appointment booking automation",
            "Lead pipeline dashboard",
          ],
        })}
      </script>

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
