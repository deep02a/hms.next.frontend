export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10">Our platform streamlines your healthcare journey, from symptom assessment to appointment scheduling.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Symptom Checker</h3>
            <p className="text-sm text-gray-600">Use our AI-powered tool to understand your symptoms and get personalized recommendations.</p>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Appointment Booking</h3>
            <p className="text-sm text-gray-600">Find and book appointments with qualified doctors in your area, based on your needs and preferences.</p>
          </div>
          <div className="border p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Virtual Consultations</h3>
            <p className="text-sm text-gray-600">Connect with doctors remotely for consultations, follow-ups, and general health advice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}