'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '@/app/components/Dashboard';
import { Appointment } from '@/app/types/appointment';

interface User {
  name: string;
  role: string;
  gender: 'male' | 'female' | 'other';
}

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [userRes, appointmentsRes] = await Promise.all([
          axios.get('/api/user'),
          axios.get('/api/appointments'),
        ]);

        setUser(userRes.data);
        setAppointments(appointmentsRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    }

    fetchDashboardData();
  }, []);

  const fallbackUser: User = {
    name: 'deepak',
    role: 'Primary Care Physician',
    gender: 'male',
  };

  return <Dashboard appointments={appointments} user={user || fallbackUser} />;
}
