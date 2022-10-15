// Copyright 2022 DZavodov. All Rights Reserved.

/**
 * @abstract
 */
 class NumViewBase {
	/**
	 * @abstract
	 *
	 * @param {string} value .
	 */
	set draw(value) { throw new Error(); }
}

/**
 *
 */
class NumParagraphView extends NumViewBase {
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
	set draw(value) {
		console.log(value); // TODO Debug
		this.#paragraph.innerText = value;
	}
}
