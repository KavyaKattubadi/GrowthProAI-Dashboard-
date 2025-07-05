import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('http://localhost:5000/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const res = await fetch(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
    const result = await res.json();
    setData(prev => ({ ...prev, headline: result.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Business Dashboard</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {loading && <p className="mt-4 text-center">Loading...</p>}

        {data && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <p>⭐ Rating: {data.rating}</p>
            <p>🗣️ Reviews: {data.reviews}</p>
            <p>📝 Headline: {data.headline}</p>
            <button
              onClick={regenerateHeadline}
              className="mt-4 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
            >
              Regenerate SEO Headline
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
