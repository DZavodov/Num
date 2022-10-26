// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
class NumRandomGeneratorBase {
	/**  */
	get seed() { return this._seed; }

	/**
	 * @param {integer} seed .
	 */
	constructor(seed = NumMath.randomGenerator.randomInteger()) {
		/**
		 * @type {integer}
		 */
		this._seed = seed;
	}

	/**
	 * @abstract
	 *
	 * @return {float} In range [0..1].
	 */
	get random() { throw new Error(); }

	/**
	 * @param {integer} max .
	 */
	randomInteger(max = Number.MAX_SAFE_INTEGER) {
		return Math.floor(this.random * max);
	}
}

/**
 *
 */
class NumRandomGenerator extends NumRandomGeneratorBase {
	/**
	 * @override
	 *
	 * @return {float} In range [0..1].
	 */
	get random() {
		// @see https://github.com/bryc/code/blob/master/jshash/PRNGs.md SplitMix32
		this._seed |= 0;
		this._seed = this._seed + 0x9e3779b9 | 0;

		var t = this._seed ^ this._seed >>> 15;
		t = Math.imul(t, 0x85ebca6b);

		t = t ^ t >>> 13;
		t = Math.imul(t, 0xc2b2ae35);

		return ((t = t ^ t >>> 16) >>> 0) / 4294967296;
	}
}
