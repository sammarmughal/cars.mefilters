import React, { useState, useEffect } from "react";
import { IoMdShare } from "react-icons/io";
import time from "../images/BlogInternal/history-round-svgrepo-com.png";
import user from "../images/BlogInternal/user-svgrepo-com.png";
import blog_img from "../images/BlogInternal/blog-img.png";

function BlogCard() {
    const [SocialIcons, setSocialIcons] = useState(null);
    const [networks, setNetworks] = useState([
        'facebook',
        'twitter',
        'linkedin',
        'pinterest',
        'whatsapp'
    ]);

    useEffect(() => {
        const loadSocialIcons = async () => {
            const module = await import('react-social-icons');
            setSocialIcons(module);
        };
        loadSocialIcons();
    }, []);

    return (
        <>
            <section className="bg-white hover:shadow-inner max-w-[500px] sm:rounded-3xl rounded-xl shadow-xl">
                <img src={blog_img} alt="Blog" />
                <div className="p-5">
                    <h1 className="text-blue-800 text-lg">
                        Exploring the Future of Electric Vehicles
                    </h1>
                    <div className="flex my-2 gap-2 items-center">
                        <img src={time} alt="Time" />
                        <p className="text-slate-400"> 1 month ago</p>
                    </div>
                    <div className="flex my-2 gap-2 items-center">
                        <img src={user} alt="User" />
                        <p className="text-slate-400">By Shahid Khan</p>
                    </div>
                    <div className='flex text-black py-2 rounded-xl items-center gap-2'>
                        <div className='flex gap-2 items-center border border-slate-400 px-4 py-1 rounded-full cursor-pointer'>
                            <IoMdShare />
                            <p>Share</p>
                        </div>
                        <div className="flex gap-2">
                            {SocialIcons && networks.map((network, index) => (
                                <SocialIcons.SocialIcon key={index} network={network} style={{ height: '35px', width: '35px' }} url="www.example.com" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCard;
