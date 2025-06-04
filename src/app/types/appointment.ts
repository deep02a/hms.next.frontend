
export interface Appointment {
  id: string;
  date: string; // ISO string
  type: 'upcoming' | 'past';
  title: string;
  doctor: string;
  notes?: string;
}
