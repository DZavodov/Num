// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
class NumRandomGeneratorBase {
	/**
	 * @type {integer}
	 */
	#seed;
	/**  */
	get seed() { return this.#seed; }
	/**
	 * @param {integer} value.
	 */
	set seed(value) { this.#seed = value; }

	/**
	 * @param {integer} seed .
	 */
	constructor(seed = NumMath.randomGenerator.randomInteger()) {
		this.seed = seed;
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
	randomInteger(max = Number.MAX_SAFE_INTEGER) { return Math.floor(this.random * max); }
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
	get random() { return Math.random(); }
}
