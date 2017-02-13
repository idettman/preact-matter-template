'use strict';

import node from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
// import replace from 'rollup-plugin-replace';

var config = {
	entry: 'src/app.js',
	intro: 'var process={env:{NODE_ENV:\'development\'}};',
	dest: 'bin/app-bundle.js',
	exports: 'none',
	format: 'iife',
	sourceMap: false,
	plugins: [
		node({
			jsnext: true,
			main: true,
			browser: true,
			module: true
		}),
		commonjs({
			include: [
				'node_modules/**'
			],
			ignoreGlobals: true,
			sourceMap: false,
		}),
		buble({
			jsx: 'h',
			exclude: "node_modules/!**",
			transforms: {
				modules: false
			}
		}),
		serve(),
		livereload(),
		progress(),
		filesize()
	],
	external: ['fs', 'path', 'readline']
};

export default config;