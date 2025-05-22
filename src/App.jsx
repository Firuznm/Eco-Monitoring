import { useEffect, useState } from "react";
import FacebookIcon from "./assets/Icons/FacebookIcon";
import InstaIcon from "./assets/Icons/InstaIcon";
import LinkedinIcon from "./assets/Icons/LinkedinIcon";
import LocationIcon from "./assets/Icons/LocationIcon";
import MailIcon from "./assets/Icons/MailIcon";
import WhatsappIcon from "./assets/Icons/WhatsappIcon";
import ecoLogo from "./assets/Images/ecoLogo.png";
import { serviceData } from "./SiteData/Data";
import i18n from "./i18n";
import { t } from "i18next";

function App() {
  const [showService, setShowService] = useState(false);
  const visibleItems = showService ? serviceData : serviceData.slice(0, 5);
  const [siteLang, setSiteLang] = useState("az");

  useEffect(() => {
    const defaultLang = localStorage.getItem("lang") || "az";
    i18n.changeLanguage(defaultLang);
    setSiteLang(defaultLang);
  }, []);

  const onClickLang = (lang) => {
    setSiteLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const onClickShowItem = () => {
    setShowService(true)
  }

  return (
    <section id="main">
      <div className="container">
        <img className="ecoLogo" src={ecoLogo} alt="" />
        <div className="langList">
          <span
            onClick={() => onClickLang("az")}
            className={`btnLang ${siteLang === "az" ? "activeLang" : ""}`}
          >
            AZ
          </span>
          <span
            onClick={() => onClickLang("en")}
            className={`btnLang ${siteLang === "en" ? "activeLang" : ""}`}
          >
            ENG
          </span>
          <span
            onClick={() => onClickLang("ru")}
            className={`btnLang ${siteLang === "ru" ? "activeLang" : ""}`}
          >
            RU
          </span>
        </div>

        <div className="about">
          <h3 className="title">{t("aboutTitle")}</h3>
          <p className="aboutDescription">{t("about")}</p>
        </div>
        <div className="services">
          <h3 className="title">{t("services")}</h3>
          {visibleItems.map((service) => (
            <span key={service.id} className="service">
              {t(service.title)}
            </span>
          ))}
          {!showService && (
            <span onClick={onClickShowItem} className="moreBtn">
              {t("readMore")}
            </span>
          )}
        </div>
        <div className="socialList">
          <a
            className="social"
            href="https://www.instagram.com/ekomonitorinqmmc/?igsh=b3VuN2tzeWdsYzFh&utm_source=qr#"
          >
            <InstaIcon />
            Instagram
          </a>
          <a className="social" href="https://www.facebook.com/ekomonitorinq">
            <FacebookIcon />
            Facebook
          </a>
          <a className="social" href="https://wa.me/994506121915">
            <WhatsappIcon />
            Whatsapp
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGCfWU7wsawRgAAAZb2_6QY-QaBaemQndy2PTSoFazWzOu18nTzj4G4j5yMWBJ8v36ScTnnPwBLqBcGKtcpoYX1_8GgpsGdLLXrxAFrm8nFssf7W56glWo_sO-a4TlUJZdaK1Q=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Feko-monitorinq-mmc-42817817b%2F"
          >
            <LinkedinIcon />
            Linkedin
          </a>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footerContent">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/utXvKWaDvLNzXPpbA"
              className="address"
            >
              <LocationIcon /> {t("address")}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/994506121915"
              className="whatsapp"
            >
              <WhatsappIcon /> +994 50 612 19 15
            </a>
            <a
              className="mail"
            >
              <MailIcon /> info@ekomonitorinq.az ekomonitorinq@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App
