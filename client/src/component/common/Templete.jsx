import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageLink from "./PageLink";

const Templete = (props) => {
  

  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <PageLink />
      <Footer />
    </div>
  );
};

export default Templete;
