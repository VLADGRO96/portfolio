import React from 'react';
import { WrapperProps } from "@/Types";

export default function Wrapper({children, className}: WrapperProps) {
	return (
		<section className={className}>
			<>
				{children}
			</>
		</section>
	)
}
