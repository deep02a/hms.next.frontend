'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AllDoctorPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/symptom-checker/result/allDoctor'); 
  }, [router]);

  return null; // or a loading spinner if you want
}
