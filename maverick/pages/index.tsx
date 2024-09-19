import Wrapper from '@/components/Wrapper'
import React from 'react'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Maverick - Home</title>
			</Head>
			<Wrapper className="text-center flex flex-col justify-center">
				<div className="h-full">
					<div>
						{/* Heading  */}
						<h1 className="h1">
							Book. Perfect. {""}
							<span className="text-Red">Ride.</span>
						</h1>
						{/* SubTitle */}
						<p className="text-Black mx-auto max-w-xl flex justify-center">
							Car Dealer is the most enticing, creative, modern and multipurpose
							auto dealer Premium WordPress Theme. Suitable for any car dealer
							websites, business or corporate websites. Express your style on
							the road with our diverse Vehicle Color Variants, offering
							personalized choices for every journey. Enhance visuals with
							interactive points, providing details and engaging storytelling
							within your images effortlessly.
						</p>

						{/* Button */}
						<div className='mt-8 flex gap-x-4 justify-center z-10'>
							<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-white'>
								View Details
							</button>
							<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-white'>
								Rent Now
							</button>
						</div>

						<div>
							
						</div>

					</div>
				</div>
			</Wrapper>
		</>
	);
}