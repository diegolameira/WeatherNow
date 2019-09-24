import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Logo from "./Logo";

export default ({ title, children }) => (
  <ThemeProvider theme={Theme}>
    <div className="page">
      <Header>
        <Logo title={title} />
      </Header>
      {children}
    </div>
  </ThemeProvider>
);

const Theme = {
  temperature: {
    cold: "#69A3FF",
    normal: "#FF9632",
    hot: "#ED1946"
  },
  primary: "#B4B4B4",
  secondary: "#737C84",
  background: "#F1F1F1",
  card: {
    divider: "#EBEBEB",
    boxshadow: "#333",
    footer: "#F1F1F1"
  }
};
