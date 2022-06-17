import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const addinglink = links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>;
  });
  return <nav>
    {addinglink}
  </nav>;
}

export default NavBar;
