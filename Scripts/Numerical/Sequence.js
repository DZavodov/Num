// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumSequence {
	/**
	 * @param {integer|null} seedRule.
	 * @param {(NumRangedInteger|null)} repeatsRule.
	 */
	constructor(seedRule = null, repeatsRule = null) {
		/**
		 * @type {integer|null}
		 */
		this.seedRule = seedRule;

		/**
		 * @type {(NumRangedInteger|null)}
		 */
		this.repeatsRule = repeatsRule;

		/**
		 * @type {NumSequenceStepBase[]}
		 */
		this.steps = [];
	}

	/**
	 * @param {NumSequenceStepBase} step .
	 */
	add(step) {
		this.steps.push(step);

		return this;
	}

	/**  */
	randomize() {
		this.randomGenerator = this.seedRule ? new NumRandomGenerator(this.seedRule) : new NumRandomGenerator();
		this.repeats = this.repeatsRule;
		if (this.repeats) { this.repeats.randomize(this.randomGenerator); }
	}

	/**
	 * @see NumSequenceIterator
	 */
	createIterator(...params) {
		return new NumSequenceIterator(this, this.randomGenerator.seed, params[0]);
	}
}
