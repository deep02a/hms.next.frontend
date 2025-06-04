// components/HowItWorks.tsx

import { Search, CalendarCheck, MessageCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-black text-left">How It Works</h2>
        <p className="text-black mb-10 text-left">
          Our platform streamlines your healthcare journey, from symptom assessment to appointment scheduling.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition text-left">
            <div className="mb-4 text-black">
              <Search size={32} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Symptom Checker</h3>
            <p className="text-sm text-black">
              Use our AI-powered tool to understand your symptoms and get personalized recommendations.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition text-left">
            <div className="mb-4 text-black">
              <CalendarCheck size={32} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Appointment Booking</h3>
            <p className="text-sm text-black">
              Find and book appointments with qualified doctors in your area, based on your needs and preferences.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition text-left">
            <div className="mb-4 text-black">
              <MessageCircle size={32} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Virtual Consultations</h3>
            <p className="text-sm text-black">
              Connect with doctors remotely for consultations, follow-ups, and general health advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
