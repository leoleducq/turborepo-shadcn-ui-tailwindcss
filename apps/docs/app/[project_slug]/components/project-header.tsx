interface ProjectHeaderProps {
  tableData: string[];
}

export default function ProjectHeader({ tableData }: ProjectHeaderProps) {
  return (
    <table className="border-collapse w-full text-black">
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
  );
}