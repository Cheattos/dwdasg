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
    const difference = +new Date("2024-06-01") - +new Date();
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
            <p className="text-sm tracking-widest">
              Peluang belajar dengan investasi kecil didepan. bayar selebihnya
              setelah kamu sukses bekerja!
            </p>
          </div>

          {/* card */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2">
              {/* card 1 */}
              <div className="ms-32">
                <div className="flex gap-3 pt-16 ps-64 pb-5">
                  {techlogooffer.map((src, index) => (
                    <img src={src} alt={`Image ${index}`} className="size-6" />
                  ))}
                  <img src="/techlogo/bznet.png" alt="bznet" className="h-6" />
                </div>
                <div className="ps-64 pb-5">
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
              <div className="pt-16 ps-16 text-start">
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
              <div className="">
                <div className="flex gap-3 pt-16 pb-5">
                  {techlogooffer.map((src, index) => (
                    <img src={src} alt={`Image ${index}`} className="size-12" />
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
              <div className="pt-16 text-start ">
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
                    <span className="me-2 ms-3">
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
                    <span className="me-2 ms-3">
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
                    <span className="ms-3">
                      {addLeadingZero(timeLeft.seconds)}{" "}
                    </span>
                  </span>
                  <span className=" text-black" style={{ fontSize: "13px" }}>
                    Seconds
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5">
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
                  <div className=" text-start">
                    <p className="pt-5">Syarat Pendaftaran</p>
                    <div className="ps-5">
                      <li>
                        Berusia minimal 18 tahun dan maksimal 26 tahun pada saat
                        mendaftar
                      </li>
                      <li>Pendidikan minimal SMK/SMA/Sederajat</li>
                    </div>
                    <p className="text-blue-600">Selengkapnya lihat di FAQ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Company */}
          <div className="text-center text-black mt-10 p-2">
            <h1 className="text-3xl font-black">
              Kami Berdiri <span className="dwcolor">Sejak 2017</span> untuk
              Selalu Menjadi
            </h1>
            <h1 className="dwcolor text-3xl font-black mb-3 mt-1">Solusi Bagi Pencari Kerja!</h1>
            <p className="tracking-widest">
              Berikut adalah statistik kami dengan konsistensi kami sebagai
              Bootcamp jaminan di Indonesia.
            </p>
            <div className="hidden dwcolor pb-2 md:block pt-5">
              <div className="flex sm:flex-row justify-center space-x-4 space-y-0">
                <div className="flex flex-col items-center">
                  <span className="font-bold md:text-5xl text-black">
                    <span className="me-6">
                      560+
                    </span>{" "}
                  </span>
                  <span className="text-xl md:me-10 text-black">Alumni</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold md:text-5xl text-black">
                    <span className="me-6">
                      370+
                    </span>{" "}
                  </span>
                  <span className="text-xl md:me-10 text-black">Hiring Partners</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold md:text-5xl text-black">
                    <span className="me-6">
                     52
                    </span>{" "}
                  </span>
                  <span className="text-xl md:me-5 text-black">Batch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
