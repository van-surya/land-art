import React from "react";
import Image from "next/image";
import Link from 'next/link';

export default function HeroSection() {

    return (
        <section className="h-[100vh] flex items-center">
            <div className="container mx-auto">
                <div className="grid">
                    <div className="grid grid-cols-2 gap-[2rem]">
                        <div className="my-auto">
                            <span className="rounded-full py-[8px] px-[22px] bg-like-dark text-slate-200 font-light text-[1rem] uppercase">Welcome</span>
                            <h1 className="text-[3.2rem] text-slate-50 font-medium leading-10 mt-[1.5rem] mb-[1rem]">
                                Let’s make your product a success
                            </h1>
                            <p className="text-slate-400 text-[1.25rem] font-light mb-[2rem]">
                                Crator is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.
                            </p>

                            <Link className="bg-slate-100 text-dark font-medium text-[1.25rem] py-[12px] px-[24px] rounded-full hover:opacity-65" href="">Let’s get started</Link>

                        </div>
                        <div className="flex">
                            <Image className='my-auto aspect-[4/3]' width={800} height={400}
                                src="https://images.unsplash.com/photo-1576132527079-969deea42e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt='van-surya'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
