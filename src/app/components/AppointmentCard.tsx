
 import type { Appointment } from '@/app/types/appointment';

export default function AppointmentCard({ title, doctor, date, notes }: Appointment) {
  const formattedDate = new Date(date).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="bg-white text-black rounded p-4 mb-2">
      <h3 className="font-semibold">{title} with {doctor}</h3>
      <p className="text-sm text-gray-600">{formattedDate}</p>
      {notes && <p className="text-sm mt-1 text-gray-700">{notes}</p>}
    </div>
  );
}
