import React from "react";
import Link from 'next/link';

export default function Header() {

    return (
        <header className="py-[12px]">
            <div className="container mx-auto">
                <Link className="font-medium uppercase text-[1.5rem] text-slate-100" href='/' >
                    UNNAMED
                </Link>
            </div>
        </header>
    );
}
