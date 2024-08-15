import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
        Menavigasi Lanskap Digital untuk Sukses
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
          />
        </div>

        <p className="text-p text-black my-[35px]">
        Kami adalah spesialis dalam menyediakan layanan perbaikan dan pemeliharaan perangkat Apple yang andal. Dengan pengetahuan mendalam tentang teknologi Apple, kami membantu bisnis Anda tetap terhubung dan berfungsi optimal dalam dunia digital yang selalu berubah. Layanan kami meliputi perbaikan perangkat, optimalisasi sistem, dan dukungan teknis yang memastikan perangkat Apple Anda selalu siap untuk mendukung kesuksesan bisnis Anda.
        </p>

        <MainButton
          text="Konsultasi Sekarang"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="hidden md:block">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
