import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SecFilings.css';

function SecFilings() {
  const [filings, setFilings] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilings = async () => {
      try {
        const res = await axios.get(
          'https://data.sec.gov/submissions/CIK0000320193.json', // Apple Inc. CIK
          {
            headers: {
              'User-Agent': 'YourAppName (your@email.com)'
            }
          }
        );

        const recent = res.data.filings.recent;
        const formatted = recent.form.map((formType, index) => ({
          formType,
          dateFiled: recent.filingDate[index],
          accessionNumber: recent.accessionNumber[index]
        }));

        setFilings(formatted.slice(0, 10)); // Show latest 10 filings
      } catch (err) {
        console.error(err);
        setError('Failed to load SEC filings.');
      } finally {
        setLoading(false);
      }
    };

    fetchFilings();
  }, []);

  if (loading) return <p className="status">Loading filings...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="sec-container">
      <h2>📄 Recent SEC Filings (Apple Inc.)</h2>
      <ul className="filing-list">
        {filings.map((item, index) => (
          <li key={index} className="filing-item">
            <strong>{item.formType}</strong> — {item.dateFiled}
            <br />
            <a
              href={`https://www.sec.gov/Archives/edgar/data/320193/${item.accessionNumber.replace(/-/g, '')}/${item.accessionNumber}-index.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Filing
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecFilings;