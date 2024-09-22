import { NavLink, countUpItemsProps, ProjectProps } from "@/Types"; 

const navLinks: NavLink[] = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/cars", label: "Cars" },
	{ path: "/services", label: "Services" },
	{ path: "/skilllevel", label: "Skills" },
	{ path: "/gallery", label: "Gallery" },
	{ path: "/contact", label: "Contact" }, 
];

const countUpItems: countUpItemsProps[] = [
	{
		id: 1,
		number: 21,
		text: "Years of Experience",
	},
	{
		id: 2,
		number: 157,
		text: "Satisfied Customers",
	},
	{
		id: 3,
		number: 743,
		text: "Design Items",
	},
	{
		id: 4,
		number: 112,
		text: "Clients Served",
	},
];

const projects: ProjectProps[] = [
	{
		id: 1,
		img: "/project1.jpg",
		name: "Porshe Taycan Sport",
		des: "Experience the future of driving. This all-electric sports car offers unparalleled performance, luxury, and sustainability. With its sleek design, powerful electric motors, and advanced technology, the Taycan Sport is the perfect choice for those seeking a thrilling and eco-friendly driving experience.",
		detail: ["+ More Details"],
	},
	{
		id: 2,
		img: "/project2.jpg",
		name: "Rolls Royce Ghost 3",
		des: "Rolls Royce is the epitome of luxury and refinement. This particular model, from [year], boasts a timeless design, exquisite craftsmanship, and cutting-edge technology.",
		detail: ["+ More Details"],
	},
	{
		id: 3,
		img: "/project3.jpg",
		name: "Range Rover Evoque",
		des: "Experience the thrill of driving a compact SUV that turns heads. The Range Rover Evoque offers a stylish design, advanced technology, and impressive off-road capabilities.",
		detail: ["+ More Details"],
	},
	{
		id: 4,
		img: "/project4.jpg",
		name: "Ferrari 365 Daytona",
		des: "Experience the thrill of driving a legendary Ferrari. The 365 Daytona offers breathtaking speed, stunning design, and unparalleled driving dynamics.",
		detail: ["+ More Details"],
	},
	{
		id: 5,
		img: "/project1.jpg",
		name: "Porshe Taycan Sport",
		des: "Experience the future of driving. This all-electric sports car offers unparalleled performance, luxury, and sustainability. With its sleek design, powerful electric motors, and advanced technology, the Taycan Sport is the perfect choice for those seeking a thrilling and eco-friendly driving experience.",
		detail: ["+ More Details"],
	},
	{
		id: 6,
		img: "/project2.jpg",
		name: "Rolls Royce Ghost 3",
		des: "Rolls Royce is the epitome of luxury and refinement. This particular model, from [year], boasts a timeless design, exquisite craftsmanship, and cutting-edge technology.",
		detail: ["+ More Details"],
	},
];

export { navLinks, countUpItems, projects };