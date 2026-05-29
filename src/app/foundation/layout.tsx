import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation AI Track",
  description: "Learn Python, math for ML, and build real neural networks from scratch. Perfect for beginners and non-technical founders.",
  alternates: {
    canonical: "/foundation",
  },
};

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
