import Image from "next/image";
import './globals.css';
import Link from "next/link";
import { ArrowRight ,ArrowLeft, Laptop,Fingerprint,Clipboard,Database,Video,Facebook,Instagram,Twitter,MessageSquare} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/Portfoliosection";


export default function Home() {

  const newsData = [
    {
      id: 1,
      image: "/members/m1.jpeg", // Adjust path as needed
      author: "Admin",
      date: "05 Aug 2019",
      title: "Monthly Web Development Update Design Ethics & Clarity Over Solution",
      link: "#", // Replace with actual news article URL
    },
    {
      id: 2,
      image: "/members/m2.jpeg",
      author: "Admin",
      date: "05 Aug 2019",
      title: "Design System: What It And How To Create One Using Indigo Design Sence",
      link: "#",
    },
    {
      id: 3,
      image: "/members/m3.jpeg",
      author: "Admin",
      date: "05 Aug 2019",
      title: "How We Used WebAssembly To Speed Up Our Web App By Omnivus",
      link: "#",
    },
    // Add more news items as needed
  ];

  const testimonialsData = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author: "Eugene Freeman",
      position: "Tincidunt",
      photo: "/members/01.jpeg", // Adjust path as needed
      colorClass: "bg-blue-100 text-blue-800 border-blue-500", // Tailwind classes for background and text color
    },
    {
      id: 2,
      quote: "Another great experience! The team was highly professional and delivered exactly what was promised. Highly recommended.",
      author: "Kelly Coleman",
      position: "Nulla nec",
      photo: "/members/02.jpeg",
      colorClass: "bg-red-100 text-red-800 border-red-500",
    },
    {
      id: 3,
      quote: "Fantastic service! They really understood our needs and provided an exceptional solution. Will definitely work with them again.",
      author: "Philip Mendez",
      position: "Consectetur",
      photo: "/members/03.jpeg",
      colorClass: "bg-green-100 text-green-800 border-green-500",
    },
    
    // Add more testimonials as needed
  ];

  const teamMembersData = [
    {
      id: 1,
      name: "Harry Garrett",
      position: "Design Expert",
      photo: "/members/team-01.jpeg", // Adjust path as needed
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Doris Jordan",
      position: "Design Expert",
      photo: "/members/team-02.jpeg", // Adjust path as needed
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Johnny Ramirez",
      position: "Design Expert",
      photo: "/members/team-03.jpeg", // Adjust path as needed
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Diana Wagner",
      position: "Design Expert",
      photo: "/members/team-04.jpeg", // Adjust path as needed
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Harry Garrett", // Re-used name for example, adjust as needed
      position: "Design Expert",
      photo: "/members/team-01.jpeg", // Adjust path as needed
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    // Add more team members as needed
  ];

  const services1 = [
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      // Dynamic colors, adjusting for color-1, color-2, color-3, color-4 from original HTML
      bgColor: 'bg-blue-100', // Example for 'color-1'
      textColor: 'text-blue-600',
      hoverBgColor: 'group-hover:bg-blue-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      bgColor: 'bg-green-100', // Example for 'color-2'
      textColor: 'text-green-600',
      hoverBgColor: 'group-hover:bg-green-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      bgColor: 'bg-yellow-100', // Example for 'color-3'
      textColor: 'text-yellow-600',
      hoverBgColor: 'group-hover:bg-yellow-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      bgColor: 'bg-yellow-100', // Example for another 'color-3'
      textColor: 'text-yellow-600',
      hoverBgColor: 'group-hover:bg-yellow-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      bgColor: 'bg-blue-100', // Example for another 'color-1'
      textColor: 'text-blue-600',
      hoverBgColor: 'group-hover:bg-blue-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
    {
      icon: Laptop,
      title: 'Desktop Computing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam',
      link: 'service-details.html',
      bgColor: 'bg-red-100', // Example for 'color-4'
      textColor: 'text-red-600',
      hoverBgColor: 'group-hover:bg-red-600',
      hoverTextColor: 'group-hover:text-white',
      hoverTitleColor: 'group-hover:text-white',
      hoverDescriptionColor: 'group-hover:text-white'
    },
  ];

  const services = [
    {
      icon: Laptop,
      title: 'IT Solutions',
      description: 'Sed ut perspiciatis unde omnis iste natus error volup',
      link: 'service-details.html',
      bgColor: 'bg-green-100', // Light indigo background for icon
      textColor: 'text-green-600', // Indigo text for icon
      hoverBgColor: 'group-hover:bg-green-600', // Hover background for icon
      hoverTextColor: 'group-hover:text-white', // Hover text color for icon
      // You could also add a hover color for the link itself
      // hoverLinkColor: 'hover:text-indigo-600'
    },
    {
      icon: Fingerprint,
      title: 'Security System',
      description: 'Sed ut perspiciatis unde omnis iste natus error volup',
      link: 'service-details.html',
      bgColor: 'bg-blue-100', // Light green background
      textColor: 'text-blue-600', // Green text
      hoverBgColor: 'group-hover:bg-blue-600',
      hoverTextColor: 'group-hover:text-white',
    },
    {
      icon: Clipboard,
      title: 'Web Development',
      description: 'Sed ut perspiciatis unde omnis iste natus error volup',
      link: 'service-details.html',
      bgColor: 'bg-yellow-100', // Light yellow background
      textColor: 'text-yellow-600', // Yellow text
      hoverBgColor: 'group-hover:bg-yellow-600',
      hoverTextColor: 'group-hover:text-white',
    },
    {
      icon: Database,
      title: 'Database Security',
      description: 'Sed ut perspiciatis unde omnis iste natus error volup',
      link: 'service-details.html',
      bgColor: 'bg-red-100', // Light red background
      textColor: 'text-red-600', // Red text
      hoverBgColor: 'group-hover:bg-red-600',
      hoverTextColor: 'group-hover:text-white',
    },
  ];

  return (
    <div>
      
      <Header />
      <section className="relative bg-blue-100 py-32 md:py-48 dark:bg-gray-900 dark:text-white">

      <div className="container-1470 mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between ml-">

          {/* Left column: Text content (7/12 width on large screens, full width on smaller) */}
          <div className="lg:w-7/12 text-center lg:text-left mb-10 lg:mb-0 pr-0 lg:pr-16">
            {/* Banner text content */}
            <div className="banner-content ">
              {/* Title tag/category */}
              <span className="text-black font-semibold text-2xl mb-8 block ml-5 dark:text-white">
                IT Business Consulting
              </span>
              {/* Main heading with responsive font sizes */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-14 ml-3 dark:text-white">
                Best IT Solutions <br className="hidden md:block"/> Provider Agency
              </h1>
              {/* Description paragraph */}
              <p className="text-black text-lg md:text-xl leading-relaxed mb-14 ml-5 font-semibold dark:text-gray-400">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis
              </p>
              {/* Call-to-action button */}
              <Link href="/services" className="inline-flex items-center px-8 py-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-900 transition-colors duration-300 text-md ml-5">
                Our Services <ArrowRight size={20} className="ml-3" />
              </Link>
            </div>
          </div>

          {/* Right column: Image (5/12 width on large screens, hidden on smaller) */}
          <div className="lg:w-5/12 hidden lg:block flex justify-center lg:justify-end relative pl-24">
             {/* Hexagonal shape for the image container */}
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gray-200 rounded-lg overflow-hidden
                          before:content-[''] before:absolute before:inset-0 before:bg-blue-500 before:z-0
                          clip-path-polygon-hex">
              {/* The actual image */}
              <Image
                src="/banner-img.jpeg" // Ensure this path is correct relative to your public folder
                alt="IT Solutions Consulting"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Covers the container while maintaining aspect ratio
                className="z-10 relative" // Ensure image is above the pseudo-element if used
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Static Slider navigation arrows (non-functional in this static version) */}
      <div className="absolute bottom-5 right-5 flex space-x-2 z-20">
        <button className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-blue-600">
          <ArrowLeft size={20} />
        </button>
        <button className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-blue-600">
          <ArrowRight size={20} />
        </button>
      </div>
    </section>

    <section>
      <div className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 dark:text-white"> {/* Adjusted vertical padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Centering container, responsive padding */}
          <span className="text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-4 block">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 dark:text-white"> {/* Responsive font sizes */}
            What We Do
          </h2>
        </div>

        {/* Services section content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-8 py-8"> {/* Responsive grid and padding */}
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item group text-center p-6 rounded-lg shadow-md bg-white
                                      hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2
                                      flex flex-col items-center justify-start" // Added flex for content alignment
            >
              <div
                className={`icon inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4
                            transition-colors duration-300 ${service.bgColor} ${service.textColor}
                            ${service.hoverBgColor} ${service.hoverTextColor}`}
              >
                <service.icon size={50} className="sm:w-14 sm:h-14 lg:w-[65px] lg:h-[65px]" /> {/* Responsive icon size */}
              </div>
              {/* Title */}
              <h5 className="title text-lg sm:text-xl font-bold text-gray-800 mb-2">
                <Link href={service.link} className="hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </Link>
              </h5>
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mt-2 mb-4 flex-grow"> {/* flex-grow to ensure uniform height */}
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="feature-section section-gap bg-blue-50 py-16 md:py-24 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl "> {/* Using max-w-7xl for a standard container */}
        {/* Responsive row: flex column on small, flex row on large. Centered vertically. */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">

          {/* Left column: Image Gallery */}
          <div className="w-full lg:w-1/2 md:max-w-xl lg:max-w-none"> {/* Full width on small, capped on medium, 1/2 on large */}
            <div className="tile-gallery-one relative"> {/* Make this relative for absolute positioning of children if needed */}
              {/* Image One */}
              <div className="img-one z-10"> {/* Added shadow and rounding */}
                {/* Adjust width/height as needed. Assuming aspect-video or specific dimensions */}
                <Image
                  src="/tile-gallery-01.jpeg" // Ensure path is correct
                  alt="Feature Image One"
                  width={600} // Example width
                  height={400} // Example height, adjust as per your image aspect ratio
                  className="h-auto object-cover border-4 border-white " 
                />
              </div>
              {/* Image Two - positioned for a "tiled" effect, might need fine-tuning with top/right values */}
              <div className="img-two absolute bottom-[-1rem] right-[-1rem] md:bottom-[-2rem] md:right-[-3rem] z-20 shadow-xl
                              hidden sm:block"> {/* Hidden on very small screens, block on sm+ */}
                <Image
                  src="/tile-gallery-02.jpeg" // Ensure path is correct
                  alt="Feature Image Two"
                  width={500} // Example width, adjust as needed
                  height={400} // Example height
                  className="w-full h-auto object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Right column: Feature Text Block */}
          <div className="w-full lg:w-1/2 md:max-w-xl lg:max-w-none mt-10 lg:mt-0"> {/* Added top margin for mobile stacking */}
            <div className="feature-text-block">
              {/* Section Title */}
              <div className="section-title mb-6"> {/* mb-20 approx mb-6 or mb-8 */}
                <span className="title-tag text-blue-900 font-semibold text-base mb-2 block">
                  CORE FEATURES
                </span>
                <h2 className="title text-5xl md:text-5xl font-bold text-gray-800 leading-tight dark:text-white">
                  Get More Good Experience.
                </h2>
              </div>
              {/* Big Text Paragraph */}
              
              <p className="big-text text-xl text-gray-700 mb-6 font-medium  dark:text-gray-400"> {/* mb-30 approx mb-6 or mb-8 */}
                Our knowledge of computers will help us
              </p>
              {/* Main Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-8  dark:text-white">
                Does any industry face a more complex audience journey and marketing sales process than B2B
                technology? Consider the number of people who influence a sale, the length of the
                decision-making cycle, the competing interests of the people who purchase, implement,
                manage, and use the technology. It’s a lot meaningful content here.
              </p>
             
              {/* Feature Buttons */}
              <ul className="feature-btn flex flex-wrap gap-4 mt-8"> {/* mt-30 approx mt-8 */}
                <li>
                  <Link href="/about" className="main-btn inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="main-btn main-btn-2 inline-flex items-center px-8 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-900 hover:text-white transition-colors duration-300">
                    <Video size={20} className="mr-2" /> Intro Video
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section> 
      <div className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 dark:text-white"> {/* Responsive vertical padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Responsive horizontal padding and centering */}
          <span className="text-base sm:text-lg font-semibold text-blue-800 mb-2 sm:mb-4 block"> {/* Responsive font size for SERVICES */}
            OUR LATEST SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight  dark:text-white"> {/* Responsive font size and line height */}
            We Offer Better Solution <br className="hidden sm:inline" /> For Your IT Business
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16"> {/* Responsive grid, gaps, and padding */}
          {services1.map((service, index) => (
            <div
              key={index}
              className="service-item-two group w-full max-w-sm mx-auto p-6 sm:p-8 rounded-lg shadow-md bg-white
                         mt-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2
                         text-left flex flex-col justify-start" // Added flex for consistent alignment, text-left
            >
              {/* Icon */}
              {/* Responsive icon size: default 24px, sm: 28px, md: 30px */}
              <service.icon size={24} className={`sm:w-7 sm:h-7 md:w-8 md:h-8 ${service.textColor} mb-3`} />
              
              {/* Title */}
              <h3 className="title text-xl sm:text-2xl font-bold text-gray-800 mb-2"> {/* Responsive font size for title */}
                <Link href={service.link} className="hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </Link>
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-0 flex-grow"> {/* Responsive font size, flex-grow */}
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <PortfolioSection />

    <section className="dark:bg-gray-900 dark:text-white">
      <div className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto px-4 justify-center text-center bg-gray-50 dark:bg-gray-900 dark:text-white">
        <span className="text-lg font-semibold text-blue-800 mb-4 block ">
          OUR TEAM MEMBERS
        </span>
        <h2 className="text-5xl font-bold text-black leading-tight  dark:text-white">Meet our Exclusive <br/>Leadership</h2>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {teamMembersData.map((member) => (
            <div key={member.id} className="team-member mb-30">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden group">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-end">
                    <div className="flex space-x-3 ">
                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400 transition-colors justify-end">
                        <Facebook size={24} />
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400 transition-colors">
                        <Twitter size={24} />
                      </a>
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-blue-400 transition-colors">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-semibold mb-1">
                    <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
                      {member.name}
                    </a>
                  </h5>
                  <span className="text-gray-600 text-sm">{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>


    <section className="bg-blue-50 py-16 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto px-4 justify-center text-center">
        <span className="text-lg font-semibold text-blue-800 mb-4 block">
          CLIENT TESTIMONIALS
        </span>
        <h2 className="text-5xl font-bold text-black  dark:text-white">What Our Clients Says</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 ">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className={`testimonial-box p-8 shadow-md h-full flex flex-col bg-white border-t-4 ${testimonial.colorClass}`}>
                <p className="text-lg leading-relaxed mb-6 flex-grow text-gray-500 py-6">
                  {testimonial.quote}
                </p>
                <div className="author flex items-center mt-auto ">
                  <div className="photo w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm flex-shrink-0">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="desc text-black">
                    <h6 className="text-xl font-semibold leading-tight">{testimonial.author}</h6>
                    <span className="text-sm opacity-90">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </section>

    <section
      className="relative bg-cover bg-center py-12 md:py-20 lg:py-24 "
      style={{ backgroundImage: "url('/members/b3.jpeg')" }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
          {/* Text */}
          <div className="text-white">
            <span className="text-sm uppercase tracking-wider text-blue-200 mb-2 block">
              Call To Action
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Let’s Discuss With Us Your Estimate.
            </h2>
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 text-sm sm:text-base font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto px-4 justify-center text-center bg-gray-50 dark:bg-gray-900 dark:text-white">
        <span className="text-lg font-semibold text-blue-800 mb-4 block">
          LATEST NEWS
        </span>
        <h2 className="text-5xl font-bold text-black leading-tight  dark:text-white">Read Our Latest <br/> News & Blog</h2>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {newsData.map((newsItem) => (
            <div key={newsItem.id} className="w-full max-w-sm"> {/* Added max-w-sm to limit width on larger screens and w-full for small screens */}
              <div className="latest-news-box mt-30 bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="post-thumb h-48 overflow-hidden">
                  <img src={newsItem.image} alt="News Image" className="w-full h-full object-cover" />
                </div>
                <div className="post-content p-6">
                  <ul className="post-meta flex text-sm text-gray-600 mb-3 space-x-2">
                    <li>
                      <Link href={newsItem.link} className="hover:text-blue-600 transition-colors">
                        By {newsItem.author},
                      </Link>
                    </li>
                    <li>
                      <Link href={newsItem.link} className="hover:text-blue-600 transition-colors">
                        {newsItem.date}
                      </Link>
                    </li>
                  </ul>
                  <h4 className="title text-xl font-semibold mb-4 leading-tight">
                    <Link href={newsItem.link} className="text-gray-800 hover:text-blue-600 transition-colors">
                      {newsItem.title}
                    </Link>
                  </h4>
                  <Link href={newsItem.link} className="read-more-btn inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Read More <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

    <Footer/>
    </div>
  );
}
