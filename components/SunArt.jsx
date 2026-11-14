export default function SunArt() {
  return <svg className="studio-sun" viewBox="0 0 320 320" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="studio-sun-color" x1="30" y1="25" x2="290" y2="295" gradientUnits="userSpaceOnUse">
        <stop stopColor="#94dbe0" />
        <stop offset=".5" stopColor="#b39fe9" />
        <stop offset="1" stopColor="#d8f0a7" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#studio-sun-color)" strokeWidth=".85">
      <g className="studio-sun-rays">
        {Array.from({ length: 24 }, (_, index) => <line
          key={index}
          x1="160"
          y1="78"
          x2="160"
          y2={index % 2 === 0 ? 20 : 40}
          strokeLinecap="round"
          transform={`rotate(${index * 15} 160 160)`}
        />)}
      </g>
      <g className="studio-sun-core">
        <circle cx="160" cy="160" r="72" opacity=".35" />
        <circle cx="160" cy="160" r="66" opacity=".6" />
        <circle cx="160" cy="160" r="60" />
        <g opacity=".65" strokeWidth=".7">
          <ellipse cx="160" cy="160" rx="22" ry="60" />
          <ellipse cx="160" cy="160" rx="44" ry="60" />
          <ellipse cx="160" cy="160" rx="60" ry="22" />
          <ellipse cx="160" cy="160" rx="60" ry="44" />
        </g>
      </g>
    </g>
    <circle cx="160" cy="160" r="3" fill="#d8f0a7" />
  </svg>;
}
