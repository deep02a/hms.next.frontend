'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from '@/app/components/input';
import { Button } from '@/app/components/button';
import { Card, CardContent } from '@/app/components/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const fallbackDoctors: Doctor[] = [
  {
    name: 'Dr. Jane Doe',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: 120,
  },
  {
    name: 'Dr. John Smith',
    specialty: 'Dermatologist',
    rating: 4.6,
    reviews: 98,
  },
  {
    name: 'Dr. Alice Johnson',
    specialty: 'Neurologist',
    rating: 4.9,
    reviews: 140,
  },
];

export default function ViewDoctorPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('/api/doctors');
        if (Array.isArray(data) && data.length > 0) {
          setDoctors(data);
        } else {
          setDoctors(fallbackDoctors);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setDoctors(fallbackDoctors);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Find a Doctor</h1>
        <p className="text-muted-foreground">Search for doctors by specialty, location, and availability.</p>
      </div>

      <div className="w-full max-w-xl">
        <Input type="text" placeholder="Search for specialty, location and availability" />
      </div>

      <div className="flex gap-4 flex-wrap">
        <Button variant="outline">Specialty</Button>
        <Button variant="outline">Availability</Button>
      </div>

      {loading ? (
        <p>Loading doctors...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="flex items-center gap-4 p-4">
                <CardContent className="flex flex-col space-y-1">
                  <h2 className="text-lg font-semibold">{doctor.name}</h2>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground">
                    {doctor.rating} ({doctor.reviews} reviews)
                  </p>
                  <Button className="w-24 mt-2">Book</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center text-black justify-center gap-2 pt-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button key={page} variant={page === 1 ? 'default' : 'outline'} size="icon">
                {page}
              </Button>
            ))}
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
