"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const PortfolioSection = () => {
    const scrollContainerRef = useRef(null);

    const itemsToShow = 3;
    const itemWidthPx = 400; // Make sure this matches the min-w-[400px] in your CSS

    const portfolioItems = [
        {
            id: 1,
            image: '/members/p1.jpeg',
            category: 'IT / Solutions',
            title: 'Digital <br> Transformation',
            description: 'A deep dive into strategies for transforming businesses in the digital age.',
            link: '/portfolio-details',
        },
        {
            id: 2,
            image: '/members/p2.jpeg',
            category: 'Web Development',
            title: 'Modern Web <br> Applications',
            description: 'Building scalable and responsive web applications with cutting-edge technologies.',
            link: '/portfolio-details',
        },
        {
            id: 3,
            image: '/members/p3.jpeg',
            category: 'UI/UX Design',
            title: 'User-Centric <br> Design',
            description: 'Crafting intuitive and engaging user experiences through thoughtful design principles.',
            link: '/portfolio-details',
        },
        {
            id: 4,
            image: '/members/p1.jpeg',
            category: 'Cloud Computing',
            title: 'Cloud Migration <br> Strategies',
            description: 'Navigating the complexities of migrating infrastructure to cloud platforms.',
            link: '/portfolio-details',
        },
        {
            id: 5,
            image: '/members/p2.jpeg',
            category: 'Cybersecurity',
            title: 'Advanced Threat <br> Protection',
            description: 'Implementing robust security measures to protect against evolving cyber threats.',
            link: '/portfolio-details',
        },
        {
            id: 6,
            image: '/members/p3.jpeg',
            category: 'Data Analytics',
            title: 'Big Data <br> Insights',
            description: 'Unlocking actionable insights from large datasets for informed decision-making.',
            link: '/portfolio-details',
        },
    ];

    const totalItems = portfolioItems.length;
    const repeatCount = 3; // For seamless looping

    const [currentIndex, setCurrentIndex] = useState(0);
    const initialScrollPosition = totalItems * itemWidthPx;

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: initialScrollPosition,
                behavior: 'auto',
            });
        }
    }, [initialScrollPosition]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const targetScroll = initialScrollPosition + (currentIndex * itemWidthPx);

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth',
        });

        const handleLoopReset = () => {
            const currentScroll = container.scrollLeft;

            if (currentScroll >= initialScrollPosition + (totalItems * itemWidthPx)) {
                container.scrollTo({ left: initialScrollPosition, behavior: 'auto' });
                setCurrentIndex(0);
            } else if (currentScroll < initialScrollPosition) {
                const newScroll = initialScrollPosition + ((totalItems - 1) * itemWidthPx);
                container.scrollTo({ left: newScroll, behavior: 'auto' });
                setCurrentIndex(totalItems - 1);
            }
        };

        let scrollTimeout;
        const onScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleLoopReset, 100);
        };

        container.addEventListener('scroll', onScroll);
        return () => {
            container.removeEventListener('scroll', onScroll);
            clearTimeout(scrollTimeout);
        };

    }, [currentIndex, initialScrollPosition, itemWidthPx, totalItems]);

    const goToPrev = () => {
        setCurrentIndex(prev => prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev + 1);
    };

    return (
        <section className="relative py-16 bg-blue-700 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-14">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <div className="text-white">
                                <span className="text-lg font-semibold mb-2 block">Latest Case Studies</span>
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Reads Our Recent Case Studies</h2>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={goToPrev}
                                className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-30 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                aria-label="Previous Item"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={goToNext}
                                className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-30 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                aria-label="Next Item"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-scroll no-scrollbar -mx-4 pb-4 w-full max-w-[1200px] mx-auto scroll-smooth"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {Array.from({ length: repeatCount }).map((_, setIndex) => (
                        portfolioItems.map((item) => (
                            <div
                                key={`set-${setIndex}-item-${item.id}`}
                                className="min-w-[400px] px-4"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <div className="group bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden relative transform hover:scale-102">
                                    <div className="relative w-full h-[300px] overflow-hidden rounded-t-lg">
                                        <Image
                                            src={item.image}
                                            alt="Portfolio Image"
                                            layout="fill"
                                            objectFit="cover"
                                            className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out" // Subtle zoom on hover
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-75 flex flex-col items-center justify-end text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        <div className="text-center">
                                            <span className="text-sm text-gray-300 font-medium mb-1 block">{item.category}</span>
                                            <h3 className="text-2xl font-bold mb-2 leading-tight">{item.title.replace('<br>', ' ')}</h3>
                                            <p className="text-sm text-gray-200 mb-4 line-clamp-3">{item.description}</p>
                                            <a href={item.link} className="inline-flex items-center text-blue-300 hover:text-blue-100 font-semibold transition duration-300 ease-in-out">
                                                Learn More
                                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;