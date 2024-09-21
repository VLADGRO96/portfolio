import React from 'react'
import Head from 'next/head'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'

export default function about() {
	return (
		<>
			<Head>
				<title>Maverick - About</title>
			</Head>
			<Wrapper>
				<div className="flex flex-col gap-12 items-center justify-center mb-12 min-h-screen lg:flex-row lg:mb-0 pt-28 lg:pt-0">
					<div>
						<Image
							src={"/about.jpg"}
							alt={"About Image"}
							width={500}
							height={400}
						/>
					</div>

					<div className='lg:w-1/2 lg:ml-8 max-w-md md:max-2-xl'>
						<div className='uppercase font-medium text-sm text-WhiteGray'>- Finest Transport</div>
						<div className='font-semibold text-3xl mt-8'>
							We Value Our Clients And Want Them To Have A Nice Experience
						</div>
						<p className='text-Black text-sm mt-8 leading-7'>

						</p>

						<button className='flex-none rounded-full bg-Red px-6 py-2.5 text-sm font-normal'>
							Read More
						</button>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
