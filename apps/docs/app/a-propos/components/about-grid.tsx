const aboutData = [
  ["Parcours", "2023-2026", "La HEAD Genève"],
  ["", "2022-2023", "Beaux-arts de Rennes"],
  ["", "2021-2020", "Lycée"],
  ["Contact", "0630200192", ""],
  [
    "À propos",
    "",
    "Étudiante en design graphique passionnée par l'illustration et la création visuelle",
  ],
];

export default function AboutGrid() {
  return (
    <div className="p-4 md:p-8">
      {/* Mobile: Stack format */}
      <div className="block space-y-6 md:hidden">
        {aboutData.map((row, index) => {
          const [category, date, description] = row;
          if (!category && !date && !description) return null;

          return (
            <div key={index} className="border border-[rgb(255,0,0)] p-4">
              {category && (
                <div className="mb-2 border-b border-[rgb(255,0,0)] pb-2 text-base font-semibold uppercase">
                  {category}
                </div>
              )}
              {date && <div className="mb-2 font-medium">{date}</div>}
              {description && <div>{description}</div>}
            </div>
          );
        })}
      </div>

      {/* Desktop: Table format */}
      <table className="hidden w-full border border-[rgb(255,0,0)] border-collapse md:table">
        <tbody>
          {aboutData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`
                    border-b border-[rgb(255,0,0)] p-6 align-top
                    ${cellIndex === 0 ? "w-1/4 font-semibold uppercase" : ""}
                    ${cellIndex === 1 ? "w-1/4" : ""}
                    ${cellIndex === 2 ? "w-1/2" : ""}
                  `}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
