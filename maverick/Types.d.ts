type WrapperProps = {
	children: React.ReactNode
	className? : string
};

type NavLink = {
	path: string;
	label: string;
};

type CountUpProps = {
	start: number;
	end: number;
	duration: number;
};

type countUpItemsProps = {
	id: number;	
	number: number;
	text: string;
};

type ProjectProps = {
	id: number;
	img: string;
	name: string;
	des: string;
	detail: string[];
}

export {
	WrapperProps,
	NavLink,
	CountUpProps,
	countUpItemsProps,
	ProjectProps
};