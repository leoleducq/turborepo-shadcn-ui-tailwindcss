import { projects } from "../projects";

const columns = ["Titre", "Année", "Structure", "Domaine", "Support"];

const bibliographieEntries = projects.map((project) => {
  const [title, year, structure, domain, support] = project.tableData;

  return {
    title: title || project.title,
    year: year || new Date(project.date).getFullYear().toString(),
    structure: structure || "",
    domain: domain || "",
    support: support || "",
  };
});

export default function BibliographiePage() {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto w-full">
        <h1 className="mb-12 text-3xl uppercase">Bibliographie</h1>

        {/* Mobile layout */}
        <div className="space-y-6 md:hidden">
          {bibliographieEntries.map((entry, index) => (
            <div
              key={`${entry.title}-${index}`}
              className="border border-[rgb(255,0,0)] p-4"
            >
              <div className="mb-3 border-b border-[rgb(255,0,0)] pb-2 text-base font-semibold uppercase">
                {entry.title}
              </div>
              <div className="space-y-1 text-sm">
                {entry.year && <p>{entry.year}</p>}
                {entry.structure && <p>{entry.structure}</p>}
                {entry.domain && <p>{entry.domain}</p>}
                {entry.support && <p>{entry.support}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <table className="w-full table-fixed border border-[rgb(255,0,0)] border-collapse">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="border border-[rgb(255,0,0)] px-4 py-3 text-left text-sm font-semibold uppercase"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bibliographieEntries.map((entry, index) => (
                <tr key={`${entry.title}-${index}`}>
                  <td className="border border-[rgb(255,0,0)] px-4 py-4 align-top">
                    {entry.title}
                  </td>
                  <td className="border border-[rgb(255,0,0)] px-4 py-4 align-top">
                    {entry.year}
                  </td>
                  <td className="border border-[rgb(255,0,0)] px-4 py-4 align-top">
                    {entry.structure}
                  </td>
                  <td className="border border-[rgb(255,0,0)] px-4 py-4 align-top">
                    {entry.domain}
                  </td>
                  <td className="border border-[rgb(255,0,0)] px-4 py-4 align-top">
                    {entry.support}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
