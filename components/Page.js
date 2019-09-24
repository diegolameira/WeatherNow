import React from "react";

import Header from "./Header";
import Logo from "./Logo";

export default ({ title, children }) => (
  <>
    <div className="page">
      <Header>
        <Logo title={title} />
      </Header>
      {children}
    </div>
  </>
);
