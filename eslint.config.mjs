#!/usr/local/bin/eslint -c

/**
 * @file ESLint用の設定用ファイル。
 * @author qq542vev ({@link https://purl.org/meta/me/})
 * @version 1.1.0
 * @copyright Copyright (C) 2025-2025 qq542vev. All rights reserved.
 * @license GPL-3.0-only
 * @see {@link https://github.com/qq542vev/confs|Project homepage}
 * @dcterms:identifier f3cff8e5-c70a-444d-abaa-b47d25e60ccc
 * @dcterms:created 2025-07-21
 * @dcterms:modified 2025-09-27
 * @dcterms:conformsTo https://262.ecma-international.org/
 */

import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import { defineConfig } from "eslint/config";
import dublin from "eslint-config-dublin-core";

export default defineConfig([
	...dublin,
	{
		ignores: [
			"**/node_modules/**",
			"minified/**"
		]
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js, jsdoc },
		extends: [
			js.configs.recommended,
			jsdoc.configs["flat/recommended"]
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
		},
		rules: {
			"eqeqeq": ["error", "always"],
			"init-declarations": ["warn", "always"],
			"no-cond-assign": "warn",
			"no-constant-condition": "error",
			"no-else-return": "error",
			"no-throw-literal": "error",
			"prefer-const": "error",
			"semi": ["error", "always"]
		}
	}
]);
