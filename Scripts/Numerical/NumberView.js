// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
class NumNumberViewBase {
	/**
	 * @abstract
	 *
	 * @param {NumNumber} number .
	 * @param {NumNumberBase} base .
	 */
	draw(number, base) { throw new Error(); }
}

/**
 *
 */
class NumParagraphNumberView extends NumNumberViewBase {
	/**  */
	#paragraph;
	/**
	 * @param {string} id .
	 */
	constructor(id) {
		super();

		this.#paragraph = document.getElementById(id);
	}

	/**
	 * @override
	 *
	 * @param {NumNumber} number .
	 * @param {NumNumberBase} base .
	 */
	draw(number, base) { this.#paragraph.innerHTML = number.toString(base); }
}

/**
 *
 */
class NumConsoleNumberView extends NumNumberViewBase {
	/**
	 * @override
	 *
	 * @param {NumNumber} number .
	 * @param {NumNumberBase} base .
	 */
	draw(number, base) { console.log(number.toString(base)); }
}
