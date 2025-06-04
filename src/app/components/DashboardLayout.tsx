import Sidebar from './Sidebar';
import { ReactNode } from 'react';

interface User {
  name: string;
  role: string;
  gender: 'male' | 'female' | 'other';
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({  children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white text-black">
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
