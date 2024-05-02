const mobile_nav = () => {
  const mobile_btn = document.querySelector(".mobile");
  const mobile_nav = document.querySelector(".mobile-navigation");
  const mobile_nav_close = document.querySelector(".m-navigation-close");
  const mobile_nav_links = document.querySelectorAll(".m-navigation__link");

  mobile_btn.addEventListener("click", () => {
    mobile_nav.style.display = "flex";
    mobile_nav.style.opacity = "1";
    document.body.style.overflowY = "hidden";
  });

  mobile_nav_close.addEventListener("click", () => {
    mobile_nav.style.display = "none";
    mobile_nav.style.opacity = "0";
    document.body.style.overflowY = "scroll";
  });

  mobile_nav_links.forEach((link) => {
    link.addEventListener("click", () => {
      mobile_nav.style.display = "none";
      mobile_nav.style.opacity = "0";
      document.body.style.overflowY = "scroll";
    });
  });
};

export default mobile_nav;
