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
	constructor(seed = NumMath.randomInteger()) {
		this.seed = seed;
	}

	/**
	 * @abstract
	 *
	 * @return {float} In range [0..1].
	 */
	get random() { throw new Error(); }
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

/**  */
const numMathRandomGenerator = new NumRandomGenerator(0);
