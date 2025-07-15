import FaceDetector from './components/FaceDetector.jsx';
import Logo from './components/Logo.jsx';
import LoadingContextProvider from './context/loadingContexts.jsx';
function App() {
	return (
		<LoadingContextProvider>
			<div className="bg-black h-screen w-screen text-white flex flex-col justify-center items-center">
				<Logo />
				<FaceDetector />
			</div>
		</LoadingContextProvider>
	);
}

export default App;
