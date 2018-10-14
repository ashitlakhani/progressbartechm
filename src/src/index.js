import React from 'react';
import { render } from 'react-dom';


import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import storeWithMiddleware from './store-config';

import RootApp from './components/RootApp';
import '../style/index.scss';



render(
	<Provider store={ storeWithMiddleware }>
		<BrowserRouter>
			<RootApp />
		</BrowserRouter>
	</Provider>, document.querySelector('.root-container')
);
