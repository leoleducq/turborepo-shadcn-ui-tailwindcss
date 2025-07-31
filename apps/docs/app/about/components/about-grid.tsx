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
      <div className="block md:hidden space-y-6">
        {aboutData.map((row, index) => {
          const [category, date, description] = row;
          if (!category && !date && !description) return null;

          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-yellow-50 transition-colors"
            >
              {category && (
                <div className="font-medium text-lg mb-2 text-black border-b border-gray-200 pb-2">
                  {category}
                </div>
              )}
              {date && (
                <div className="text-gray-700 mb-2 font-medium">{date}</div>
              )}
              {description && (
                <div className="text-gray-800">{description}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop: Table format */}
      <table className="hidden md:table border-collapse w-full text-black">
        <tbody>
          {aboutData.map((row, index) => (
            <tr key={index} className="hover:bg-yellow-50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`
                    border-b border-black p-6 
                    ${cellIndex === 0 ? "font-medium w-1/4" : ""}
                    ${cellIndex === 1 ? "w-1/4 text-gray-700" : ""}
                    ${cellIndex === 2 ? "w-1/2" : ""}
                    ${cell === "" ? "bg-gray-50" : ""}
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
