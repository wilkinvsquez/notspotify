import Player from "../components/Player";
import { type ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function MainLayout({ children }: Props) {
	return (
		<div className='flex flex-col min-h-screen bg-gray-950 text-white'>
			<main className='flex-1'>{children}</main>
			<Player />
		</div>
	);
}

export default MainLayout;
