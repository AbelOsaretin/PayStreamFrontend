// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { AuthProvider } from "@/lib/auth";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "PayStream",
//   description: "Real-time payment streaming platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* <AuthProvider> */}
//         {children}
//         {/* </AuthProvider> */}
//       </body>
//     </html>
//   );
// }

import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { getMetadata } from "@/utils/getMetadata";
import { headers } from "next/headers";
import ContextProvider from "@/context";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = getMetadata({
  title: "PayStream",
  description: "Real-time payment streaming platform",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen antialiased bg-white", fontSans.variable)}
      >
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
