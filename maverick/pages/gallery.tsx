import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'
import { gallery } from '@/Data/Data'

export default function Gallery() {
	return (
		<>
			<Head>
				<title>Maverick - Gallery</title>
			</Head>

			<Wrapper>
				<div>
					 <div>
						 {
							gallery.map((gallery) => {
								<div>
									
								</div>
						 })
						 }
					 </div>
				</div>
			</Wrapper>
		</>
	)
}
