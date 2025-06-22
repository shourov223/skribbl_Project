import React from 'react'
import Common_btn from './Common_btn'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiLinkedin } from 'react-icons/si'

const More = () => {
    return (
        <section className='pb-[60px]'>
            <div className="container">
                <div className='text-center '>
                    <h4 className='text-[65px] leading-[68px] font-light pb-[30px]'>do you want more?</h4>
                    <p className='max-w-[789px] mx-auto text-[#4D4D4D] text-[20px] leading-[33px]'>Receive a weekly email with the best new Skribbl illustrations and special offers,straight to your inbox. Nothing else.</p>
                    <div className='flex items-center justify-center gap-[17px] pt-[45px]'>
                        <input placeholder='Email address' type="email" className='p-[17px] border border-[#E0E0E0] rounded-[5px]'/>
                        <button className='text-white py-[17px] px-[22px] bg-[#202020] rounded-[5px]'>Subscribe</button>
                    </div>
                    <div className='flex items-center justify-center gap-2 pt-[42px]'>
                        <div className='cursor-pointer'>
                            <FaInstagramSquare className='size-[42px]' />
                        </div>
                        <div className='cursor-pointer'>
                            <FaXTwitter className='size-[42px]' />
                        </div>
                        <div className='cursor-pointer'>
                            <SiLinkedin className='size-[42px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More
