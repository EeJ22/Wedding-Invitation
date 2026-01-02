import React, { useEffect, useState } from 'react';
import { RsvpFormState } from '../types';

interface ResponseData extends RsvpFormState {
  submittedAt: string;
}

interface AdminViewProps {
  onClose: () => void;
}

const AdminView: React.FC<AdminViewProps> = ({ onClose }) => {
  const [responses, setResponses] = useState<ResponseData[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('wedding_responses');
    if (data) {
      try {
        setResponses(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse responses", e);
      }
    }
  }, []);

  const handleClear = () => {
    if (window.confirm('Are you sure you want to delete all responses? This cannot be undone.')) {
      localStorage.removeItem('wedding_responses');
      setResponses([]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 fade-in">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl rounded-lg flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-porcelain">
          <div>
             <h2 className="text-2xl font-serif text-rouge">RSVP Dashboard</h2>
             <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Local Browser Storage</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close Admin View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto flex-1 p-6">
          {responses.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p>No responses received yet.</p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50">
                  <tr className="text-gold text-[10px] uppercase tracking-widest border-b border-gray-200">
                    <th className="p-4 font-bold">Time</th>
                    <th className="p-4 font-bold">Guest</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-center">Count</th>
                    <th className="p-4 font-bold w-1/3">Message</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-sans text-charcoal divide-y divide-gray-100">
                  {responses.map((r, i) => (
                    <tr key={i} className="hover:bg-porcelain/50 transition-colors">
                      <td className="p-4 text-xs text-gray-400 whitespace-nowrap">
                        {new Date(r.submittedAt).toLocaleDateString()} <br/>
                        {new Date(r.submittedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </td>
                      <td className="p-4">
                        <div className="font-bold">{r.name}</div>
                        <div className="text-xs text-gray-500">{r.email}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${r.attending === 'yes' ? 'bg-green-100 text-green-800' : 
                            r.attending === 'no' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {r.attending === 'yes' ? 'Accepts' : r.attending === 'no' ? 'Declines' : 'Uncertain'}
                        </span>
                      </td>
                      <td className="p-4 text-center font-mono">
                        {r.attending === 'yes' || r.attending === 'maybe' ? r.guests : '-'}
                      </td>
                      <td className="p-4">
                        <p className="text-gray-600 italic text-sm leading-relaxed">"{r.message}"</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        {responses.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
              onClick={handleClear}
              className="text-red-600 text-xs font-bold uppercase tracking-widest hover:bg-red-50 px-4 py-2 rounded transition-colors"
            >
              Clear All Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminView;