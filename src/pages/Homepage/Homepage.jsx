import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import sportsgif from '../../assets/sports.gif'
import Counter from '../../components/Counter/Counter'; 
// import manufacturingGif from '../../assets/manufacturing.gif';
import jerseys from "../../assets/frontend-assets/jerseys";
import Card from '../../components/Card/Card'

const backgroundImages = [
  "https://www.spgprints.com/hs-fs/hubfs/pike0101-1.jpg?name=pike0101-1.jpg&width=2400",
  "https://2131785.fs1.hubspotusercontent-na1.net/hubfs/2131785/Media/Images%20and%20Videos/Rotary%20Textile%20Printing%20Machines/India%20-%20machine%20detail.jpg",
  "https://forestdigital.co.uk/wp-content/uploads/2022/08/IMG_2611_2-scaled.jpg",
];

const Homepage = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change every 1 second

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <>
    <div
  className="hero min-h-screen transition-all duration-1000 ease-in-out"
  style={{
    backgroundImage: `url(${backgroundImages[currentBg]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>

  <div className="hero-content text-neutral-content">
    <div className="max-w-5xl text-left p-5">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Al Mesbar Textiles</h1>
      <p className="mb-5 text-lg">
        Your trusted partner for high-quality, customizable garments. From sportswear and fitness collections 
        to professional uniforms for construction, medical, and food service industries — we weave excellence, 
        durability, and style into every thread.
      </p>
      <button className="btn bg-slate-700 border-none text-white shadow-none">Explore Our Collections</button>
    </div>
  </div>
</div>


{/* About */}

 <section className="py-12 px-4 bg-white text-gray-800">
    <h2 className="text-3xl font-bold mb-4 text-slate-700 max-w-6xl mx-auto">About Al Mesbar Textiles</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 text-justify">
            Al Mesbar Textiles is a premier textile company based in the UAE, offering high-quality, customizable garments to meet diverse industrial and fashion needs. 
            From sportswear and fitness outfits to medical and construction uniforms, our designs combine durability with elegance.
          </p>
          <p className="text-justify">
            With a commitment to excellence and innovation, we cater to businesses of all sizes looking for personalized solutions. 
            Visit our showroom in Ajman or get in touch to explore our exclusive collections and tailored services.
          </p>
          <div className="stats shadow mt-3 w-full">
  <div className="stat place-items-center">
    <div className="stat-value text-primary">
      <Counter target={31000} duration={5000} />
    </div>
    <div className="stat-title">Textiles Stiched</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value text-secondary">
      <Counter target={42} duration={5000} />
    </div>
    <div className="stat-title">Happy Clients</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-value text-accent">
      <Counter target={12} duration={5000} />
    </div>
    <div className="stat-title">Years of Experience</div>
  </div>
</div>


        </div>

        <div>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUydjYzaDE3Zmw2dm5uOG00ZzFqMGgyYTJqaHdoZzdpNnJjZ3QzZmt6ZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/kfa0X5UdL4tvYMlZBv/source.gif"
            alt="About Us"
            className=" w-full h-auto object-cover"
          />
        </div>
        
      </div>
    </section>

    <div className="divider"></div>

    <section className="py-12 px-4 bg-gray-100 text-gray-800">
  <h2 className="text-3xl font-bold text-center text-slate-700 mb-10">Our Manufacturing Process</h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {/* Step 1: Design */}
    <div className="flex flex-col items-center">
      <i className="bi bi-pencil-square text-4xl text-slate-700 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Design</h3>
      <p className="text-sm">Our creative team customizes garment designs to match your brand identity.</p>
    </div>

    {/* Step 2: Fabric Selection */}
    <div className="flex flex-col items-center">
      <i className="bi bi-box-seam text-4xl text-slate-700 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Fabric Selection</h3>
      <p className="text-sm">We source durable, high-quality fabrics suitable for all applications.</p>
    </div>

    {/* Step 3: Production */}
    <div className="flex flex-col items-center">
      <i className="bi bi-gear-wide-connected text-4xl text-slate-700 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Production</h3>
      <p className="text-sm">Precision stitching and advanced machinery bring designs to life.</p>
    </div>

    {/* Step 4: Quality Check */}
    <div className="flex flex-col items-center">
      <i className="bi bi-check2-circle text-4xl text-slate-700 mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
      <p className="text-sm">Each product is thoroughly inspected to meet global quality standards.</p>
    </div>
  </div>
</section>


<section className=" px-4 bg-white text-gray-800">
  <h2 className="text-3xl font-bold text-left text-slate-700 mb-10 max-w-6xl mx-auto">
    Sports and Fitness
  </h2>
  <section className=" text-gray-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left Side Image */}
    <div>
      <img
        src={sportsgif}
        alt="Customize Your Jersey"
        className="w-full h-full object-cover "
      />
    </div>

    {/* Right Side Content */}
    <div className='bg-gray-100 py-20 px-10'>
      <p className="text-2xl font-bold text-slate-700 mb-4">
        Customize Your Jersey as You Wish
      </p>
      <p className="text-justify mb-4">
        At Al Mesbar Textiles, you have the freedom to fully customize your jerseys from color combinations to printing and fit. Whether it's for a sports team or a corporate identity, your design becomes reality with us.
      </p>
      <p className="text-justify mb-6">
        We use premium-grade materials and precision stitching to ensure maximum comfort, durability, and performance. Our craftsmanship reflects quality at every seam.
      </p>
      <button className="btn bg-slate-700 border-none text-white shadow hover:bg-slate-800">
        Start Designing
      </button>
    </div>
    
  </div>
</section>


  <div className="max-w-7xl mx-auto">
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {jerseys.map((jersey) => (
        <SwiperSlide key={jersey.id}>
          <Card jersey={jersey} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



    </>

  );
};

export default Homepage;
