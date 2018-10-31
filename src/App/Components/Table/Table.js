import React from "react";

const Table = props => {
  const { data } = props;
  let dataKeys = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="well">
      <table className="table table-stripped">
        <thead>
          <tr>
            {dataKeys.map((keyItems, index) => (
              <th>{keyItems.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItems, index) => (
            <tr>
              <td>{dataItems.transactionId}</td>
              <td>{dataItems.timestamp}</td>
              <td>
                {dataItems.itemDetails.map((items, index) => (
                  <ul>
                    <li>{items.itemId}</li>
                    <li>{items.itemDesc}</li>
                    <li>{items.itemPrice}</li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
