interface SongItemProps {
	id: number;
	name: string;
	image: string; // Ruta a la imagen
	//file: string; // Ruta al archivo de audio
	desc: string;
	//duration: string; // Por ejemplo "3:00"
}
export const SongItem = ({ image, name, desc }: SongItemProps) => {
	return (
		<div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
			<img className='rounded' src={image} alt='' />
			<p className='font-bold mt-2 mb-1'>{name}</p>
			<p className='text-slate-200 text-sm'>{desc}</p>
		</div>
	);
};
