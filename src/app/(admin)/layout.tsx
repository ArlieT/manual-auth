import "../../app/globals.css";
import SessionWrapper from "../Sessionwrapper";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>{children}</body>
      </SessionWrapper>
    </html>
  );
}
