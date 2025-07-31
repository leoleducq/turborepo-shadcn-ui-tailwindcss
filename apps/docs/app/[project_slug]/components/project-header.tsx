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
              className="bg-white border border-gray-200 rounded-lg p-4 text-black shadow-sm"
            >
              {cell}
            </div>
          );
        })}
      </div>

      {/* Desktop: Table format */}
      <table className="hidden md:table border-collapse w-full text-black">
        <tbody>
          <tr>
            {tableData.map((cell, index) => (
              <td
                key={index}
                className={`
                  border border-black p-4 
                  ${cell === '' ? 'bg-gray-50' : ''}
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