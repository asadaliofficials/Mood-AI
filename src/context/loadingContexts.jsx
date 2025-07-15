import { useState } from 'react';
import { loadingContext } from './reactContexts.jsx';
const LoadingContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<loadingContext.Provider value={[isLoading, setIsLoading]}>{children}</loadingContext.Provider>
	);
};

export default LoadingContextProvider;
