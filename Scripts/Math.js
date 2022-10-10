// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumMath {
	/**
	 * @param {integer} x .
	 * @param {integer} min .
	 * @param {integer} max .
	 *
	 * @return {integer} .
	 */
	static clamp = (x, min, max) => Math.min(Math.max(min, x), max);
}
