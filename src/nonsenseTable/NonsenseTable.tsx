import { useState } from 'react'
import './NonsenseTable.css'

function NonsenseTable() {
  const [data, setData] = useState<number[][]>([
    [ 1, 2, 3 ],
    [ 2, 3, 4 ],
    [ 3, 4, 1 ],
  ]);

  return (
    <table className="nonsense-table">
      <thead>
        <tr>
          <th>one</th>
          <th>two</th>
          <th>three</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex.toString()}>
            <td>{data[rowIndex][0]}</td>
            <td>{data[rowIndex][1]}</td>
            <td>{data[rowIndex][2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NonsenseTable;
