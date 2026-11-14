export default function BrandMark({ className }) {
  return <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false">
    {Array.from({ length: 8 }, (_, index) => <path
      key={index}
      d="M28 23h8V13l-8-8-6 6 6 6Z"
      transform={`rotate(${index * 45} 32 32)`}
    />)}
  </svg>;
}
