import { useState } from 'react'
import './NonsenseTable.css'

function NonsenseTable() {
  const [data, setData] = useState<number[][]>([
    [ 1, 2, 3 ],
    [ 2, 3, 4 ],
    [ 3, 4, 1 ],
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>one</th>
          <th>two</th>
          <th>three</th>
          <th>four</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex.toString()}>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{data[3]}</td>
            <td>{data[4]}</td>
          </tr>
        ))}
        <tr >
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>
  );
}

export default NonsenseTable;
