#!/usr/local/bin/eslint -c

### File: eslint.config.mjs
##
## ESLint用の設定用ファイル。
##
## Usage:
##
## ------ Text ------
## eslint -c eslint.config.mjs
## ------------------
##
## Metadata:
##
##   id - f3cff8e5-c70a-444d-abaa-b47d25e60ccc
##   author - <qq542vev at https://purl.org/meta/me/>
##   version - 1.1.0
##   created - 2025-07-21
##   modified - 2025-09-27
##   copyright - Copyright (C) 2025-2025 qq542vev. All rights reserved.
##   license - <GNU GPLv3 at https://www.gnu.org/licenses/gpl-3.0.txt>
##
## See Also:
##
##   * <Project homepage at https://github.com/qq542vev/confs>

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
