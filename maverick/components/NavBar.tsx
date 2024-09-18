import { navLinks } from '@/Data/Data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi"

export default function NavBar() {
	const [showMenu,setShowMenu] = useState<boolean>(false)
	const pathname = usePathname()

	const isActive = (path: string) => (
		pathname === path ? "text-Red" : "text-Black" 
	)
	return (
		<header className="fixed w-full top-0 left-0 z-20">
			<nav
				className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
					showMenu ? "hidden" : ""
				}`}
			>
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="text-3xl text-Black">
						Maverick <span className="text-Red text-[48px]">.</span>
					</Link>
					<div className="hidden md:flex items-center justify-center space-x-6">
						{navLinks.map((navLink) => (
							<Link
								key={navLink.path}
								href={navLink.path}
								className={`text-sm uppercase font-medium ${isActive(
									navLink.path
								)}`}
							>
								{navLink.label}
							</Link>
						))}
					</div>
					<div className="flex md:hidden items-center">
						<HiOutlineMenuAlt4
							className="text-Black cursor-pointer w-6 h-6"
							onClick={() => setShowMenu(!showMenu)}
						/>
					</div>
				</div>
			</nav>

			<div className="bg-WhiteGray fixed top-0 right-0 w-16 h-16 rounded-full"></div>

			<nav className="h-screen md:hidden flex flex-col justify-center">
				{navLinks.map((navLink) => (
					<Link href={navLink.path} key={navLink.label} className={`px-3 py-2`}>
						{navLink.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
