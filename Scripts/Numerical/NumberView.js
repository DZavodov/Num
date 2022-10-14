// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
class NumNumberViewBase {
	/**
	 * @abstract
	 *
	 * @param {string} value .
	 */
	draw(value) { throw new Error(); }
}

/**
 *
 */
class NumParagraphNumberView extends NumNumberViewBase {
	/**
	 * @type {HTMLParagraphElement} .
	 */
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
	 * @param {string} value .
	 */
	draw(value) {
		console.log(value); // TODO Debug
		this.#paragraph.innerText = value;
	}
}
