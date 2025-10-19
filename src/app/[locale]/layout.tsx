import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type ReactNode, Suspense } from "react";
import type { Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import RootStyleRegistry from "@/provider/MantineProvider";
import { generateColors } from "@/utils/color";
import { cn } from "@/utils/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL || "http://anellabekena.com"
    ),
    title: {
      template: `%s | Anella Bekena`,
      default: "Anella Bekena",
    },
    description:
      "Full stack developer building scalable multi-tenant platforms on Next.js, Nest.js, and AWS.",
    openGraph: {
      title: "Anella Bekena",
      description:
        "Full stack developer building scalable multi-tenant platforms on Next.js, Nest.js, and AWS.",
      type: "website",
      locale: params.locale,
      images: [
        {
          url: "/default-og-image.png",
        },
      ],
    },
  };
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};
export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const [messages] = await Promise.all([getMessages()]);

  const defaultTheme = "#f25336";

  const colorArray = generateColors(defaultTheme);
  const radius = "10px";

  const styles: Record<string, string> = {
    "--primary-color-default": defaultTheme,
    "--primary-radius": radius,
    "--primary-color-background": "#ffffff",
    backgroundColor: "#ffffff",
  };

  colorArray.forEach((color: string, index: number) => {
    styles[`--primary-color-${index}`] = color;
  });

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body
        className={cn("h-screen w-full", inter.className, robotoMono.variable)}
        style={styles}
        suppressHydrationWarning={true}
      >
        <NuqsAdapter>
          <NextIntlClientProvider messages={messages}>
            <RootStyleRegistry color={defaultTheme} radius={radius}>
              <Suspense>{children}</Suspense>
            </RootStyleRegistry>
          </NextIntlClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
