'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/app/components/button';
import { Calendar } from '@/app/components/Calendar';
import { Card, CardContent } from '@/app/components/card';

const fallbackDoctor = {
  name: 'Dr. Amelia Chen',
  specialty: 'Cardiologist',
  experience: 15,
  rating: 4.8,
  reviewCount: 125,
  about: 'Dr. Chen is a board-certified cardiologist with over 15 years of experience...',
};

const fallbackReviews = [
  {
    name: 'Sophia Lee',
    rating: 5,
    comment: 'Dr. Chen is excellent...',
    timeAgo: '1 month ago',
    likes: 10,
    dislikes: 2,
  },
  {
    name: 'Ethan Clark',
    rating: 4,
    comment: 'Good doctor but wait time was long...',
    timeAgo: '2 months ago',
    likes: 5,
    dislikes: 1,
  },
];

export default function DoctorDetailPage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(fallbackDoctor);
  const [reviews, setReviews] = useState(fallbackReviews);
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorRes, reviewRes, bookedRes] = await Promise.all([
          axios.get(`/api/doctors/${id}`),
          axios.get(`/api/doctors/${id}/reviews`),
          axios.get(`/api/doctors/${id}/booked-dates`),
        ]);

        setDoctor(doctorRes.data || fallbackDoctor);
        setReviews(reviewRes.data || fallbackReviews);
        setBookedDates(bookedRes.data || []);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        alert('Something went wrong while fetching doctor details.');
      }
    };

    fetchData();
  }, [id]);

  const handleBooking = async () => {
    if (!selectedDate) return alert('Please select a date first');
    try {
      await axios.post('/api/appointments', { doctorId: id, date: selectedDate });
      alert('Appointment booked!');
    } catch (err) {
      console.error('Failed to book appointment:', err);
      alert('Failed to book appointment');
    }
  };

  return (
    <div className="p-6 space-y-10">
      {/* Doctor Info Card */}
      <Card className="shadow-none border-none">
        <CardContent className="flex flex-col items-center text-center space-y-3 p-6">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-sm text-gray-600">{doctor.specialty} • {doctor.experience} years experience</p>
          <p className="text-gray-500">{doctor.about}</p>
        </CardContent>
      </Card>

      {/* Reviews */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Patient Reviews</h2>
        {reviews.map((review, i) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50">
            <p className="font-medium">{review.name} - {review.rating}★</p>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Calendar & Booking */}
      <div className="text-center space-y-4">
        <h2 className="text-lg font-semibold">Select Appointment Date</h2>
        <div className="flex justify-center">
          <Calendar
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabledDates={bookedDates.map(dateStr => new Date(dateStr))}
          />
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          onClick={handleBooking}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
}
