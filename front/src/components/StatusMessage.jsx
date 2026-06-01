export default function StatusMessage({ children, variant = 'neutral' }) {
  return <div className={`status-message status-message-${variant}`}>{children}</div>;
}
