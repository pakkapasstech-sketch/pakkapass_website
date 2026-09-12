import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | PakkaPass — Exam-Centric Learning App" },
      {
        name: "description",
        content:
          "Official Privacy Policy of PakkaPass. Learn how we collect, use, protect, and handle personal data and student learning information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});
