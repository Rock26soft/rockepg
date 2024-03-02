import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const date = '1-3-2024';
      const url = `https://tm.tapi.videoready.tv/content-detail/pub/api/v2/channels/schedule?date=${date}`;
      const headers = {
        'platform': 'web',
        'Content-Type': 'application/json',
        'referer': 'https://watch.tataplay.com/',
        'origin': 'https://watch.tataplay.com'
      };
      const data = { id: '8' };

      const response = await axios.post(url, data, { headers });
      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error occurred. Please check console for details.');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Make POST Request</button>
      <div>
        <textarea
          rows={10}
          cols={50}
          readOnly
          value={response}
          style={{ marginTop: '10px' }}
        />
      </div>
    </div>
  );
};

export default MyComponent;
