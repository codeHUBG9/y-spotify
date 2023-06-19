import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
	const [debounceValue, setDebouncevalue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncevalue(value);
		}, delay || 500);
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);
	return debounceValue;
}

export default useDebounce;
