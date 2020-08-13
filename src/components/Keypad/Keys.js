import React from 'react';

export default () => {
  return (
    <table className="Keys">
      <thead>
        <tr>
          <td colSpan="2">
            <button className="btn btn-dark">Action 1</button>
          </td>
          <td colSpan="2">
            <button className="btn btn-dark">Action 2</button>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button className="btn btn-outline-dark text-light">7</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">8</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">9</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-danger">X</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-outline-dark text-light">4</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">5</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">6</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-warning">&lt;</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-outline-dark text-light">1</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">2</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">3</button>
          </td>
          <td rowSpan="2">
            <button className="btn btn-outline-dark text-success">O</button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-outline-dark text-light">0</button>
          </td>
          <td>
            <button className="btn btn-outline-dark text-light">00</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
