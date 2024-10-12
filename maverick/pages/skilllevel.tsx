import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";

// Animation
import { motion } from "framer-motion";
import { smoothIn } from "@/animate";

export default function Skilllevel() {
	return (
		<>
			<Head>
				<title>Maverick - Skills</title>
			</Head>

			<Wrapper className="text-center mt-24 flex flex-col justify-center">
				<div className="w-full h-full">
					<motion.div
						className="text-WhiteGray font-medium uppercase text-sm text-center"
						variants={smoothIn("down", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						- Only the best
					</motion.div>

					<motion.p
						variants={smoothIn("down", 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						transition={{ duration: 1, ease: "easeInOut" }}
						className="font-semibold text-3xl mt-4 lg:mb-16 mb-8 text-Black"
					>
						Our Satisfied Clients All Around The Globe
					</motion.p>

					<div className="flex h-full flex-col justify-center text-center">
						<div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 lg:pt-0 pt-12">
							<motion.div
								variants={smoothIn("right", 0.5)}
								initial="hidden"
								animate="show"
								exit="hidden"
								transition={{ duration: 1, ease: "easeInOut" }}
							>
								<Image
									src={"/skills.jpg"}
									alt="Skills"
									width={400}
									height={500}
								/>
							</motion.div>

							<motion.div
								variants={smoothIn("left", 0.5)}
								initial="hidden"
								animate="show"
								exit="hidden"
								transition={{ duration: 1, ease: "easeInOut" }}
							>
								<Skills skills={skills} />
							</motion.div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
