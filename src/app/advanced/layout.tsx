import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced AI Track",
  description: "Ship 3 SaaS products, fine-tune LLMs, and deploy on cloud GPU clusters. Learn advanced AI engineering.",
  alternates: {
    canonical: "/advanced",
  },
};

export default function AdvancedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
