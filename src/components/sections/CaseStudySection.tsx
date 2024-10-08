import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CaseStudySection() {
  const studies = [
    {
      title:
        "Untuk sebuah perusahaan kreatif, kami berhasil memperbaiki dan mengoptimalkan kinerja MacBook Pro yang digunakan untuk desain grafis intensif, yang meningkatkan efisiensi kerja hingga 40%.",
    },
    {
      title:
        "Bagi sebuah startup teknologi, kami mengganti komponen yang rusak pada beberapa iPhone, memungkinkan tim mereka tetap produktif tanpa gangguan selama pengembangan produk.",
    },
    {
      title:
        "Untuk sebuah agensi pemasaran, kami melakukan perbaikan pada beberapa perangkat iPad yang digunakan untuk presentasi klien, memastikan perangkat tersebut selalu siap digunakan dalam setiap meeting penting.",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
        Studi Kasus
        </div>
        <p className="text-p">
        Jelajahi Contoh Nyata Kesuksesan Layanan Kami melalui Studi Kasus
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] mt-[80px] bg-secondary text-white p-8 md:p-[50px]">
        {studies.map((study, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div>
              <p className="pb-[20px]">{study.title}</p>
              <Link href="/">
                <div className="flex gap-2 items-center">
                  <p className="text-primary">Hubungi Kami</p>
                  <div>
                    <img src="/images/arrow_rotate.png" />
                  </div>
                </div>
              </Link>
            </div>
            {index !== 2 && (
              <div className="mx-4 xl:mx-[64px] hidden md:block">
                <Separator orientation="vertical" className="h-[186px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
