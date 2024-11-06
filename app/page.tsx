import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      {/* Titel oben */}
      <div className="text-center w-full mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Stübi Digital
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white">
          Dein Partner für maßgeschneiderte digitale Lösungen.
        </p>
      </div>

      {/* Split-Screen Layout */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Linker Bereich */}
        <div className="w-full lg:w-1/2 flex justify-start items-center-top p-8 lg:p-16">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Willkommen bei Stübi Digital
            </h2>
            <p className="text-lg sm:text-xl mb-4">
              Dein Partner für digitale Lösungen, die deinem Unternehmen zum
              Erfolg verhelfen.
            </p>
            {/* Hier könnte noch ein weiteres Bild oder CTA eingebaut werden */}
            <a
              href="https://www.youtube.com/watch?v=gS2Dc1VtpkA"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 m-9"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        {/* Rechter Bereich */}
        <div className="w-full lg:w-1/2 flex justify-center items-center-top p-30 lg:p-200">
          {/* Bild im rechten Bereich */}
          <div className="flex justify-center-top items-center">
            <Image
              src="/vercel.svg" // Beispielbild im public-Ordner
              alt="Beispielbild"
              width={500} // Breite des Bildes
              height={700} // Höhe des Bildes
              
            />
          </div>
        </div>
      </div>
    </main>
  );
}
