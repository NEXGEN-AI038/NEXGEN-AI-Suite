function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 text-center">

      <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full mb-8">
        🚀 Welcome to NEXGEN AI Suite
      </div>

      <h1 className="text-6xl font-bold leading-tight">

        Building AI that
        <br />
        Helps People.

      </h1>

      <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">

        NEXGEN AI Suite is an open-source platform that brings together
        intelligent AI assistants for Healthcare, Travel, Finance,
        Cybersecurity and Career Development.

      </p>

      <div className="mt-12 flex justify-center gap-6">

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold">

          Explore Products

        </button>

        <button className="border border-slate-700 hover:bg-slate-800 transition px-8 py-4 rounded-xl">

          View GitHub

        </button>

      </div>

    </section>
  );
}

export default Hero;