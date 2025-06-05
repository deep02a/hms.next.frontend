'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Calendar, MessageCircle, User, Menu, X } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function NavItem({ icon, label, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer px-2 py-1"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

interface SidebarProps {
  name: string;
  role: string;
  gender: 'male' | 'female' | 'other';
}

export default function Sidebar({ name, role, gender }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const avatarSrc =
    gender === 'male'
      ? '/avatar-male.png'
      : gender === 'female'
      ? '/avatar-female.png'
      : '/avatar-female.png';

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setOpen(true)}
          className="text-black focus:outline-none"
          aria-label="Open Sidebar"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-opacity-30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-md p-4 space-y-6
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block min-h-screen overflow-y-auto`}
      >

        {/* Close Button (Mobile Only) */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setOpen(false)} aria-label="Close Sidebar">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={avatarSrc} alt="User" className="w-16 h-16 rounded-full" />
          <h2 className="mt-2 font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        <nav className="space-y-3">
          <NavItem icon={<Home size={18} />} label="Home" href="/dashboard" />
          <NavItem icon={<Calendar size={18} />} label="Appointment" href="/dashboard/appointments" />
          <NavItem icon={<MessageCircle size={18} />} label="Messages" href="/dashboard/messages" />
          <NavItem icon={<User size={18} />} label="Symptom Checker" href="/dashboard/symptom-checker" />
        </nav>
      </aside>
    </>
  );
}
