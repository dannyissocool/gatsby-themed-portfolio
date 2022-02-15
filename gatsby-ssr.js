import React from "react";
import { COLORS } from "./constants";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
        (function() {
            const getInitialColorMode = () => {
                const persistedColorPreference = window.localStorage.getItem("color-mode");
                const hasPersistedPreference = typeof persistedColorPreference === "string";

                if (hasPersistedPreference) {
                  return persistedColorPreference; // If user has preference saved, use that
                }

                const mql = window.matchMedia("(prefers-color-scheme: dark)");
                const hasMediaQueryPreference = typeof mql.matches === "boolean";

                if (hasMediaQueryPreference) {
                  return mql.matches ? "dark" : "light"; // If user has browser preference saved, use that
                }

                return "light"; // Else, use light theme
            };

            const colorMode = getInitialColorMode();
            
            const root = document.documentElement;

            root.style.setProperty(
                '--color-text',
                colorMode === 'light'
                    ? '${COLORS.text.light}'
                    : '${COLORS.text.dark}'
            );
            root.style.setProperty(
                '--color-background',
                colorMode === 'light'
                    ? '${COLORS.background.light}'
                    : '${COLORS.background.dark}'
            );
            root.style.setProperty(
              '--color-accent',
              colorMode === 'light'
                  ? '${COLORS.accent.light}'
                  : '${COLORS.accent.dark}'
            );
            root.style.setProperty(
                '--color-button',
                colorMode === 'light'
                    ? '${COLORS.button.light.color}'
                    : '${COLORS.button.dark.color}'
            );            

            root.style.setProperty('--initial-color-mode', colorMode);

        })()
    `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

const FallbackStyles = () => {
  return (
    <style>
      {`
        html {
          --color-text: ${COLORS.text};
          --color-background: ${COLORS.background};          
        }
      `}
    </style>
  );
};

const MaterialIcons = () => {
  return (
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    ></link>
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([<MaterialIcons key="a" />, <FallbackStyles key="b" />]);
  setPreBodyComponents(<MagicScriptTag key="c" />);
};
