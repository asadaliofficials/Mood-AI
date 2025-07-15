import React, { useContext } from 'react';
import { loadingContext } from '../context/reactContexts';
const FaceDetect = () => {
	const [isLoading, setIsLoading] = useContext(loadingContext);
	function handleClick() {
		setIsLoading(prev => !prev);
	}
	return (
		<div className="bg-stone-950 pb-4 w-[400px] h-screen max-h-[480px] flex flex-col items-center justify-between rounded-lg  overflow-hidden border-2 border-gray-800">
			<div className="cameraView h-[75%]  w-full flex items-center justify-center border-b-2 rounded-b-lg border-gray-800">
				CAMERA
			</div>
			<h1 className="font-black text-4xl tracking-wider">MY MOOD</h1>
			{!isLoading && (
				<button
					onClick={handleClick}
					type="button"
					className="w-[200PX] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
				>
					CHECK MODE
				</button>
			)}
			{isLoading && (
				<button
					type="button"
					className="w-[200PX] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none justify-center"
				>
					<span
						className="animate-spin inline-block size-4 border-3 border-current border-t-transparent text-white rounded-full"
						role="status"
						aria-label="loading"
					></span>
					Loading
				</button>
			)}
		</div>
	);
};

export default FaceDetect;
