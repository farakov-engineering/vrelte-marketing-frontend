export default function Head() {
  const title =
    "Vrelte - AI Lead Qualification for HVAC, Roofing, and Plumbing";

  const description =
    "Vrelte catches the contractor leads your phone and inbox are dropping, then answers, qualifies, routes, and books HVAC, roofing, and plumbing jobs 24/7.";

  const url = "https://vrelte.com";
  const image = "https://vrelte.com/logo.png";

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="AI lead qualification, contractor call answering, HVAC AI receptionist, roofing lead qualification, plumbing lead qualification, missed calls, emergency dispatch, contractor appointment booking"
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
            "AI call answering for contractors",
            "Lead qualification for HVAC, roofing, and plumbing jobs",
            "Emergency routing to on-call technicians",
            "Calendar booking automation",
            "CRM and text lead handoff",
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
