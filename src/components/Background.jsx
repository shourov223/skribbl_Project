import banner_img from "../assets/Background.jpg"

const Background = () => {
    return (
        <section>
            <div className="container px-4 sm:px-6 lg:px-0">
                <div className="relative h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1012px]">
                    <img
                        src={banner_img}
                        alt="background"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-1/2 right-4 sm:right-10 lg:right-[138px] transform -translate-y-1/2 bg-white shadow-2xl w-full max-w-[90%] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[617px] h-auto px-6 py-8 sm:p-[40px] lg:p-[65px] flex justify-center items-center rounded-lg">
                        <p className="text-[#202020] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[34px] leading-[28px] sm:leading-[32px] md:leading-[36px] font-light text-center">
                            “Skribbl is like an artistic treasure trove, constantly buzzing with
                            new artists, styles, and illustration subjects. It’s a playground of
                            inspiration and source of original, exclusive assets for our campaigns.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background
