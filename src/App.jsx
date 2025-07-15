import FaceDetect from './components/FaceDetect.jsx';
import Navbar from './components/Logo.jsx';
function App() {
	return (
		<div className="bg-black h-screen w-screen text-white flex flex-col justify-center items-center">
			<Navbar />
			<FaceDetect />
		</div>
	);
}

export default App;
