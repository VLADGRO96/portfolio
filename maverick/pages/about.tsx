import React from 'react'
import Head from 'next/head'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'

//CountUp
import { countUpItems } from "@/Data/Data";
import MyCountUp from '@/components/CountUp';
import { useInView } from 'react-intersection-observer';

//Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function about() {
	const { ref, inView } = useInView({
		 threshold: 0.5,

	})
	return (
		<>
			<Head>
				<title>Maverick - About</title>
			</Head>
			<Wrapper>
				<div className="flex flex-col gap-12 items-center justify-center mb-12 min-h-screen lg:flex-row lg:mb-0 pt-28 lg:pt-0">
					<motion.div
						variants={smoothIn("right", 0.5)}
						initial="hidden"
						animate="show"
						exit="hidden"
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<Image
							src={"/about.jpg"}
							alt={"About Image"}
							width={500}
							height={400}
						/>
					</motion.div>

					<motion.div
						variants={smoothIn("left", 0.5)}
						initial="hidden"
						animate="show"
						exit="hidden"
						transition={{ duration: 1, ease: "easeInOut" }}
						className="lg:w-1/2 lg:ml-8 max-w-md md:max-2-xl"
					>
						<div className="uppercase font-medium text-sm text-WhiteGray">
							- Finest Transport
						</div>
						<div className="font-semibold text-3xl mt-8">
							We Value Our Clients And Want Them To Have A Nice Experience
						</div>
						<p className="text-Black text-sm mt-8 leading-7"></p>

						<button className="flex-none rounded-full bg-Red px-6 mt-4 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-white">
							Read More
						</button>

						{/* Count Up */}
						<div
							ref={ref}
							className="flex justify-center mt-12 gap-12 flex-wrap"
						>
							{countUpItems.map((item) => (
								<div key={item.id} className="text-center">
									<div className="text-Red text-3xl">
										{inView && (
											<MyCountUp start={0} end={item.number} duration={3} />
										)}
										+
									</div>
									<div className="text-Black mt-2 text-sm">{item.text}</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</Wrapper>
		</>
	);
}
