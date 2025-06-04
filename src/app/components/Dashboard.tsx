'use client';

import AppointmentCard from './AppointmentCard';
import { Appointment } from '@/app/types/appointment';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  role: string;
  gender: 'male' | 'female' | 'other';
}

interface DashboardProps {
  appointments: Appointment[];
  user: User;
}

export default function Dashboard({ appointments, user }: DashboardProps) {
  const router = useRouter();
  const upcoming = appointments.filter((a) => a.type === 'upcoming');
  const past = appointments.filter((a) => a.type === 'past');

  const settingsRoutes = [
    { label: 'Personal Information', path: '/profile/personal' },
    { label: 'Payment Methods', path: '/profile/payment' },
    { label: 'Notifications', path: '/profile/notifications' },
    { label: 'Security', path: '/profile/security' },
    { label: 'Help & Support', path: '/profile/support' },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
        {upcoming.length ? (
          upcoming.map((app) => <AppointmentCard key={app.id} {...app} />)
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
        {past.length ? (
          past.map((app) => <AppointmentCard key={app.id} {...app} />)
        ) : (
          <p>No past appointments.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Profile & Settings</h2>
        <div className="space-y-2 bg-white">
          {settingsRoutes.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => router.push(path)}
              className="w-full text-left flex items-center bg-gray-100 rounded p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="text-gray-700">{label}</span>
            </button>
          ))}

          <button className="mt-4 px-4 py-2 text-sm rounded bg-gray-200 hover:bg-red-100 text-red-600">
            Log Out
          </button>
        </div>
      </section>
    </>
  );
}
