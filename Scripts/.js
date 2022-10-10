// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class BlackBox {
	static #numDelay;
	static #numSeparationDelay;
	/**
	 * @param {integer} value ms.
	 */
	static set numDelay(value) {
		BlackBox.#numDelay = value;
		BlackBox.#numSeparationDelay = BlackBox.#numDelay * 0.1;
	}
	/**
	 * @return {integer} ms.
	 */
	static get numDelay() { return BlackBox.#numDelay; }
	/**
	 * @return {integer} ms.
	 */
	static get numSeparationDelay() { return BlackBox.#numSeparationDelay; }

	static {
		BlackBox.numDelay = 1000;
	}

	#view;
	#nums;
	/**  */
	constructor(view) {
		this.#view = view;
		this.#nums = [];
	}
	/**
	 * @param {string[]} nums .
	 */
	enqueue(nums) {
		// Disable NumPad
		setNumPadEnavled(false);
		setTimeout(function () {
			setNumPadEnavled(true);
		}, (nums.length - 1) * BlackBox.numDelay);

		// Apply nums
		for (let index = 0; index < nums.length; ++index) {
			const indexDelay = index * BlackBox.numDelay;
			setTimeout(function (view) {
				view.innerHTML = "";
			}, indexDelay, this.#view);
			setTimeout(function (view, nums, num) {
				view.innerHTML = num;
				nums.push(num);
			}, indexDelay + BlackBox.numSeparationDelay, this.#view, this.#nums, nums[index]);
		}
	}
	/**
	 * @return {string} .
	 */
	dequeue() {
		return this.#nums.shift();
	}
}
