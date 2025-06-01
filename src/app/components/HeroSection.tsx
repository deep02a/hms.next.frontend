export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <img src="/doctor-patient.png" alt="Doctor and Patient" className="mx-auto mb-8 rounded-md" />
        <h1 className="text-4xl font-bold mb-4">Your Health, Simplified</h1>
        <p className="text-lg text-gray-600">Get personalized health insights and book appointments with top doctors, all in one place.</p>
      </div>
    </section>
  );
}