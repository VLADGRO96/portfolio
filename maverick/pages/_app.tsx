import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] }); 

export default function App({ Component, pageProps }: AppProps) {
  return (
		<main className={outfit.className}>
			<NavBar />
			<Component {...pageProps} />
		</main>
	);
}
 