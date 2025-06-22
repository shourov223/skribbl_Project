import Common_btn from "../components/Common_btn"
import Magazine_one from "../assets/Magazine_one.jpg"
import Magazine_two from "../assets/Magazine_two.jpg"
import Magazine_three from "../assets/Magazine_three.jpg"

const Magazine = () => {
    return (
        <section className="py-10">
            <div className="container">
                <h3 className="text-[#202020] font-light text-[28px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-[36px] sm:leading-[44px] md:leading-[54px] lg:leading-[60px] relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-[60%] sm:after:w-[200px] md:after:w-[300px] lg:after:w-[470px] after:bg-[#E0E0E0] after:h-[1px] mb-4">
                    Magazine
                </h3>
                <p className="pt-4 sm:pt-5 pb-6 sm:pb-8 text-[#4D4D4D] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[27px]">
                    Checkout our latest art & design features
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    <Items
                        image={Magazine_one}
                        title={"10 Questions With Hristina Hristova"}
                        text={"It’s a pleasure to take part in such a nice community of artists and to create art that can be useful for people."}
                    />
                    <Items
                        image={Magazine_two}
                        title={"10 Questions With Hanley Watimar"}
                        text={"It’s an honor to be part of a platform where human-made art is appreciated and promoted."}
                    />
                    <Items
                        image={Magazine_three}
                        title={"10 Questions With Artist, Tamara"}
                        text={"It’s inspiring, and I’m truly happy to co-create a diversity of styles and expressions through illustration."}
                    />
                </div>
            </div>
        </section>
    )
}

const Items = ({ image, title, text }) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-hidden rounded-xl">
                <img src={image} alt={title} className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <h4 className="text-[22px] sm:text-[24px] leading-[30px] font-light text-[#202020] pt-6 pb-4">
                {title}
            </h4>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#666666] pb-4">
                {text}
            </p>
            <Common_btn text={"Read More"} />
        </div>
    )
}

export default Magazine
