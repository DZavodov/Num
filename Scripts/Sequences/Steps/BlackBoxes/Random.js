// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumRandomStepBlackBox extends NumStepBlackBoxBase {
	/** */
	#numbersSize;
	/** */
	#numbersBase;
	/** */
	#numbersDigitsSize;

	/**
	 * @param {integer} numbersSize .
	 * @param {integer} numbersDigitsSize .
	 */
	constructor(numbersSize, numbersBase = NumNumberBase.min, numbersDigitsSize = 1) {
		super();

		this.#numbersSize = numbersSize;
		this.#numbersBase = numbersBase;
		this.#numbersDigitsSize = numbersDigitsSize;
	}

	/**
	 * @override
	 */
	get numbers() {
		/**
		 * @type {NumNumber[]}
		 */
		const values = [];
		for (let index = 0; index < this.#numbersSize; ++index) {
			values.push(NumNumber.makeRandom(this.#numbersBase, this.#numbersDigitsSize));
		}
		return values;
	}
}
