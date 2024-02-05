import React, { useMemo } from 'react';
import "./home.scss"
import Header from '../layout/header';
const Homepage = () => {
  // Dummy data for the table
  const tableData = useMemo(() => [
    { id: 1, title: 'Example 1', url: 'https://example.com/1' },
    { id: 2, title: 'Example 2', url: 'https://example.com/2' },
    { id: 3, title: 'Example 3', url: 'https://example.com/3' },
    // Add more dummy data as needed
  ], []);

  return (
    <div>
      <Header/>
      <main>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Homepage;
