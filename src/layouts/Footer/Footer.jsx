import "./Footer.scss"
import Socials from "@/components/Socials"

const Footer = () => {
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
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  const menuList = menuItems.map(({ title, links, socialLinks }) => {
    const linkList = links?.map((link, index) => (
      <li className="footer__menu-item" key={index}>
        <a href="/" className="footer_menu-link">
          {link}
        </a>
      </li>
    ))

    return (
      <div className="footer__menu-column" key={title}>
        <a href="/" className="footer__menu-title h6">
          {title}
        </a>
        {links?.length > 0 && <ul className="footer__menu-list">{linkList}</ul>}
        {socialLinks?.length > 0 && (
          <Socials className="footer__socials" links={socialLinks}></Socials>
        )}
      </div>
    )
  })

  const extraLinksList = extraLinks.map((link, index) => (
    <a href="/" className="footer__extra-link" key={index}>
      {link}
    </a>
  ))

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">{menuList}</nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">{extraLinksList}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
