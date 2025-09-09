const AboutPage = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          About SleepTracker
        </h1>
        <p className='text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </section>
      {/* Mission Section */}
      <section className='py-16 px-8 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Mission</h2>
        <p className='text-gray-600 max-w-3xl mx-auto text-center'>
          At SleepTracker, we aim to help individuals achieve better sleep and
          overall well-being by providing insights into their sleep patterns.
          Better sleep leads to a healthier, happier life, and we’re here to
          guide you every step of the way.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
