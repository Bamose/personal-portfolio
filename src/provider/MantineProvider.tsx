"use client";

import React from "react";
import { generateColors } from "@mantine/colors-generator";
import {
  ColorSchemeScript,
  MantineProvider,
  type MantineThemeOverride,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootStyleRegistry({
  color,
  radius,
  children,
}: {
  color: string;
  radius: string;
  children: React.ReactNode;
}) {
  const theme: Partial<MantineThemeOverride> = baseTheme({
    primaryColor: color,
    radius: radius,
  });
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <ProgressBar shallowRouting options={{ showSpinner: false }} />
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </>
  );
}

const backgroundColor = "var(--primary-color-background)";
const buttonColor = "linear-gradient(to right, #ef4444, #f97316)";
const baseTheme = ({
  primaryColor,
  radius,
}: {
  primaryColor: string;
  radius: string;
}): Partial<MantineThemeOverride> => {
  return {
    defaultRadius: radius ?? "8px",
    primaryColor: "primary",
    primaryShade: 6,
    fontFamily: "var(--font-inter)",
    headings: {
      fontFamily: "var(--font-inter)",
    },

    breakpoints: {
      xs: "36rem",
      sm: "48rem",
      md: "62rem",
      lg: "75rem",
      xl: "87.5rem",
    },

    colors: {
      primary: generateColors(primaryColor),
    },

    other: {
      gradients: {
        primary: { from: "#ef4444", to: "#f97316", deg: 45 },
      },
    },

    components: {
      Container: {
        defaultProps: {
          sizes: {
            xs: 540,
            sm: 720,
            md: 960,
            lg: 1140,
            xl: 1320,
          },
        },
      },
      Button: {
        defaultProps: {
          size: "sm",
          gradient: { from: "#ef4444", to: "#f97316", deg: 45 },
        },
        styles: {
          buttonColor,
        },
      },
      Badge: {
        defaultProps: {
          size: "sm",
          gradient: { from: "#ef4444", to: "#f97316", deg: 45 },
        },
        styles: {
          buttonColor,
        },
      },
      Card: {
        defaultProps: {
          withBorder: true,
        },
        styles: {
          root: {
            backgroundColor: "#1f1f1f",
          },
        },
      },
      Paper: {
        defaultProps: {
          withBorder: true,
        },
        styles: {
          root: {
            backgroundColor: "#1f1f1f",
          },
        },
      },
      Input: {
        defaultProps: {
          size: "sm",
        },
        styles: {
          input: {
            backgroundColor,
          },
        },
      },
      TextInput: {
        defaultProps: {
          size: "sm",
        },
      },
      Textarea: {
        defaultProps: {
          size: "sm",
          minRows: 3,
        },
      },
      NumberInput: {
        defaultProps: {
          size: "sm",
        },
      },
      Select: {
        defaultProps: {
          size: "sm",
        },
      },
      PasswordInput: {
        defaultProps: {
          size: "sm",
        },
      },
      Breadcrumbs: {
        styles: {
          breadcrumb: {
            fontSize: "14px",
          },
        },
      },
      Modal: {
        defaultProps: {
          closeOnClickOutside: false,
        },
        styles: {
          body: {
            paddingTop: 16,
            backgroundColor,
          },
        },
      },
      AppShell: {
        styles: {
          main: {
            backgroundColor: backgroundColor,
          },
          header: {
            height: 40,
          },
        },
      },
    },
  };
};
