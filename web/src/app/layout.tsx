import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Roboto_Flex } from "next/font/google";
import "./globals.css";

const primaryArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-primary",
});

const supportingLatin = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-supporting",
});

export const metadata: Metadata = {
  title: "مدارج السالكين إلى الله | دليل الاستقامة في زمن الفتن",
  description:
    "كتاب رقمي شامل يقدم خطوات عملية ونصائح إيمانية لإحياء الوعي بوجوب العودة إلى الله والثبات على طريق الهدى وسط الفتن والمغريات.",
  keywords: [
    "مدارج السالكين",
    "العودة إلى الله",
    "الثبات على الطاعة",
    "كتاب ديني رقمي",
    "زمن الفتن",
  ],
  authors: [{ name: "فريق مدارج السالكين" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${primaryArabic.variable} ${supportingLatin.variable} antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(252,237,222,0.65),_transparent_65%)]">
          {children}
        </div>
      </body>
    </html>
  );
}
