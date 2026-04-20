import { useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";

export default function ErrorPage() {
  const pageContext = usePageContext();

  useEffect(() => {
    if (pageContext.is404) {
      window.location.replace("/");
    }
  }, [pageContext.is404]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-gray-500">Redirecting...</p>
    </div>
  );
}
