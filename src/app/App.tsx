import React from 'react';
import './App.css';

import Web from '../layouts/Web';
import Mobile from '../layouts/Mobile';

function App() {
	const isMobile = false;

	return (
		isMobile ? <Mobile /> : <Web />
	);
}

export default App;
