import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "../assets/sidebarlogo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://www.pakkapass.in";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PakkaPass — Exam-Centric Learning App for Class 10, 11 & 12" },
      {
        name: "description",
        content:
          "PakkaPass is an exam-centric learning app for students of Class 10, 11 and 12. Access expert video lectures, digital notes, previous year papers and progress tracking in one place.",
      },
      { name: "author", content: "PakkaPass" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "JMZTNNVYv0Qyz93B2WNc6I5JfUiEldny3Jq9dYS-4Ck" },
      { name: "keywords", content: "PakkaPass, exam preparation app, Class 10 11 12, board exams, video lectures, digital notes, previous year papers, entrance exam preparation" },
      { name: "theme-color", content: "#6C3BE0" },
      { property: "og:title", content: "PakkaPass — an exam-centric App" },
      {
        property: "og:description",
        content:
          "Expert video lectures, notes, previous year papers and progress tracking for Class 10, 11 and 12 students.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PakkaPass" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${logo}` },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PakkaPass — an exam-centric App" },
      {
        name: "twitter:description",
        content:
          "Learn smarter for board and entrance exams with PakkaPass. Video lectures, notes, PYQs and analytics for Class 10–12.",
      },
      { name: "twitter:image", content: `${SITE_URL}${logo}` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: logo },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "PakkaPass",
  url: SITE_URL,
  logo: `${SITE_URL}${logo}`,
  description:
    "PakkaPass is an exam-centric learning app for students of Class 10, 11 and 12. Access expert video lectures, digital notes, previous year papers and progress tracking in one place.",
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
