import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [data, setData] = useState(null);

  const fetchProtectedData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/protected-route/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setData(res.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // 👇 Token expire hua, refresh token se naya access token lo
        try {
          const refreshRes = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: localStorage.getItem('refresh_token')
          });

          localStorage.setItem('access_token', refreshRes.data.access);

          // 👇 Retry original request with new access token
          const retryRes = await axios.get('http://localhost:8000/api/protected-route/', {
            headers: {
              Authorization: `Bearer ${refreshRes.data.access}`
            }
          });
          setData(retryRes.data);

        } catch (refreshErr) {
          console.error(refreshErr);
          alert('Session expired. Please login again.');
        }
      } else {
        console.error(err);
        alert('Unauthorized! Please login.');
      }
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, []);

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ProtectedPage;
