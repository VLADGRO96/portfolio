import Wrapper from "@/components/Wrapper";
import React from "react";
import Head from "next/head";
import Car from "@/components/Car";
import Stack from "@/components/Stack";

//animation
import { motion } from "framer-motion";
import { smoothIn } from "../animate";

export default function Home() {
	return (
		<>
			<Head>
				<title>Maverick - Home</title>
			</Head>
			<Wrapper className="text-center flex flex-col justify-center">
				{/* Gradients Background */}
				<div className="bg-[#FBE2E3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w=[68.75rem]"></div>

				<div className="bg-[#DBD7FB] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-33rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<div className="w-full h-full">
					<div>
						<motion.div
							variants={smoothIn("down", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 lg:mt-48 mt-28"
						>
							<Stack />
						</motion.div>
						{/* Heading  */}
						<motion.h1
							variants={smoothIn("down", 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h1"
						>
							Book. Perfect. {""}
							<span className="text-Red">Ride.</span>
						</motion.h1>
						{/* SubTitle */}
						<motion.p
							variants={smoothIn("down", 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="text-Black mx-auto max-w-xl flex justify-center"
						>
							Car Dealer is the most enticing, creative, modern and multipurpose
							auto dealer Premium WordPress Theme. Suitable for any car dealer
							websites, business or corporate websites. Express your style on
							the road with our diverse Vehicle Color Variants, offering
							personalized choices for every journey. Enhance visuals with
							interactive points, providing details and engaging storytelling
							within your images effortlessly.
						</motion.p>

						{/* Button */}
						<motion.div
							variants={smoothIn("down", 0.6)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mt-8 flex gap-x-4 justify-center z-10"
						>
							<button className="flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-white">
								View Details
							</button>
							<button className="flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-white">
								Rent Now
							</button>
						</motion.div>

						<div className="mt-20 w-full h-full">
							<motion.div
								variants={smoothIn("left", 0.5)}
								initial="hidden"
								animate="show"
								exit="hidden"
								transition={{ duration: 1, ease: "easeInOut " }}
								className="w-full h-full flex justify-center"
							>
								<Car />
							</motion.div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
