import React from "react";
import MainButton from "../common/MainButton";

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-h3Mobile md:text-h3 font-medium">
        Mari Wujudkan Impian Anda
        </p>

        <p className="my-[26px]">
        Hubungi kami hari ini untuk mengetahui bagaimana layanan perbaikan dan pemeliharaan Apple kami dapat membantu bisnis Anda tetap berjalan lancar dan efisien. Kami siap membantu Anda menjaga perangkat Apple Anda dalam kondisi terbaiknya.
        </p>

        <MainButton
          text="Konsultasi Sekarang"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <img
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
        />
      </div>
    </section>
  );
}

export default LetMakeThingsHappenSection;
