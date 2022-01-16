import { useState } from 'react'
import './NonsenseTable.css'

const SMALL_DATA = [
  [ 1, 2, 3 ],
  [ 2, 3, 4 ],
  [ 3, 4, 1 ],
];

const BIG_DATA = [
  [ 5, 6, 7 ],
  [ 6, 7, 8 ],
  [ 7, 8, 9 ],
];

function NonsenseTable() {
  const [isSmallData, setIsSmallData] = useState<boolean>(true);
  const [data, setData] = useState<number[][]>(SMALL_DATA);

  const swapTableData = () => {
    if (isSmallData) {
      setIsSmallData(false);
      setData(BIG_DATA)
    } else {
      setIsSmallData(true);
      setData(SMALL_DATA)
    }
  }

  return (
    <div>
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
            <tr className="data-row" key={rowIndex.toString()}>
              <td className="data-column-1">{row[0]}</td>
              <td className="data-column-2">{row[1]}</td>
              <td className="data-column-3">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="swap-data-button" onClick={swapTableData}>Swap data set</button>
    </div>
  );
}

export default NonsenseTable;
