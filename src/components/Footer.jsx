import { FaInstagramSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiLinkedin } from "react-icons/si"

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="pt-8 pb-8 border-y border-y-[#E0E0E0] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[771px_1fr_1fr] gap-8 lg:gap-[70px]">
                    <div>
                        <p className="font-semibold text-[16px] leading-[27px] pb-[17px]">
                            Skribbl | Royalty Free, High-Quality Illustrations for Design Projects
                        </p>
                        <p className="max-w-[718px]">
                            Enrich your next design project, and support human artistry, with Skribbl's growing collection of royalty-free, hand-drawn illustrations.
                        </p>
                        <p className="pb-[20px] md:pb-[30px]">
                            Have a question? Send your email to{" "}
                            <span className="font-semibold text-[15px] leading-[27px]">
                                info@weareskribbl.com
                            </span>
                        </p>
                        <div className="flex items-center gap-4 pb-[30px] text-xl">
                            <FaInstagramSquare />
                            <FaXTwitter />
                            <SiLinkedin />
                        </div>
                        <p className="font-semibold leading-[27px] pb-[10px] md:pb-[18px]">
                            Skribbl in Numbers
                        </p>
                        <p>No. of artists: <span className="font-semibold">77</span></p>
                        <p>No. of illustrations: <span className="font-semibold">2,966</span></p>
                    </div>

                    <ul>
                        <li className="font-semibold leading-[27px] text-[#202020] pb-[12px] md:pb-[18px]">More Information</li>
                        <li className="pb-1">About</li>
                        <li className="pb-1">Pricing</li>
                        <li className="pb-1">Privacy Policy</li>
                        <li className="pb-1">Skribbl License</li>
                        <li className="pb-1">Skribbl Magazine</li>
                    </ul>

                    <ul>
                        <li className="font-semibold leading-[27px] text-[#202020] pb-[12px] md:pb-[18px]">Further Actions</li>
                        <li className="pb-1">Free Art Classes</li>
                        <li className="pb-1">Request Illustrations</li>
                        <li className="pb-1">Share Your Creativity</li>
                        <li className="pb-1">Submit Brief</li>
                        <li className="pb-1">Upload Illustrations</li>
                    </ul>
                </div>

                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm">
                    <p>Skribbl Ltd © 2025. All rights reserved. Company Number: 13572679</p>
                    <p>Built with Gusto</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
