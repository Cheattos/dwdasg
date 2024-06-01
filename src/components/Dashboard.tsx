import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Dashboard() {
  const imagesup = [
    "/images/orang1.png",
    "/images/orang2.png",
    "/images/orang3.png",
    "/images/orang4.png",
    "/images/orang5.png",
    "/images/orang6.png",
  ];

  const imagesdown = [
    "/images/orang7.png",
    "/images/orang8.png",
    "/images/orang9.png",
    "/images/orang10.png",
    "/images/orang11.png",
    "/images/orang10.png",
  ];

  const settingsright = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Breakpoint untuk layar HP
        settings: {
          slidesToShow: 2, // Nilai untuk layar HP
          arrows: false,
        },
      },
    ],
  };
  const settingsleft = {
    rtl: true,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5, // Nilai default untuk desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Breakpoint untuk layar HP
        settings: {
          slidesToShow: 2, // Nilai untuk layar HP
          arrows: false,
        },
      },
    ],
  };

  const techlogooffer = [
    "/techlogo/html.png",
    "/techlogo/js.png",
    "/techlogo/react.png",
    "/techlogo/node.png",
  ];

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-06-30") - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const company = [
    {
      img: "/company/pertamina.png",
      width: "180px",
      height: "40px",
    },
    {
      img: "/company/sigma.png",
      width: "180px",
      height: "50px",
    },
    {
      img: "/company/alodokter.png",
      width: "150px",
      height: "30px",
    },
    {
      img: "/company/telkom.png",
      width: "100px",
      height: "50px",
    },
    {
      img: "/company/rekeningku.png",
      width: "150px",
      height: "30px",
    },
    {
      img: "/company/fore.png",
      width: "150px",
      height: "50px",
    },
    {
      img: "/company/modalrakyat.png",
      width: "150px",
      height: "30px",
    },
    {
      img: "/company/cloud.png",
      width: "120px",
      height: "50px",
    },
    {
      img: "/company/bri.png",
      width: "150px",
      height: "40px",
    },
    {
      img: "/company/zahir.png",
      width: "120px",
      height: "50px",
    },
    {
      img: "/company/pelindo.png",
      width: "180px",
      height: "50px",
    },
    {
      img: "/company/meteor.png",
      width: "120px",
      height: "40px",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is a lifetime deal truly worth it?",
      answer: "lorem",
    },
    {
      question:
        "How can I trust the quality and reliability of a lifetime deal?",
      answer:
        "Rest assured, our commitment to excellence is unwavering. Website.Inc’s lifetime deal customers receive ongoing updates, improvements, and dedicated support, ensuring a top-notch experience for years to come.",
    },
    {
      question: "Why should I choose Lezzform over other form builders?",
      answer: "lorem",
    },
    {
      question: "What if my needs change in the future?",
      answer: "lorem",
    },
  ];

  const alumni = [
    {
      imgpt: "/company/bled.png",
      widthpt: "100px",
      heightpt: "90px",
      img: "/alumni/faisal.png",
      name: "Faisal",
      posision: "Backend Developer",
      sub: "Bled Media Kreasi",
      wa: "150px",
      ha: "250px",
      mb: "0",
    },
    {
      imgpt: "/company/intikom.png",
      widthpt: "150px",
      heightpt: "40px",
      img: "/alumni/nugraha.png",
      name: "Nugraha",
      posision: "Software Engineering",
      sub: "Intikom Berliana Mustika",
      wa: "150px",
      ha: "250px",
      mb: "50px",
    },
    {
      imgpt: "/company/meteor.png",
      widthpt: "100px",
      heightpt: "50px",
      img: "/alumni/umam.png",
      name: "Umam",
      posision: "Frontend Developer",
      sub: "Meteor Inovasi Digital",
      wa: "150px",
      ha: "250px",
      mb: "40px",
    },
    {
      imgpt: "/company/next.png",
      widthpt: "100px",
      heightpt: "50px",
      img: "/alumni/ibrahim.png",
      name: "Ibrahim",
      posision: "Backend Developer",
      sub: "Next Transformtech",
      wa: "150px",
      ha: "250px",
      mb: "40px",
    },
    {
      imgpt: "/company/bri.png",
      widthpt: "100px",
      heightpt: "30px",
      img: "/alumni/hakim.png",
      name: "Hakim",
      posision: "Fullstack Developer",
      sub: "Bank Rakyat Indonesia (BRI)",
      wa: "150px",
      ha: "250px",
      mb: "60px",
    },
    {
      imgpt: "/company/pelindo.png",
      widthpt: "150px",
      heightpt: "50px",
      img: "/alumni/sidik.png",
      name: "Sidik R.",
      posision: "Lead Coordinator",
      sub: "Integrasi Logistik Cipta Solusi",
      wa: "130px",
      ha: "250px",
      mb: "40px",
    },
    {
      imgpt: "/company/traders.png",
      widthpt: "120px",
      heightpt: "20px",
      img: "/alumni/salsabila.png",
      name: "Salsabila",
      posision: "Backend Developer",
      sub: "Traders Family International",
      wa: "150px",
      ha: "250px",
      mb: "70px",
    },
    {
      imgpt: "/company/argo.png",
      widthpt: "120px",
      heightpt: "30px",
      img: "/alumni/abi.png",
      name: "Abi Uzaid",
      posision: "Project Manager",
      sub: "Argo Asia Network",
      wa: "150px",
      ha: "250px",
      mb: "60px",
    },
  ];

  const slidealumni = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Breakpoint untuk layar HP
        settings: {
          slidesToShow: 2, // Nilai untuk layar HP
          arrows: false,
        },
      },
    ],
  };

  const testialumni = [
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
    {
      img: "/images/orang1.png",
      name: "Faisal",
      posision: "Fullstack Developer",
      ig: "@faisalbowo",
      content:
        "“Alhamdulillah bisa dapet job di masa pandemic. Mentor DumbWays ramah-ramah, professional, motivator dan penyampaian mudah dimengerti”",
    },
  ];

  const mediaData = [
    {
      date: "Senin, 12 Juli 2021",
      title: "Pasar Coding di Indonesia Masih Menjanjikan",
      description:
        "Ketimpangan SDM terutama di sektor digital masih menjadi isu yang belum terpecahkan. Dalam sebuah survei dilaporkan...",
      image: "/news/news1.png",
      source: "SINDOnews.com",
      sourceLogo: "/company/sindo.png",
    },
    {
      date: "Senin, 12 Juli 2021",
      title: "Pasar Coding di Indonesia Dinilai Masih Menjanjikan",
      description:
        "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasar...",
      image: "/news/news2.png",
      source: "REPUBLIKA.co.id",
      sourceLogo: "/company/republika.png",
    },
    {
      date: "Senin, 12 Juli 2021",
      title: "Indonesia Butuh Banyak SDM Coding",
      description:
        "Di tengah kencangnya adopsi digital di Tanah Air saat ini yang diakselerasi oleh penggunaan telepon seluler dan pande...",
      image: "/news/news1.png",
      source: "Tribuntechno",
      sourceLogo: "/company/tribun.png",
    },
    {
      date: "Senin, 12 Juli 2021",
      title: "Pasar Kerja Coding di Indonesia Menjanjikan",
      description:
        "Ketimpangan SDM terutama di sektor digital masih menjadi isu yang belum terpecahkan. Dalam sebuah survei atidak...",
      image: "/news/news2.png",
      source: "tempo.co",
      sourceLogo: "/company/tempo.png",
    },
  ];

  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7132455796823!2d106.73258197503841!3d-6.301358793687807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1202c227c7f%3A0x55b285547291a43f!2sDumbWays%20Indonesia%20(Bintaro)!5e0!3m2!1sen!2sid!4v1717046475584!5m2!1sen!2sid"
  );

  const addresses = [
    {
      name: "Dumbways Bintaro",
      details:
        "Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001 Sawah Lama, Ciputat, Tangerang Selatan Banten - 15413",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7132455796823!2d106.73258197503841!3d-6.301358793687807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1202c227c7f%3A0x55b285547291a43f!2sDumbWays%20Indonesia%20(Bintaro)!5e0!3m2!1sen!2sid!4v1717046475584!5m2!1sen!2sid",
    },
    {
      name: "Dumbways Depok",
      details: "Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001 Sawah Lama, Ciputat, Tangerang Selatan Banten - 15413",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0949344773285!2d106.74705697553593!3d-6.381746693608605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe74948f7c5%3A0xe29cfd4fa5b1f30!2sDumbWays%20Indonesia%20(Depok)!5e0!3m2!1sen!2sid!4v1717252299120!5m2!1sen!2sid",
    },
  ];

  return (
    <Fragment>
      <div
        className="container-xl mb-10"
        style={{ backgroundColor: "#fff4f2" }}
      >
        <div className="md:ps-20 pb-96 md:pt-20 md:ms-20 p-10">
          <img
            src="/vektor/VectorStar.png"
            alt="vektor star"
            className="w-5 h-5 -mb-4 vstar"
          />
          <h1 className="font-extrabold text-5xl text-black">
            Coding Bootcamp Jaminan Kerja
          </h1>
          <img
            src="/vektor/VectorGaris.png"
            alt="vektor star"
            className="h-2 -mb-4 vgaris"
          />

          <p className="mt-10 text-black">
            Belajar coding secara intensif dengan proyek-proyek nyata serta
            dukungan karir.
          </p>
          <p className="text-black">Hingga kamu siap disalurkan kerja!</p>
        </div>
      </div>

      {/* Corousel */}
      <div className="container-full mx-auto md:-mt-80 -mt-96 h-auto">
        <Slider {...settingsright}>
          {imagesup.map((src, index) => (
            <div key={index} className="p-2">
              <img
                src={src}
                alt={`Image ${index}`}
                className="md:w-full md:h-auto"
              />
            </div>
          ))}
        </Slider>
        <Slider {...settingsleft}>
          {imagesdown.map((src, index) => (
            <div key={index} className="p-2">
              <img
                src={src}
                alt={`Image ${index}`}
                className="md:w-full md:h-auto couroselbawah"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="container-full mb-10 -mt-40"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* Offer */}
        <div className="pt-60 text-black text-center">
          {/* Text */}
          <div>
            <h1 className="font-extrabold text-4xl">Daftar Sekarang,</h1>
            <h1 className="font-extrabold text-4xl p-2 dwcolor">
              Kesempatan Terbatas
            </h1>
            <p className="text-sm tracking-widest pb-5">
              Peluang belajar dengan investasi kecil didepan. bayar selebihnya
              setelah kamu sukses bekerja!
            </p>
          </div>

          {/* card */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2">
              {/* card 1 */}
              <div className="justify-self-end ps-5 pe-10 hover:bg-gray-200 rounded-lg me-20">
                <div className="flex gap-3 pt-5 pb-5">
                  {techlogooffer.map((src, index) => (
                    <div key={index}>
                      <img
                        src={src}
                        alt={`Image ${index}`}
                        className="size-6"
                      />
                    </div>
                  ))}
                  <img src="/techlogo/bznet.png" alt="bznet" className="h-6" />
                </div>
                <div className=" pb-5">
                  <h1 className="text-2xl font-extrabold text-start">
                    Fullstack Developer
                  </h1>
                  <p
                    className="text-start pt-2 pb-2"
                    style={{ fontSize: "10px" }}
                  >
                    Live Class | 4 Bulan
                  </p>
                  <div className="flex pb-2">
                    <img src="/icon/map.png" alt="bznet" className="h-3" />
                    <p className="font-bold ps-2" style={{ fontSize: "10px" }}>
                      Kelas online dan offline
                    </p>
                  </div>
                  <div className="flex">
                    <img src="/icon/calender.png" alt="bznet" className="h-3" />
                    <p className="font-bold ps-2" style={{ fontSize: "10px" }}>
                      Fulltime (Senin-Jumat)
                    </p>
                  </div>
                  <div className="text-left pt-3">
                    <button className="rounded-full bg-black text-white text-xs px-4 py-2">
                      Lihat Silabus
                    </button>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="pt-5 p-5 justify-self-start hover:bg-gray-200 rounded-lg">
                <h1 className="text-3xl font-extrabold">Commitment Fee</h1>
                <div className="flex flex-col items-start">
                  <h1
                    className="text-3xl font-bold -mb-5"
                    style={{ color: "#808E9B" }}
                  >
                    Rp. 2.500.000
                  </h1>
                  <img
                    src="/vektor/garis.png"
                    alt="vektor garis"
                    className="w-52"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-5xl font-bold pt-8 -mb-20">
                    Rp. 1.000.000
                  </h1>
                  <img
                    src="/vektor/bulet.png"
                    alt="vektor garis"
                    className="w-72 "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* card-mobile */}
          <div className="block md:hidden ">
            <div className="flex flex-col items-center">
              {/* card 1 */}
              <div className="hover:bg-gray-200 rounded-lg p-5">
                <div className="flex gap-3 pt-5 pb-5">
                  {techlogooffer.map((src, index) => (
                    <div key={index}>
                      <img src={src} alt={`Image ${index}`} className="h-10" />
                    </div>
                  ))}
                  <img src="/techlogo/bznet.png" alt="bznet" className="h-10" />
                </div>
                <div className="pb-5">
                  <h1 className="text-3xl font-extrabold text-start">
                    Fullstack Developer
                  </h1>
                  <p className="text-start pt-2 pb-2">Live Class | 4 Bulan</p>
                  <div className="flex pb-2">
                    <img src="/icon/map.png" alt="bznet" className="size-5" />
                    <p className="font-bold ps-2">Kelas online dan offline</p>
                  </div>
                  <div className="flex">
                    <img
                      src="/icon/calender.png"
                      alt="bznet"
                      className="size-5"
                    />
                    <p className="font-bold ps-2">Fulltime (Senin-Jumat)</p>
                  </div>
                  <div className="text-left pt-3">
                    <button className="rounded-full bg-black text-white text-xs px-4 py-2">
                      Lihat Silabus
                    </button>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="text-start p-5 hover:bg-gray-200 rounded-lg">
                <h1 className="text-3xl font-extrabold">Commitment Fee</h1>
                <div className="flex flex-col items-start">
                  <h1
                    className="text-3xl font-bold -mb-5"
                    style={{ color: "#808E9B" }}
                  >
                    Rp. 2.500.000
                  </h1>
                  <img
                    src="/vektor/garis.png"
                    alt="vektor garis"
                    className="w-52"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-5xl font-bold pt-8 -mb-20">
                    Rp. 1.000.000
                  </h1>
                  <img
                    src="/vektor/bulet.png"
                    alt="vektor garis"
                    className="w-72 "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Time */}
          <div>
            <p className="pt-20 tracking-widest">
              Kesempatan untuk sukses tidak datang 2x,
            </p>
            <p className="tracking-widest">
              <span className="dwcolor">pendaftaran</span> batch 56 akan{" "}
              <span className="dwcolor">ditutup</span> dalam
            </p>

            <div className="hidden dwcolor pb-2 md:block pt-5">
              <div className="flex sm:flex-row justify-center space-x-4 space-y-0">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold md:text-7xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.days)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-xl md:me-20 text-black">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold md:text-7xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.hours)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-xl md:me-20 text-black">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold md:text-7xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.minutes)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-xl md:me-20 text-black">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold md:text-7xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.seconds)}
                    </span>
                  </span>
                  <span className="text-xl -ms-5 text-black">Seconds</span>
                </div>
              </div>
              <button
                className="rounded-full text-white text-xs px-4 py-2 mt-5"
                style={{ backgroundColor: "#FE4E30" }}
              >
                Daftar & Bayar Sekarang
              </button>
            </div>

            {/* Time-Mobile */}
            <div className="dwcolor pb-2 md:hidden block">
              <div className="flex sm:flex-row justify-center space-x-4 space-y-0 mt-5">
                <div className="flex flex-col items-center ">
                  <span className="text-5xl font-bold relative">
                    <span className="me-2">
                      {addLeadingZero(timeLeft.days)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className="text-black" style={{ fontSize: "13px" }}>
                    Days
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold relative">
                    <span className="me-2 ms-2">
                      {addLeadingZero(timeLeft.hours)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "13px" }}>
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold">
                    <span className="me-2 ms-2">
                      {addLeadingZero(timeLeft.minutes)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "13px" }}>
                    Minutes
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold md:text-7xl me-4">
                    <span className="ms-2">
                      {addLeadingZero(timeLeft.seconds)}{" "}
                    </span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "13px" }}>
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center justify-center pt-5 ">
                <div
                  className="border-2 rounded-lg"
                  style={{
                    borderColor: "#a36b68",
                    backgroundColor: "#F7F3D7",
                    height: "9rem",
                    width: "50rem",
                  }}
                >
                  <div className="grid grid-cols-[auto_1fr]">
                    <div className="p-7 mt-3">
                      <img
                        src="/icon/warning.png"
                        alt="warning"
                        className="size-16"
                      />
                    </div>
                    <div className="text-start">
                      <p className="pt-5">Syarat Pendaftaran</p>
                      <div className="ps-5">
                        <li>
                          Berusia minimal 18 tahun dan maksimal 26 tahun pada
                          saat mendaftar
                        </li>
                        <li>Pendidikan minimal SMK/SMA/Sederajat</li>
                      </div>
                      <p className="text-blue-600">Selengkapnya lihat di FAQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="block md:hidden">
              <div className="flex items-center justify-center pt-5 p-3">
                <div className="border-2 rounded-lg bg-amber-50 border-yellow-800 h-auto">
                  <div className="grid grid-cols-[auto_1fr]">
                    <div className="p-7 mt-3">
                      <img
                        src="/icon/warning.png"
                        alt="warning"
                        className="size-16"
                      />
                    </div>
                    <div className="text-start">
                      <p className="pt-2">Syarat Pendaftaran</p>
                      <div className="ps-5">
                        <li>
                          Berusia minimal 18 tahun dan maksimal 26 tahun pada
                          saat mendaftar
                        </li>
                        <li>Pendidikan minimal SMK/SMA/Sederajat</li>
                      </div>
                      <p className="text-blue-600 pb-2">
                        Selengkapnya lihat di FAQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Company */}
          <div>
            <div className="text-center text-black mt-10 p-2">
              <h1 className="text-3xl font-black">
                Kami Berdiri <span className="dwcolor">Sejak 2017</span> untuk
                Selalu Menjadi
              </h1>
              <h1 className="dwcolor text-3xl font-black mb-3 mt-1">
                Solusi Bagi Pencari Kerja!
              </h1>
              <p className="tracking-widest">
                Berikut adalah statistik kami dengan konsistensi kami sebagai
                Bootcamp jaminan di Indonesia.
              </p>
              <div className="hidden dwcolor pb-2 md:block pt-5">
                <div className="flex sm:flex-row justify-center space-x-4 space-y-0">
                  <div className="flex flex-col items-center">
                    <span className="font-bold md:text-5xl text-black">
                      <span className="me-6">560+</span>{" "}
                    </span>
                    <span className="text-xl md:me-10 text-black">Alumni</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold md:text-5xl text-black">
                      <span className="me-6">370+</span>{" "}
                    </span>
                    <span className="text-xl md:me-10 text-black">
                      Hiring Partners
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold md:text-5xl text-black">
                      <span className="me-6">52</span>{" "}
                    </span>
                    <span className="text-xl md:me-5 text-black">Batch</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h1 className="text-3xl font-black">
                Lulusan DumbWays Bekerja di{" "}
                <span className="dwcolor">Perusahaan Top</span>
              </h1>
              <p className="tracking-widest">
                DumbWays bermitra dengan startup, perusahaan multinasional,
                hingga unicorn
              </p>

              <div className="flex justify-center mt-10">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3 max-w-4xl mx-auto ">
                  {company.map((comp, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 flex items-center justify-center rounded pt-5 pe-3 pb-5 ps-3"
                    >
                      <img
                        src={comp.img}
                        alt={`company ${index}`}
                        style={{ width: comp.width, height: comp.height }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2">
                dan <span className="dwcolor font-extrabold">200+ </span>
                perisahaan lainnya
              </p>
            </div>

            <div className="mt-10">
              <h1 className="text-3xl font-black p-2">Proses Bootcamp</h1>
              <p className="tracking-widest mb-20">
                Ikuti proses hingga disalurkan kerja
              </p>

              {/* web */}
              <div className="hidden md:block max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-3 gap-4">
                  {/* Ini ke 1 */}
                  <div className="relative mt-16 ">
                    <div className="absolute left-1/2 top-0 bottom-0 transform md:-mb-40 -translate-x-1/2 border-r-4 border-orange-700 hidden md:block"></div>
                    <div className="absolute p-2 left-1/2 transform -translate-x-1/2 -top-8 bg-orange-700 text-white w-9 h-9 rounded-full items-center justify-center md:flex hidden">
                      <div className="rounded-full bg-white w-full h-full">
                        -
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 -ms-40 relative">
                    <img
                      src="/images/proses1.png"
                      alt="pelatihan intensif"
                      className="w-96 h-64"
                    />
                    <img
                      src="/icon/arow2.png"
                      alt="arow"
                      className="absolute w-80 ms-20 -mt-5"
                    />
                  </div>
                  <div className="text-start -ms-60 w-96 ">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Pelatihan Intensif
                    </h1>
                    <p className="tracking-wide">
                      Belajar{" "}
                      <span className="font-bold">online & offline</span> 4
                      bulan, kuasai teknologi terkini, bangun project seru dan
                      perkaya portofoliomu!
                    </p>
                    <div>
                      <button className="dwbg rounded-full text-white text-xs px-4 py-2 mt-5 hover:bg-black">
                        Lihat Silabus
                      </button>
                      <button className="dwbg rounded-full text-white text-xs px-4 py-2 m-5 hover:bg-black">
                        Lihat Portofolio Peserta
                      </button>

                      <div className="flex flex-wrap mt-5">
                        <div className="flex flex-wrap w-full gap-6">
                          <img
                            src="/techlogo/html.png"
                            alt="html"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/js.png"
                            alt="js"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/react.png"
                            alt="react"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/laravel.png"
                            alt="laravel"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/node.png"
                            alt="nodejs"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/git.png"
                            alt="git"
                            className="logoSize"
                          />
                        </div>
                        <div className="flex gap-6 w-full mt-4">
                          <img
                            src="/techlogo/golang.png"
                            alt="golang"
                            className="logoSize"
                          />
                          <img
                            src="/techlogo/mysql.png"
                            alt="mysql"
                            className="logoSize"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ini ke 2 */}
                  <div className="relative mt-36 ">
                    <div className="absolute left-1/2 top-0 bottom-0 transform md:-mb-60 -translate-x-1/2 border-r-4 border-orange-700 hidden md:block"></div>
                    <div className="absolute p-2 left-1/2 transform -translate-x-1/2 -top-8 bg-orange-700 text-white w-9 h-9 rounded-full items-center justify-center md:flex hidden">
                      <div className="rounded-full bg-white w-full h-full">
                        -
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 -ms-40 relative mt-20">
                    <img
                      src="/images/proses2.png"
                      alt="pelatihan intensif"
                      className="w-21 h-64"
                    />
                    <div className="flex absolute ms-36 -mt-16">
                      <img
                        src="/icon/arow1.png"
                        alt="arow"
                        className=" w-28 h-30"
                      />
                      <img
                        src="/images/bootcamp2.png"
                        alt="bootcamp"
                        className="w-40 h-30 -mt-20"
                      />
                    </div>
                  </div>
                  <div className="text-start -ms-60 w-96 mt-20">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Bangun CV & Asah Softskill
                    </h1>
                    <p className="tracking-wide">
                      Persiapkan diri untuk dunia kerja dengan penuh percaya
                      diri! Program intensif kami menggabungkan pengembangan CV
                      dan Soft Skill untuk menyongsong kesuksesan karir
                    </p>
                  </div>

                  {/* ini 3 */}
                  <div className="relative mt-60 ">
                    <div className="absolute p-2 left-1/2 transform -translate-x-1/2 -top-8 bg-orange-700 text-white w-9 h-9 rounded-full items-center justify-center md:flex hidden">
                      <div className="rounded-full bg-white w-full h-full">
                        -
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 -ms-40 mt-40">
                    <img
                      src="/images/proses3.png"
                      alt="pelatihan intensif"
                      className="w-96 h-64"
                    />
                  </div>
                  <div className="text-start -ms-60 w-96 mt-40">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Dapatkan Pekerjaan Impianmu
                    </h1>
                    <p className="tracking-wide">
                      Lebih dari sekedar belajar! Disalurkan ke 350+ mitra
                      perekrutan kami dengan gaji di atas UMR Jakarta. Dapatkan
                      pengalaman kerja yang membuka pintu kesuksesan karier
                      kamu!
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="block md:hidden -mt-10">
                <div className="grid grid-cols-1">
                  {/* Ini ke 1 */}
                  <div className="">
                    <img
                      src="/images/proses1.png"
                      alt="pelatihan intensif"
                      className="w-screen h-64 p-2"
                    />
                  </div>
                  <div className="text-center w-96 ">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Pelatihan Intensif
                    </h1>
                    <p className="tracking-wide">
                      Belajar{" "}
                      <span className="font-bold">online & offline</span> 4
                      bulan, kuasai teknologi terkini, bangun project seru dan
                      perkaya portofoliomu!
                    </p>
                    <div>
                      <button className="dwbg rounded-full text-white text-xs px-4 py-2 mt-5 hover:bg-black">
                        Lihat Silabus
                      </button>
                      <button className="dwbg rounded-full text-white text-xs px-4 py-2 m-5 hover:bg-black">
                        Lihat Portofolio Peserta
                      </button>
                    </div>
                  </div>

                  {/* Ini ke 2 */}
                  <div className="">
                    <img
                      src="/images/proses2.png"
                      alt="pelatihan intensif"
                      className="w-screen h-64 p-2"
                    />
                  </div>
                  <div className="text-center mb-5 w-96">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Bangun CV & Asah Softskill
                    </h1>
                    <p className="tracking-wide">
                      Persiapkan diri untuk dunia kerja dengan penuh percaya
                      diri! Program intensif kami menggabungkan pengembangan CV
                      dan Soft Skill untuk menyongsong kesuksesan karir
                    </p>
                  </div>

                  {/* ini 3 */}
                  <div className="">
                    <img
                      src="/images/proses3.png"
                      alt="pelatihan intensif"
                      className="w-screen h-64 p-2"
                    />
                  </div>
                  <div className="text-center p-2 w-96">
                    <h1 className="dwcolor text-3xl mb-5 font-extrabold">
                      Dapatkan Pekerjaan Impianmu
                    </h1>
                    <p className="tracking-wide">
                      Lebih dari sekedar belajar! Disalurkan ke 350+ mitra
                      perekrutan kami dengan gaji di atas UMR Jakarta. Dapatkan
                      pengalaman kerja yang membuka pintu kesuksesan karier
                      kamu!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alumni */}
          <div className="mt-40">
            {/* text */}
            <div>
              <h1 className="text-2xl font-extrabold">
                Jadilah Bagian dari <span className="dwcolor">560+ Alumni</span>
              </h1>
              <p>
                Ikuti jejak kesuksesan alumni kami yang sudah bekerja, dan
                tingkatkan networkingmu
              </p>
              <button
                className="rounded-full text-white text-xs px-4 py-2 mt-5"
                style={{ backgroundColor: "#FE4E30" }}
              >
                Daftar & Bayar Sekarang
              </button>
            </div>

            {/* Card */}
            <div className="max-w-screen-2xl mx-auto px-4 py-8">
              <div className="grid md:grid-rows-2 md:grid-cols-4 grid-col-1 gap-4">
                {alumni.map((alum, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative row-span-3">
                      <img
                        src={alum.img}
                        alt={alum.name}
                        className="absolute inset-0 object-cover"
                        style={{ width: alum.wa, height: alum.ha }}
                      />
                    </div>
                    <div className="col-span-2">
                      <img
                        src={alum.imgpt}
                        alt={`${alum.name} company`}
                        className="ms-36 mt-5 mb-10"
                        style={{
                          width: alum.widthpt,
                          height: alum.heightpt,
                          marginBottom: alum.mb,
                        }}
                      />
                    </div>
                    <div className="row-span-2 col-span-2 text-start ms-36 m-2">
                      <h1 className="text-xl font-extrabold dwcolor">
                        {alum.name}
                      </h1>
                      <p className="text-black font-bold">{alum.posision}</p>
                      <p className="text-gray-500 text-sm">{alum.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimoni */}
          <div className="mt-20 p-6">
            <h1 className="text-2xl font-extrabold mb-10">Testimoni Alumni</h1>
            <Slider {...slidealumni}>
              {testialumni.map((ta, index) => (
                <div key={index} className="p-4 max-w-screen-xl mx-auto">
                  <div className="md:block hidden">
                    <div className="grid grid-rows-3 grid-flow-col text-start">
                      <div className="row-span-3 me-2">
                        <img
                          className="rounded-full w-16 h-16 object-cover border-2 border-gray-300"
                          src={ta.img}
                          alt={ta.name}
                        />
                      </div>
                      <div className="col-span-2">
                        <h1 className="text-xl">{ta.name}</h1>
                      </div>
                      <div className="row-span-2 col-span-2 text-sm">
                        <p className="text-sm text-gray-600">
                          {ta.posision}{" "}
                          <span className="text-blue-600">{ta.ig}</span>
                        </p>
                        <p className="text-sm text-blue-600"></p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-start text-gray-700">
                    <p>{ta.content}</p>
                    <p className="mt-2 md:hidden block text-blue-600">{ta.ig}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* News */}
          <div className="py-12 mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Kami Telah Diliput di{" "}
                <span className="text-red-500">Berbagai Media</span>
              </h2>
              <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
                {mediaData.map((media, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={media.image}
                      alt={media.title}
                    />
                    <div className="p-4 text-start">
                      <div className="text-sm text-gray-500">{media.date}</div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">
                        {media.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        {media.description}
                      </p>
                      <div className="mt-4">
                        <img
                          className="h-12 w-96"
                          src={media.sourceLogo}
                          alt={media.source}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-4">
              Masih <span className="dwcolor">Belum Yakin</span> dengan
              DumbWays?
              <br />
              Baca FAQ Berikut
            </h1>
            <div className="border-t border-b divide-y">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-5 ${
                    activeIndex === index ? "bg-yellow-200" : "bg-white"
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-lg font-semibold">{faq.question}</h2>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="mt-2 text-gray-700 text-start">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Time bawah */}
          <div className="mt-20 mb-20">
            <h1 className="text-black font-extrabold text-2xl">
              Tunggu Apa Lagi?
            </h1>
            <h1 className="dwcolor font-extrabold text-2xl tracking-wide">
              Mulai Karirmu{" "}
              <span className="text-black">di Industri Teknologi</span>{" "}
              Sekarang!
            </h1>
            <p className="mt-2">
              Kesempatan untuk sukses tidak datang 2x, pendaftaran batch 56 akan
              ditutup dalam
            </p>

            <div className="hidden dwcolor pb-2 md:block pt-5">
              <div className="flex sm:flex-row justify-center space-x-4 space-y-0">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold md:text-5xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.days)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-md md:me-16 text-black">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold md:text-5xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.hours)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-md md:me-16 text-black">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold md:text-5xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.minutes)}
                    </span>{" "}
                    <span className="me-6">:</span>
                  </span>
                  <span className="text-md md:me-16 text-black">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold md:text-5xl">
                    <span className="me-6">
                      {addLeadingZero(timeLeft.seconds)}
                    </span>
                  </span>
                  <span className="text-md -ms-5 text-black">Seconds</span>
                </div>
              </div>
              <button
                className="rounded-full text-white text-xs px-4 py-2 mt-5"
                style={{ backgroundColor: "#FE4E30" }}
              >
                Daftar & Bayar Sekarang
              </button>
            </div>

            {/* Time-Mobile */}
            <div className="dwcolor pb-2 md:hidden block">
              <div className="flex sm:flex-row justify-center space-x-4 space-y-0 mt-5">
                <div className="flex flex-col items-center ">
                  <span className="text-2xl font-bold relative">
                    <span className="me-2">
                      {addLeadingZero(timeLeft.days)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className="text-black" style={{ fontSize: "10px" }}>
                    Days
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold relative">
                    <span className="me-2 ms-2">
                      {addLeadingZero(timeLeft.hours)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "10px" }}>
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">
                    <span className="me-2 ms-2">
                      {addLeadingZero(timeLeft.minutes)}{" "}
                    </span>
                    <span className="text-md absolute ms-1">:</span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "10px" }}>
                    Minutes
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold md:text-7xl me-4">
                    <span className="ms-2">
                      {addLeadingZero(timeLeft.seconds)}{" "}
                    </span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "10px" }}>
                    Seconds
                  </span>
                </div>
              </div>
              <button
                className="rounded-full text-white text-xs px-4 py-2 mt-5"
                style={{ backgroundColor: "#FE4E30" }}
              >
                Daftar & Bayar Sekarang
              </button>
            </div>
          </div>

          {/* maps */}
          {/* <div className="flex justify-center">
            <div className="hover:bg-slate-900 hover:text-white rounded-lg p-5 w-96">
              <div className="flex mx-auto mb-2">
                <img src="/icon/maps.png" alt="maps" />
                <p className="font-extrabol ms-2">Dumbways Bintaro</p>
              </div>
              <p>
                Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001
                Sawah Lama, Ciputat, Tangerang Selatan Banten - 15413
              </p>
            </div>
            <div className="hover:bg-slate-900">
              <div className="hover:bg-slate-900 hover:text-white rounded-lg p-5 w-96">
                <div className="flex mx-auto mb-2">
                  <img src="/icon/maps.png" alt="maps" />
                  <p className="font-extrabol ms-2">Dumbways Bintaro</p>
                </div>
                <p>
                  Permata Bintaro Residence, Jl. Elang IV Kav.28, Rt.004/Rw.001
                  Sawah Lama, Ciputat, Tangerang Selatan Banten - 15413
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7132455796823!2d106.73258197503841!3d-6.301358793687807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1202c227c7f%3A0x55b285547291a43f!2sDumbWays%20Indonesia%20(Bintaro)!5e0!3m2!1sen!2sid!4v1717046475584!5m2!1sen!2sid"
              width="600"
              height="450"
              className="w-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div> */}

          <div>
            <div className="flex justify-center p-2">
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className="hover:bg-slate-900 hover:text-white rounded-lg p-5 w-96 cursor-pointer"
                  onClick={() => setMapUrl(address.mapUrl)}
                >
                  <div className="flex mx-auto mb-2">
                    <img src="/icon/maps.png" alt="maps" className="h-10 md:h-auto"/>
                    <p className="font-extrabold ms-2">{address.name}</p>
                  </div>
                  <p>{address.details}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 w-auto">
              <iframe
                src={mapUrl}
                width="600"
                height="450"
                className="w-full"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
