import React, { useEffect, useState, useRef, useContext } from 'react';
import { loadingContext } from '../context/reactContexts.jsx';
import * as faceapi from 'face-api.js';
import { sad, happy, angry, fearful, neutral, disgusted, surprised } from '../utils/fireWorks.js';

const FaceDetector = () => {
	const [isLoading, setIsLoading] = useContext(loadingContext);
	const [mood, setMood] = useState('---');
	const videoRef = useRef(null);

	const MODEL_URL = '/models';

	useEffect(() => {
		const loadModels = async () => {
			setIsLoading(true);
			await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
			await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
			await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
			await startVideo();
			setIsLoading(false);
		};

		const startVideo = async () => {
			try {
				const devices = await navigator.mediaDevices.enumerateDevices();
				const videoDevices = devices.filter(device => device.kind === 'videoinput');
				const droidCam = videoDevices.find(device =>
					device.label.toLowerCase().includes('droidcam')
				);
				const selectedDeviceId = droidCam ? droidCam.deviceId : videoDevices[0]?.deviceId;
				if (!selectedDeviceId) throw new Error('No video input devices found');

				const stream = await navigator.mediaDevices.getUserMedia({
					video: { deviceId: { exact: selectedDeviceId } },
				});

				if (videoRef.current) {
					videoRef.current.srcObject = stream;
				}
			} catch (err) {
				console.error('Error starting video stream:', err);
			}
		};

		loadModels();
	}, []);

	// Define handleVideo here so it's available inside this component
	const handleVideo = async () => {
		console.log('clicked');
		setIsLoading(true);
		if (videoRef.current) {
			const detections = await faceapi
				.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks()
				.withFaceExpressions();

			if (detections[0]) {
				const expressions = detections[0].expressions;
				const maxValue = Math.max(...Object.values(expressions));
				const dominant = Object.keys(expressions).find(key => expressions[key] === maxValue);

				console.log(`Expression: ${dominant} (${maxValue.toFixed(2)})`);
				setMood(dominant);

				switch (dominant) {
					case 'happy':
						await happy();
						break;
					case 'sad':
						await sad();
						break;
					case 'angry':
						await angry();
						break;
					case 'fearful':
						await fearful();
						break;
					case 'neutral':
						await neutral();
						break;
					case 'disgusted':
						await disgusted();
						break;
					case 'surprised':
						await surprised();
						break;
					default:
						break;
				}
			}
		}
		setIsLoading(false);
	};

	// The button click calls handleVideo correctly now
	const handleClick = () => {
		handleVideo();
	};

	return (
		<div className="pb-4 w-[500px] h-[600px] flex flex-col items-center rounded-lg overflow-hidden">
			<div className="cameraView h-[65%] w-[100%] flex items-center justify-center rounded-b-lg">
				<div className="w-full h-full" style={{ position: 'relative' }}>
					<video
						className="w-full h-full object-cover"
						ref={videoRef}
						autoPlay
						muted
						style={{ position: 'absolute', top: 0, left: 0 }}
					/>
				</div>
			</div>
			<h1 className="my-8 font-black text-4xl tracking-wider">Mood: {mood}</h1>

			<button
				onClick={handleClick}
				type="button"
				disabled={isLoading}
				className="w-[200px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
			>
				CHECK MODE
			</button>
		</div>
	);
};

export default FaceDetector;
