import { h, render } from 'preact';

import Router from 'preact-router';

import Home from './views/home/home.js';

import Header from './components/header/header.js';

render((
	<article>
		<Header title="Matter Development App" />
		<Router>
			<Home path="/"/>
		</Router>
	</article>
), document.getElementById('root'));