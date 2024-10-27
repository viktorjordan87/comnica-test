// src/components/ErrorFallback/index.tsx
import React from "react";

interface ErrorFallbackProps {
	error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
	return (
		<div>
			<p>{error.message}</p>
			<button onClick={() => window.location.reload()}>Reload</button>
		</div>
	);
};

export default ErrorFallback;
