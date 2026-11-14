export default function BrandMark({ className, framed = false }) {
  return <svg className={className} viewBox={framed ? '-10 -10 84 84' : '0 0 64 64'} fill="currentColor" aria-hidden="true" focusable="false">
    {Array.from({ length: 8 }, (_, index) => <path
      key={index}
      d="M28 23h8V13l-8-8-6 6 6 6Z"
      transform={`rotate(${index * 45} 32 32)`}
    />)}
    {framed && <path
      d="M-7 5v-6a6 6 0 0 1 6-6h6 M59-7h6a6 6 0 0 1 6 6v6 M71 59v6a6 6 0 0 1-6 6h-6 M5 71h-6a6 6 0 0 1-6-6v-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />}
  </svg>;
}
