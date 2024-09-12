import { useState, useEffect } from 'react';
import './get.css'; 

const BASE_URL = 'https://grand-newt-enhanced.ngrok-free.app/api/';


const formatTimestampAsync = async (timestamp) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const date = new Date(timestamp);
      resolve(date.toLocaleString());
    }, 1000);
  });
};

const FlexibleTable = ({ endpoint, title }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = `${BASE_URL}${endpoint}`;

      try {
        const response = await fetch(url, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        } 

        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (Array.isArray(result)) {
          setData(result);
        } else if (result && typeof result === 'object') {
          const firstValue = Object.values(result)[0];
          if (Array.isArray(firstValue)) {
            setData(firstValue);
          } else {
            setData([]);
          }
        } else {
          setData([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const formatTimestamp = async (timestamp) => {
    return await formatTimestampAsync(timestamp);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data || data.length === 0) return <div className="no-data">No data available for {title}</div>;

  return (
    <div className="fetch-data">
      <h3>{title}</h3>
      {Array.isArray(data) && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.entries(row).map(([key, value], idx) => (
                  <td key={idx}>
                    {key.toLowerCase().includes('timestamp') ? (
                      <span>{formatTimestamp(value)}</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">No data available for {title}</div>
      )}
    </div>
  );
};

export default FlexibleTable;
