import "./Footer.scss";
import withBase from "@/utils/withBase";
import Socials from "@/components/Socials";

const Footer = (props) => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        { label: "Facebook", iconName: "facebook" },
        { label: "Twitter", iconName: "twitter" },
        { label: "LinkedIn", iconName: "linked-in" },
      ],
    },
  ];

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  const extraLinksList = extraLinks.map((link) => (
    <a href={withBase("/")} className="footer__extra-link" key={link}>
      {link}
    </a>
  ));

  const createMenuItems = (links) => {
    return links.map((link) => (
      <li className="footer__menu-item" key={link}>
        <a href={withBase("/")} className="footer__menu-link">
          {link}
        </a>
      </li>
    ));
  };

  const createMenuColumns = menuItems.map(({ title, links, socialLinks }) => {
    return (
      <div className="footer__menu-column" key={title}>
        <a href={withBase("/")} className="footer__menu-title h6">
          {title}
        </a>
        {links?.length > 0 && (
          <ul className="footer__menu-list">{createMenuItems(links)}</ul>
        )}
        {socialLinks?.length > 0 && (
          <Socials className="footer__socials" links={socialLinks}></Socials>
        )}
      </div>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <nav className="footer__menu">{createMenuColumns}</nav>
        </div>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2025">2025</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">{extraLinksList}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
