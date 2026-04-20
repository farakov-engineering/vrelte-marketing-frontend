export default function Head() {
  const title = "HVAC Lead Response AI | Instantly Text HVAC Leads | Vrelte";

  const description =
    "Vrelte instantly texts new HVAC leads, qualifies them, follows up automatically, and helps HVAC companies book more installs and service calls.";

  const url = "https://vrelte.com/hvac";
  const image = "https://vrelte.com/logo.png";

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="HVAC lead response, HVAC leads, HVAC marketing automation, HVAC AI, heating and cooling leads, HVAC appointment booking, furnace repair leads, AC repair leads, HVAC SMS automation, AI for HVAC companies"
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
            "Instant SMS response for HVAC leads",
            "AI qualification for heating & cooling jobs",
            "Automated follow-ups for service calls",
            "Appointment booking automation",
            "Lead pipeline dashboard",
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "HVAC Lead Response AI | Vrelte",
          url,
          description,
        })}
      </script>
    </>
  );
}
