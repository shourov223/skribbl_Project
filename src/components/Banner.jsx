const Banner = () => {
    return (
        <section className="pt-[65px] px-4 md:px-6 lg:px-8">
            <div className="container max-w-7xl mx-auto">
                <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] xl:text-[86px] 
                              font-light leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[1.25] xl:leading-[89px] 
                              max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] 
                              mx-auto text-[#202020] text-center pb-[20px] sm:pb-[25px] md:pb-[30px]">
                    A Human Story in Every Pixel
                </h1>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
                             text-[#4D4D4D] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.65] 
                             max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] 
                             mx-auto text-center px-2">
                    Enrich your next design project, and{' '}
                    <span className="font-semibold text-[#202020]">support real artists</span>
                    <br className="hidden sm:block" />{' '}
                    <span className="sm:hidden"> </span>
                    with our exclusive collection of royalty-free illustrations.
                </p>

                <div className="border border-[#666666] rounded-[5px] overflow-hidden 
                               max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] 
                               mx-auto mt-[25px] sm:mt-[30px] md:mt-[35px] 
                               flex flex-col sm:flex-row items-stretch">
                    <input
                        className="focus:outline-none w-full px-[15px] sm:px-[20px] py-[18px] sm:py-[20px] md:py-[24px] 
                                  text-[14px] sm:text-[16px] border-b sm:border-b-0 sm:border-r border-[#666666]"
                        type="search"
                        placeholder="Search for illustrations..."
                    />
                    <button className="bg-[#202020] px-[20px] sm:px-[28px] md:px-[34px] 
                                     py-[18px] sm:py-[20px] md:py-[24px] 
                                     text-white text-[14px] sm:text-[16px] font-medium 
                                     hover:bg-[#333333] transition-colors duration-200 
                                     flex-shrink-0">
                        Search
                    </button>
                </div>

                <p className="pt-[25px] sm:pt-[28px] md:pt-[33px] text-center 
                             text-[12px] sm:text-[14px] md:text-[16px] 
                             px-4 leading-relaxed">
                    Or browse our categories{' '}
                    <a className="text-[#202020] font-semibold hover:underline transition-all duration-200" href="#">
                        here
                    </a>
                    / subscribe for more{' '}
                    <a className="text-[#202020] font-semibold hover:underline transition-all duration-200" href="#">
                        here
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Banner