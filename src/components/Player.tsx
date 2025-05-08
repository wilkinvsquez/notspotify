import { usePlayerStore } from "../store/player";

function Player() {
	const { currentTrack, isPlaying, togglePlay } = usePlayerStore();

	return (
		<div className='bg-gray-800 px-4 py-3'>
			<div className='flex justify-between items-center'>
				<span className='text-sm'>
					{currentTrack
						? `Reproduciendo: ${currentTrack}`
						: "Nada en reproducción"}
				</span>
				<button
					className='bg-green-500 text-white px-3 py-1 rounded'
					onClick={togglePlay}>
					{isPlaying ? "Pausar" : "Reproducir"}
				</button>
			</div>
		</div>
	);
}

export default Player;
