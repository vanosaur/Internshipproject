import SlideIn from './SlideIn';

export default function SlideInPair({ leftContent, rightContent, className = '' }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}>
      <SlideIn direction="left" className="w-full lg:w-7/12">{leftContent}</SlideIn>
      <SlideIn direction="right" className="w-full lg:w-5/12 hidden lg:block">{rightContent}</SlideIn>
    </div>
  );
}
