import { CaseType } from "../types";

const whiteColors = ["F6F6F6", "FFFFFF"];

function Case({
  CaseColor,
  Image,
  FeaturesTitle,
  Title,
  FriendlyURL,
}: CaseType) {
  const caseUrl = `https://it-cron.ru/cases/${FriendlyURL}`;

  return (
    <div className="case" style={{ background: `#${CaseColor}` }}>
      <img src={Image} alt="" className="case__image" />
      <a href={caseUrl} target="_blank" rel="noreferrer">
        <div className="case__info" style={{ background: `#${CaseColor}` }}>
          <h4
            className={`case__title ${whiteColors.includes(CaseColor) ? "case__title--black" : ""}`}
          >
            {Title}
          </h4>
          <p
            className={`case__text ${whiteColors.includes(CaseColor) ? "case__text--black" : ""}`}
          >
            {FeaturesTitle}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Case;
