// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumQueue {
	/**
	 * @typedef {integer} Delay
	 */
	/**
	 * Delay in ms.
	 *
	 * @type {Delay}
	 */
	static #numberDelay;
	/**
	 * Delay in ms.
	 *
	 * @type {Delay}
	 */
	static #numberSeparationDelay;
	/**
	 * @param {Delay} value ms.
	 */
	static set numberDelay(value) {
		this.#numberDelay = value;
		this.#numberSeparationDelay = this.#numberDelay / 10;
	}
	/**
	 * @return ms.
	 */
	static get numberDelay() { return this.#numberDelay; }
	/**
	 * @return ms.
	 */
	static get numberSeparationDelay() { return this.#numberSeparationDelay; }

	static {
		this.numberDelay = 1000;
	}

	/**  */
	#view;
	/**
	 * @type {string}
	 */
	#numbers;

	/**
	 * @param {NumNumberViewBase} view .
	 */
	constructor(view) {
		this.#view = view;
		this.#numbers = [];
	}

	/**
	 * @param {string[]} numbers .
	 */
	enqueue(numbers) {
		for (let index = 0; index < numbers.length; ++index) {
			const indexDelay = index * NumQueue.numberDelay;
			setTimeout(() => { this.#view.draw(""); }, indexDelay);
			setTimeout(() => {
				const number = numbers[index];
				this.#view.draw(number);
				this.#numbers.push(number);
			}, indexDelay + NumQueue.numberSeparationDelay);
		}

		return new Promise((resolve) => {
			setTimeout(() => { resolve(); },
			(numbers.length - 1) * NumQueue.numberDelay);
		});
	}
	/**
	 * @return {(string|null)} .
	 */
	dequeue() { return this.#numbers.shift(); }
}
