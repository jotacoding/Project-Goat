import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Blinker"
    }
    html, #root, body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        align-items: center;
        background-color: ${(props) => props.theme.darkTheme.bg};
        color: ${(props) => props.theme.darkTheme.fg};
    }
    #root {
        display: flex;
        justify-content: space-between;
        min-height: 100vh;
    }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const colors = {
  lightPrimary: "#D9D9D9",
  lightSecondary: "#8C8C8C",
  middle: "#595959",
  darkPrimary: "#0D0D0D",
  darkSecondary: "#404040",
};

export const theme = {
  lightTheme: {
    bg: colors.lightPrimary,
    fg: colors.darkPrimary,
  },
  darkTheme: {
    bg: colors.darkPrimary,
    fg: colors.lightPrimary,
  },
};

export interface Theme {
  bg: string;
  fg: string;
}
