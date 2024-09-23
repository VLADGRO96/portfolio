import {
	NavLink,
	countUpItemsProps,
	ProjectProps,
	ServiceProps,
} from "@/Types";

//Services Logo
import { BsFillTaxiFrontFill, BsBriefcaseFill, BsTelephoneInboundFill, BsStarFill, BsAirplaneFill, BsFillCarFrontFill, BsFillPinMapFill, BsFillSendCheckFill } from "react-icons/bs";

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
		des: "Experience the future of driving. This all-electric sports car offers unparalleled performance, luxury, and sustainability.",
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
		des: "Experience the future of driving. This all-electric sports car offers unparalleled performance, luxury, and sustainability.",
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

const services: ServiceProps[] = [
	{
		id: 1,
		title: "Car Rental with Driver",
		icon: <BsFillTaxiFrontFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 2,
		title: "Business Car Rental",
		icon: <BsBriefcaseFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 3,
		title: "Airport Transportation",
		icon: <BsAirplaneFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 4,
		title: "Chauffeur Side Services",
		icon: <BsFillSendCheckFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 5,
		title: "VIP Luxury Transportation",
		icon: <BsStarFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 6,
		title: "Private Transportation",
		icon: <BsFillCarFrontFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 7,
		title: "Roadside Assistance Service",
		icon: <BsFillPinMapFill />,
		description: "Enhance your rental experience with additional options.",
	},
	{
		id: 8,
		title: "Event Transportation",
		icon: <BsTelephoneInboundFill />,
		description: "Enhance your rental experience with additional options.",
	},
];

export { navLinks, countUpItems, projects, services };