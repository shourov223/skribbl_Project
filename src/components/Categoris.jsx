import React from 'react'
import { Items } from './Leatest'
import image_one from "../assets/category_one.png"
import image_two from "../assets/category_two.png"
import image_three from "../assets/category_three.png"
import image_four from "../assets/category_four.png"
import image_five from "../assets/category_five.png"
import image_six from "../assets/category_six.png"
import image_seven from "../assets/category_seven.png"
import image_eight from "../assets/category_eight.png"
import image_nine from "../assets/category_nine.png"

const Categoris = () => {
    return (
        <section className='py-[60px] sm:py-[80px] md:py-[100px]'>
            <div className="container">
                <h3 className="text-[#202020] font-light text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-[80%] md:after:w-[300px] lg:after:w-[470px] after:bg-[#E0E0E0] after:h-[1px] mb-4">
                    Categories
                </h3>
                <p className="pt-[16px] sm:pt-[20px] pb-[24px] sm:pb-[30px] text-[#4D4D4D] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[27px]">
                    Browse our categories of illustration packs.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[50px] lg:gap-[87px]'>
                    <Items img={image_one} title={"Business & Education"} text_one={"From educational themes to business trends – these illustration packs provide a unique take on current affairs affecting us all."} />
                    <Items img={image_two} title={"Food & Drink"} text_one={"From foodies to designers – these illustration packs are playful interpretations of some food and drink we know and love."} />
                    <Items img={image_three} title={"Health & Fitness"} text_one={"From health and wellbeing to keeping fit – these illustration packs relate to all things self-care and staying active."} />
                    <Items img={image_four} title={"Holidays & Occasions"} text_one={"From holiday celebrations to special occasions – these illustration packs depict the fun-filled times we all enjoy."} />
                    <Items img={image_five} title={"Nature & Environment"} text_one={"These illustration packs explore the beauty and importance of the natural world."} />
                    <Items img={image_six} title={"People & Animals"} text_one={"These illustration packs celebrate humans, pets, and wildlife in fun and creative ways."} />
                    <Items img={image_seven} title={"Travel & Lifestyle"} text_one={"Explore lifestyle, culture, and travel concepts with these vibrant illustration packs."} />
                    <Items img={image_eight} title={"Abstract Ideas"} text_one={"A creative interpretation of complex or abstract topics, designed with imagination."} />
                    <Items img={image_nine} title={"Coming Soon"} text_one={"New exciting categories will be added shortly. Stay tuned for upcoming illustration packs."} />
                </div>
            </div>
        </section>
    )
}

export default Categoris
