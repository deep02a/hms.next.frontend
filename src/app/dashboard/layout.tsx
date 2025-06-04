'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import axios from 'axios';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

interface User {
  name: string;
  role: string;
  gender: 'male' | 'female' | 'other';
}

export default function DashboardLayout({ children }: LayoutProps) {
  const fallbackUser: User = {
    name: 'deepak',
    role: 'Primary Care Physician',
    gender: 'male',
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get('/api/user');
        if (res.data?.name && res.data?.gender && res.data?.role) {
          setUser(res.data);
        } else {
          setUser(fallbackUser);
        }
      } catch (error) {
        console.error('Failed to fetch user, using fallback:', error);
        setUser(fallbackUser);
      }
    }

    fetchUser();
  }, []);

  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-white text-black">
      <Sidebar name={user.name} role={user.role} gender={user.gender} />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
