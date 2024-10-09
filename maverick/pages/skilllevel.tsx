import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";

export default function Skilllevel() {
	return (
		<>
			<Head>
				<title>Maverick - Skills</title>
			</Head>

			<Wrapper className="text-center mt-24 flex flex-col justify-center">
				<div className="w-full h-full">
					<div className="text-WhiteGray font-medium uppercase text-sm text-center">
						- Only the best
					</div>

					<div className="font-semibold text-3xl mt-4 lg:mb-16 mb-8">
						Our Satisfied Clients All Around The Globe
					</div>

					<div className="flex h-full flex-col justify-center text-center">
						<div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 lg:pt-0 pt-12">
							<Image
								src={"/skills.jpg"}
								alt="Skills"
								width={400}
								height={500}
							/>
							<div>
								<Skills skills={skills} />
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
