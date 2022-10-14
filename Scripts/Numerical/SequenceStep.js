// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
class NumSequenceStepBase {
	/**
	 * @abstract
	 *
	 * @param {NumSequenceIterator} iterator .
	 * @param {NumRandomGeneratorBase} randomGenerator .
	 */
	apply(iterator, randomGenerator) { throw new Error(); }
}

/**
 *
 */
class NumSetNumberBaseSequenceStep extends NumSequenceStepBase {
	/**
	 *
	 */
	constructor() {
		super();
	}

	/**
	 * @override
	 *
	 * @param {NumSequenceIterator} iterator .
	 * @param {NumRandomGeneratorBase} randomGenerator .
	 */
	apply(iterator, randomGenerator) {

	}
}
