'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SymptomCheckerPage() {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    try {
      await axios.post('/api/symptom-checker', { description });
      router.push('/symptoms/result');
    } catch (err) {
      setError('Failed to submit symptoms. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <h1 className="text-2xl font-bold mb-6">Describe your symptoms</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col items-center space-y-4">
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type your symptoms here..."
          className="w-full h-32 border border-gray-300 rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Check Symptoms
        </button>
      </form>

      {error && <p className="mt-6 text-red-600 font-medium">{error}</p>}
    </div>
  );
}
