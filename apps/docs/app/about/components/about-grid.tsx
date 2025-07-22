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
    <div className="p-8">
      <table className="border-collapse w-full text-black">
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
