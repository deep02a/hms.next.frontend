export default function HeroSection() {
  return (
    <section className="relative bg-white py-6 px-4 text-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Text overlay */}
        <div className="absolute bottom-4 left-0 right-0 z-10 px-4">
          <div className="bg-opacity-80 rounded-md p-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-white">Your Health, Simplified</h1>
            <p className="text-lg text-white">Get personalized health insights and book appointments with top doctors, all in one place.</p>
          </div>
        </div>

        {/* Slightly stretched image */}
        <img
          src="/doctor-patient.png"
          alt="Doctor and Patient"
          className="w-[calc(100%+6px)] ml-[-3px] rounded-md object-cover"
        />
      </div>
    </section>
  );
}
