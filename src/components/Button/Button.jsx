import "./Button.css";

/**
 * Reusable Button component.
 * Can render as a <button> or <a> depending on the `href` prop.
 *
 * Props:
 *  variant  — "primary" | "whatsapp" | "outline" | "ghost" | "instagram"
 *  size     — "sm" | "md" | "lg"
 *  href     — if provided, renders as <a> tag
 *  target   — anchor target (default "_blank" when href is set)
 *  onClick  — click handler
 *  disabled — boolean
 *  children — content
 */
export default function Button({
  variant  = "primary",
  size     = "md",
  href,
  target   = "_blank",
  onClick,
  disabled = false,
  children,
  style    = {},
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={cls}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
