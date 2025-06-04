// app/components/SymptomRecommendationCard.tsx
import { ClipboardCheck } from 'lucide-react';

interface Props {
  recommendation: string;
  condition: string;
}

export default function SymptomRecommendationCard({ recommendation, condition }: Props) {
  return (
    <div className="flex items-start space-x-3 bg-gray-50 border rounded p-4">
      <ClipboardCheck className="text-blue-600 mt-1" />
      <div>
        <p className="font-semibold text-black">{recommendation}</p>
        <p className="text-sm text-gray-500">{condition}</p>
      </div>
    </div>
  );
}
