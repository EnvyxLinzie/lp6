import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceSection() {
  const services = [
    {
      titleTop: "Optimasi Performa",
      titleBottom: "Meningkatkan kinerja perangkat Apple Anda dengan optimasi sistem dan pembaruan perangkat lunak yang tepat.",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Perbaikan Perangkat",
      titleBottom: "Layanan perbaikan yang cepat dan efisien untuk berbagai masalah perangkat keras dan perangkat lunak pada produk Apple.",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Penggantian Komponen",
      titleBottom: "Penggantian komponen dengan suku cadang asli untuk memastikan keandalan dan durabilitas perangkat Apple Anda.",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_3.png",
      darkArrow: false,
      link: "/",
    },

    {
      titleTop: "Dukungan Teknis",
      titleBottom: "Layanan dukungan teknis profesional untuk membantu Anda mengatasi berbagai masalah pada perangkat Apple.",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_4.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Pembersihan dan Pemeliharaan",
      titleBottom: "Jaga perangkat Apple Anda tetap bersih dan berfungsi optimal dengan layanan pembersihan dan pemeliharaan rutin.",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_5.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Konsultasi Teknologi",
      titleBottom: "Dapatkan saran ahli tentang penggunaan terbaik perangkat Apple Anda untuk meningkatkan produktivitas bisnis.",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_6.png",
      darkArrow: false,
      link: "/",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
        Layanan
        </div>
        <p className="text-p">
        Di layanan perbaikan Apple kami, kami menawarkan berbagai layanan untuk memastikan perangkat Apple Anda selalu dalam kondisi prima dan mendukung kebutuhan bisnis Anda. Layanan kami mencakup:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
