function IntercativeButton({
  additionalClass,
  isActive,
  children,
  handleClick,
  opposite,
}: {
  additionalClass: string;
  isActive: boolean;
  children: string;
  handleClick: () => void;
  opposite?: boolean;
}) {
  return opposite ? (
    <button
      className={`interactive-button interactive-button--opposite ${additionalClass ? additionalClass : ""}`}
      onClick={handleClick}
    >
      <span className="interactive-button__text">{children}</span>
      <div
        className={`interactive-button__line interactive-button__line--opposite ${isActive && "interactive-button__line--active"}`}
      ></div>
    </button>
  ) : (
    <button
      className={`interactive-button ${additionalClass ? additionalClass : ""}`}
      onClick={handleClick}
    >
      <div
        className={`interactive-button__square ${isActive && "interactive-button__square--active"}`}
      ></div>
      <div
        className={`interactive-button__line ${isActive && "interactive-button__line--active"}`}
      ></div>
      <span className="interactive-button__text">{children}</span>
    </button>
  );
}

export default IntercativeButton;
