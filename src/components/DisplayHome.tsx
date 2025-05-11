import { Navbar } from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import { AlbumItem } from "./AlbumItem";
import { SongItem } from "./SongItem";
export const DisplayHome = () => {
	return (
		<>
			<Navbar />
			<div className='mb-4'>
				<h1 className='my-5 font-bold text-2xl'> Featured Charts</h1>
				<div className='flex overflow-auto'>
					{albumsData.map((item, index) => (
						<AlbumItem
							key={index}
							id={item.id}
							image={item.image}
							name={item.name}
							desc={item.desc}
						/>
					))}
				</div>
			</div>
			<div className='mb-4'>
				<h1 className='my-5 font-bold text-2xl'>
					{" "}
					Today's biggest hits
				</h1>
				<div className='flex overflow-auto'>
					{songsData.map((item, index) => (
						<SongItem
							key={index}
							id={item.id}
							image={item.image}
							name={item.name}
							desc={item.desc}
						/>
					))}
				</div>
			</div>
		</>
	);
};
