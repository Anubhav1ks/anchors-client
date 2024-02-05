import React, { useMemo } from 'react';
import Header from '../layout/header';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate= useNavigate()
    // Dummy data for the table
    const tableData = useMemo(() => [
        { id: 1, title: 'Example 1', url: 'https://example.com/1' },
        { id: 2, title: 'Example 2', url: 'https://example.com/2' },
        { id: 3, title: 'Example 3', url: 'https://example.com/3' },
        // Add more dummy data as needed
    ], []);

    return (
        <div>
            <Header isdashboard={true} />
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.url}</td>
                                <td className='Tableaction'> <button onClick={()=>navigate("/analatics")} >View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Dashboard;
