// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumCustomStepBlackBox extends NumStepBlackBoxBase  {
	/** */
	#numbers;
	/**
	 * @param {NumNumber[]} numbers .
	 */
	constructor(numbers) {
		super();

		this.#numbers = numbers;
	}

	/**
	 * @override
	 */
	get numbers() { return this.#numbers; }
}
