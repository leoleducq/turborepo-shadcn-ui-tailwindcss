interface ProjectHeaderProps {
  tableData: string[];
}

export default function ProjectHeader({ tableData }: ProjectHeaderProps) {
  return (
    <>
      {/* Mobile: Vertical stack */}
      <div className="block md:hidden space-y-3">
        {tableData.map((cell, index) => {
          if (cell === '') return null;
          return (
            <div
              key={index}
              className="border border-[rgb(255,0,0)] p-4"
            >
              {cell}
            </div>
          );
        })}
      </div>

      {/* Desktop: Table format */}
      <table className="hidden w-full border border-[rgb(255,0,0)] border-collapse md:table">
        <tbody>
          <tr>
            {tableData.map((cell, index) => (
              <td
                key={index}
                className={`
                  border border-[rgb(255,0,0)] p-4 align-top
                `}
              >
                {cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
