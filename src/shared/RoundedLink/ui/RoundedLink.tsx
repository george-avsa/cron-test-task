import { Link } from "App/types/Link";

function RoundedLink({ children, href, target }: Link) {
  return (
    <a href={href} className="rounded-link" target={target} rel="noreferrer">
      <div className="rounded-link__body">{children}</div>
    </a>
  );
}

export default RoundedLink;
