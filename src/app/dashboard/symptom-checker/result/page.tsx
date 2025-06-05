'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import SymptomRecommendationCard from '@/app/components/SymptomRecommendationCard';
import { useRouter } from 'next/navigation';

interface Suggestion {
  recommendation: string;
  condition: string;
}

export default function SymptomResultPage() {
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        // Replace this URL with your future Spring Boot endpoint
        const res = await axios.get('http://localhost:8080/api/suggestions');
        setSuggestions(res.data);
      } catch (err) {
        setError('Failed to fetch suggestions. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSuggestions();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Based on your symptoms, we suggest...</h1>

      {loading && <p className="text-gray-500">Loading suggestions...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4 mb-8">
        {suggestions.map((s, idx) => (
          <SymptomRecommendationCard
            key={idx}
            recommendation={s.recommendation}
            condition={s.condition}
          />
        ))}
      </div>

      <button
        onClick={() => router.push('/appointments')}
        className="bg-blue-200 text-black px-6 py-2 rounded hover:bg-blue-300 font-semibold"
      >
        Schedule a consultation
      </button>
    </div>
  );
}
