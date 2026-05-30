export function EuropeMap({ className = "" }: { className?: string }) {
  // Stylized abstract Europe with Vienna hub + route lines
  const cities = [
    { name: "Vienna", x: 295, y: 215, hub: true },
    { name: "Berlin", x: 270, y: 150 },
    { name: "Paris", x: 175, y: 200 },
    { name: "Madrid", x: 100, y: 320 },
    { name: "Lisbon", x: 40, y: 320 },
    { name: "Rome", x: 270, y: 310 },
    { name: "Warsaw", x: 340, y: 155 },
    { name: "Amsterdam", x: 200, y: 155 },
    { name: "Copenhagen", x: 255, y: 100 },
    { name: "Athens", x: 365, y: 360 },
    { name: "Bucharest", x: 395, y: 230 },
    { name: "Zagreb", x: 305, y: 245 },
  ];
  const vienna = cities[0];

  return (
    <svg viewBox="0 0 460 420" className={className} role="img" aria-label="Europe coverage map">
      {/* outline blobs (abstract) */}
      <g fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
        <path d="M40,180 Q90,90 200,80 Q330,70 410,140 Q430,220 380,310 Q300,400 200,380 Q70,360 30,260 Z" />
        <path d="M70,210 Q140,150 230,160 Q330,170 370,240 Q360,320 260,340 Q140,340 80,290 Z" />
      </g>

      {/* route lines from Vienna */}
      <g stroke="var(--amber-signal)" strokeWidth="1.2" strokeDasharray="3 4" fill="none" opacity="0.85">
        {cities.slice(1).map((c) => (
          <line key={c.name} x1={vienna.x} y1={vienna.y} x2={c.x} y2={c.y} />
        ))}
      </g>

      {/* city dots */}
      {cities.map((c) => (
        <g key={c.name}>
          {c.hub ? (
            <>
              <circle cx={c.x} cy={c.y} r="10" fill="var(--amber-signal)" opacity="0.2" />
              <circle cx={c.x} cy={c.y} r="5" fill="var(--amber-signal)" />
              <text x={c.x + 10} y={c.y - 8} fontFamily="Barlow Condensed" fontWeight="700" fontSize="13" fill="currentColor">
                VIENNA · HQ
              </text>
            </>
          ) : (
            <>
              <circle cx={c.x} cy={c.y} r="2.5" fill="currentColor" />
              <text x={c.x + 6} y={c.y - 4} fontFamily="Barlow Condensed" fontSize="10" fill="currentColor" opacity="0.7">
                {c.name.toUpperCase()}
              </text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
