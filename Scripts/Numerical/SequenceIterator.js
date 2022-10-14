// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumSequenceIterator {
	/**
	 * @callback OnLocked
	 *
	 * @param {boolean} isLocked .
	 *
	 * @return {void}
	 */

	/**
	 * @param {NumSequence} sequence .
	 * @param {integer} seed .
	 * @param {OnLocked} onLocked .
	 */
	constructor(sequence, seed, onLocked) {
		/**
		 * @type {NumSequence}
		 */
		this.sequence = sequence;
		/**
		 * @type {NumRandomGeneratorBase}
		 */
		this.randomGenerator = new NumRandomGenerator(seed);

		/**
		 * @type {OnLocked}
		 */
		this.onLocked = onLocked;

		/**
		 * @type {integer}
		 */
		this.iteration = 0;
		/**
		 * @type {integer}
		 */
		this.stepIndex = 0;
	}

	/**  */
	reset() {
		this.iteration = 0;
		this.stepIndex = 0;

		this.randomGenerator.seed = this.sequence.randomGenerator.seed;
		this.onLocked(false);
	}

	/**  */
	next() {
		this.onLocked(true);

		// Iterating
		++this.stepIndex;
		if (this.stepIndex >= this.sequence.steps.length) {
			++this.iteration;
			this.stepIndex = 0;
		}
		if (this.sequence.repeats && this.iteration >= this.sequence.repeats.value) {
			return false;
		}

		//

		this.onLocked(false);
		return true;
	}
}
