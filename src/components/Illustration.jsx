import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../assets/Lightbulb2.svg"
import Slider from "react-slick";
import icons_one from "../assets/icon_one.svg"
import icons_two from "../assets/icons_two.svg"
import icons_three from "../assets/icons_three.svg"
import icons_four from "../assets/icons_four.svg"

const Illustration = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <section className="pt-16 pb-16 md:pt-20 lg:pt-[100px] px-4 md:px-6 lg:px-0">
            <div className="container">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-light leading-tight md:leading-[50px] lg:leading-[70px] text-center pb-6 md:pb-8">
                    Our Illustrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[45px] items-stretch">
                    <IllustrationCard
                        heading={"Multi Format"}
                        text={"Available as SVG or PNG files with transparent backgrounds, for easy use and customisation."}
                    />
                    <IllustrationCard
                        heading={"Royalty Free"}
                        text={"An exclusive collection of fully-licensed illustrations that can be used for any purpose."}
                    />
                    <IllustrationCard
                        heading={"Human Made"}
                        text={"2,966 hand-drawn illustrations created by a global community of 77 world-class artists"}
                    />
                </div>
                <div className="flex items-center justify-center mt-[35px] gap-[14px] bg-[#221D21] rounded-[8px] w-[250px] mx-auto px-4 py-3">
                    <div>
                        <img src="/number_1.svg" alt="icon" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-[9px]">PRODUCT HUNT</p>
                        <p className="text-white font-bold text-[16px]">#1 Product of the Day</p>
                    </div>
                </div>
                <p className="text-[16px] leading-[27px] text-center text-[#202020] py-[38px]">Loved by media publications, creative agencies and corporations alike.</p>

                <Slider className="max-w-[1152px] mx-auto mt-[62px]" {...settings}>
                    <div>
                        <img src={icons_one} alt="icons" />
                    </div>
                    <div>
                        <img src={icons_two} alt="icons" />
                    </div>
                    <div>
                        <img src={icons_three} alt="icons" />
                    </div>
                    <div>
                        <img src={icons_four} alt="icons" />
                    </div>
                </Slider>

            </div>
        </section>
    )
}

const IllustrationCard = ({ heading, text }) => {
    return (
        <div className="p-6 sm:p-8 md:p-10 lg:p-[53px] w-full max-w-[466px] mx-auto lg:mx-0 rounded-[10px] border border-[#E0E0E0] h-full flex flex-col">
            <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] pb-3 md:pb-[14px] flex-shrink-0">
                <img className="w-full h-full object-contain" src={img} alt="illustration" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[27px] pb-3 md:pb-[18px] font-light leading-tight lg:leading-[28px] text-[#202020] flex-shrink-0">
                {heading}
            </h3>
            <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[27px] text-[#4D4D4D] flex-grow">
                {text}
            </p>
        </div>
    )
}

export default Illustration