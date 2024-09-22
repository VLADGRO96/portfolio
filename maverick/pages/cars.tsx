import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'
import { projects } from '@/Data/Data';
import Image from 'next/image';

export default function cars() {
	return (
		<>
			<Head>
				<title>Maverick - Cars</title>
			</Head>

			<Wrapper>
				<div className='flex flex-col pt-40 items-center text-center'>
					<div>
						<div className='uppercase tracking-widest text-sm text-WhiteGray'>- Exclusive Cars</div>
						<div className='font-semibold text-3xl mt-8 text-Black'>Luxury Limousine For Maximum Satisfaction. Enjoy.</div>
						<p className='text-Black text-sm mt-8 leading-7 max-w-3xl'>
							What We Provide Is The Luxury Transport And Comfortable Experience For You. We Care About Your
							Comfort And Safety. Get 15% Off Your Rental! Choose Your Model
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8'>
						{
							projects.map((project) => (
								<div
									key={project.id}
									className='bg-Blur p-10'
								>
									<div>
										 <img
											 src={project.img}
										 />
									</div>
									<div>
										{project.name}
									</div>
									<div>
										<Image
											src="/star.png"
											alt='Rating'
											width={80}
											height={5}
										/>
									</div>
									<div>
										{project.des}
									</div>
									<div>
										$ <span>180</span> / Per day
									</div>
									<div>
										<span>
											{project.detail}
										</span>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</Wrapper>
		</>
	);
}
