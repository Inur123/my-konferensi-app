"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  

  useEffect(() => {
    const eventDate = new Date("October 11, 2025 08:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 min-h-screen bg-pattern">
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-8">
        <div className="w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-12 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
          <div className="absolute -top-5 -right-5 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-5 -left-5 sm:-bottom-10 sm:-left-10 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20 blur-xl"></div>

          {/* Logo Section */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-16 mb-6 sm:mb-8 flex-wrap relative z-10">
            <div className="floating-animation mb-2 sm:mb-0">
              <Image
                src="/images/logo-ipnu.png"
                alt="Logo IPNU"
                width={100}
                height={100}
                unoptimized
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain transition-all duration-500 hover:scale-110 hover:rotate-6 drop-shadow-lg"
              />
            </div>
            <div className="floating-animation mb-2 sm:mb-0">
              <Image
                src="/images/logo-konferensi.png"
                alt="Logo Konferensi"
                width={100}
                height={100}
                unoptimized
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain transition-all duration-500 hover:scale-110 hover:rotate-6 drop-shadow-lg"
              />
            </div>
            <div className="floating-animation mb-2 sm:mb-0">
              <Image
                src="/images/logo-ippnu.png"
                alt="Logo IPPNU"
                width={100}
                height={100}
                unoptimized
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain transition-all duration-500 hover:scale-110 hover:rotate-6 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black gradient-text mb-2 sm:mb-4 leading-tight tracking-tight px-2">
              Konferensi IPNU-XVIII & IPPNU-XVII
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 px-2">
              Kabupaten Magetan
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover border border-red-200">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-red-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <i className="ri-calendar-event-line text-white text-lg sm:text-2xl"></i>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-red-600 font-medium uppercase tracking-wide">
                    Tanggal
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-red-800">
                    11 Oktober 2025
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover border border-orange-200">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-lg sm:text-2xl"></i>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-orange-600 font-medium uppercase tracking-wide">
                    Lokasi
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-orange-800">
                    Gedung Literasi Perpustakaan
                  </div>
                  <div className="text-xs sm:text-sm text-orange-700">
                    Magetan
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              {/* Iframe Peta Kedua */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.032488145951!2d111.32027364999996!3d-7.6553710999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798fc5da719f85%3A0x49a3a52f2c481f4a!2sGedung%20Literasi%20Perpustakaan!5e0!3m2!1sid!2sid!4v1758812866192!5m2!1sid!2sid"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 px-2">
              Hitung Mundur Menuju Acara
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Kartu Hari */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 text-white card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <span
                    id="days"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black countdown-number block"
                  >
                    {timeLeft.days}
                  </span>
                  <div className="text-red-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
                    Hari
                  </div>
                </div>
              </div>

              {/* Kartu Jam */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 text-white card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <span
                    id="hours"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black countdown-number block"
                  >
                    {timeLeft.hours}
                  </span>
                  <div className="text-orange-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
                    Jam
                  </div>
                </div>
              </div>

              {/* Kartu Menit */}
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 text-white card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <span
                    id="minutes"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black countdown-number block"
                  >
                    {timeLeft.minutes}
                  </span>
                  <div className="text-yellow-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
                    Menit
                  </div>
                </div>
              </div>

              {/* Kartu Detik */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 text-white card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <span
                    id="seconds"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black countdown-number block"
                  >
                    {timeLeft.seconds}
                  </span>
                  <div className="text-green-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
                    Detik
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-4 sm:mb-6">
            <a
              href="https://s.konfercabmagetan.my.id/Pendaftarankonfercab2025"
              className="group inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 text-base sm:text-lg md:text-xl transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            >
              <i className="ri-user-add-line text-lg sm:text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
              <span>Daftar Sekarang</span>
              <i className="ri-arrow-right-line text-base sm:text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-gray-200 pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-gray-600 font-medium px-2">
              © 2025 Konferensi IPNU-XVIII & IPPNU-XVII Kabupaten Magetan
            </p>
            <p className="text-xs text-gray-500 mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}