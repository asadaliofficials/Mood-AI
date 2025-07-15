import FaceDetect from './components/FaceDetect.jsx';
import Navbar from './components/navbar.jsx';
function App() {
	return (
		<div className="bg-black h-screen w-screen text-white px-8 py-4">
			<Navbar />
			<FaceDetect />
		</div>
	);
}

export default App;
