import Common_btn from "./Common_btn"
import tree from "../assets/tree.png"
import football from "../assets/football.png"
import bird from "../assets/bird.png"

const Leatest = () => {
    return (
        <section className="pb-[80px] md:pb-[100px] lg:pb-[136px]">
            <div className="container">
                <h3 className="text-[#202020] font-light text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-[80%] md:after:w-[300px] lg:after:w-[470px] after:bg-[#E0E0E0] after:h-[1px]">
                    The Latest
                </h3>
                <p className="pt-[16px] sm:pt-[20px] pb-[20px] sm:pb-[30px] text-[#4D4D4D] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[27px]">
                    New illustration packs added to our collection.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[60px] lg:gap-[87px]">
                    <Items
                        second_text={true}
                        img={tree}
                        title={"Christmas Trees"}
                        text_one={"9 illustrations (PNG & SVG), inspired by Christmas trees."}
                        text_two={"Created by Yudi Irawan"}
                    />
                    <Items
                        second_text={true}
                        img={football}
                        title={"Playing Football"}
                        text_one={"10 illustrations (PNG & SVG), inspired by playing football."}
                        text_two={"Created by Yudi Irawan"}
                    />
                    <Items
                        second_text={true}
                        img={bird}
                        title={"Simple Insects"}
                        text_one={"10 illustrations (PNG), inspired by simple insects."}
                        text_two={"Created by Pavel Petrachenka"}
                    />
                </div>
            </div>
        </section>
    )
}

export const Items = ({ img, title, text_one, second_text = false, text_two }) => {
    return (
        <div className="p-6 sm:p-8 md:p-10 border border-[#4D4D4D] rounded-[10px] text-center">
            <div className="w-full max-w-[300px] md:max-w-[357px] mx-auto">
                <img src={img} alt={title} className="w-full h-auto object-contain" />
            </div>
            <p className="py-6 text-[#202020] text-[20px] sm:text-[22px] md:text-[25px] leading-[28px] font-light">
                {title}
            </p>
            <p className="max-w-[296px] mx-auto text-[15px] sm:text-[16px] leading-[24px] sm:leading-[27px] pb-4">
                {text_one}
            </p>
            {second_text && (
                <p className="text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] text-[#4d4d4d] pb-6 sm:pb-[57px]">
                    {text_two}
                </p>
            )}
            <Common_btn text={"Preview"} />
        </div>
    )
}

export default Leatest
