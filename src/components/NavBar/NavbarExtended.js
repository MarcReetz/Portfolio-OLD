import "./NavbarExtended.css"
import "./Navbar.css"
import { useTranslation } from "react-i18next";

export default function NavbarExtended (props) {
  const { t } = useTranslation();
  return (
    <aside>
      <button className="close menu" onClick={props.onClick}/>
      <nav>
        <ol>
          <li>
            <a href="/#about"> {t("about")}</a>
          </li>
          <li>
            <a href="/#skills"> {t("skills")}</a>
          </li>
          <li>
            <a href="/#work"> {t("work")}</a>
          </li>
          <li>
            <a href="/#contact"> {t("contact")}</a>
          </li>
        </ol>
      </nav>
      <div className="links">
        <a href="https://github.com/MarcReetz">
          <img src="icons/github.png" alt="github Logo"/>
        </a>
        <a href="https://github.com/MarcReetz">
          <img src="icons/linkedin.png" alt="linkedin Logo"/>
        </a>
      </div>
    </aside>
  )
}