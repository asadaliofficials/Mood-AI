import FaceDetect from './components/FaceDetect.jsx';
import Logo from './components/Logo.jsx';
import LoadingContextProvider from './context/loadingContexts.jsx';
function App() {
	return (
		<LoadingContextProvider>
			<div className="bg-black h-screen w-screen text-white flex flex-col justify-center items-center">
				<Logo />
				<FaceDetect />
			</div>
		</LoadingContextProvider>
	);
}

export default App;
