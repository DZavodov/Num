// Copyright 2022 DZavodov. All Rights Reserved.

/**
 *
 */
class NumHistogramDistributionLink {
	/**  */
	#value;
	/**
	 * @param {float} value .
	 */
	constructor(value) {
		this.#value = value;
	}

	/**  */
	isNearlyUniform(tolerance = .1) {
		return Math.abs(this.#value - 1) <= tolerance;
	}
}

/**
 *
 */
class NumHistoramDistribution {
	/**  */
	#links;
	/**  */
	get links() { return this.#links; }

	/**
	 * @param {integer[]} rows .
	 */
	constructor(rows) {
		this.#links = [];
		for (let outerIndex = 0; outerIndex < rows.length; ++outerIndex) {
			for (let innerIndex = outerIndex + 1;
				innerIndex < rows.length;
				++innerIndex) {
				this.#links.push(
					new NumHistogramDistributionLink(
						rows[outerIndex] / rows[innerIndex]));
			}
		}
	}
}

/**
 *
 */
class NumHistogram {
	/**  */
	#size;
	/**  */
	get size() { return this.#size; }
	/**  */
	#rows;

	/**
	 * @param {integer} size .
	 */
	constructor(size) {
		this.#size = size;
		// @TODO Optimize.
		this.#rows = [];
		for (let index = 0; index < this.#size; ++index) {
			this.#rows.push(0);
		}
	}

	/**
	 * @callback Iteration
	 *
	 * @return {integer} Iteration index.
	 *
	 * @return {integer} Row in histogram.
	 */

	/**
	 * @param {Iteration} functor
	 */
	measure(functor) {
		for (let index = 0; index < this.#rows.length * 10000; ++index) {
			++this.#rows[functor(index)];
		}
		return new NumHistoramDistribution(this.#rows);
	}
}

/**
 *
 * @param {string} title .
 * @param {integer} size .
 * @param {NumHistogram.Iteration} functor .
 */
function numTestIsUniformRandom(title, size, functor) {
	const histogram = new NumHistogram(size);
	const distribution = histogram.measure(functor);
	console.log(title, histogram, distribution);
	distribution.links.forEach(link => {
		expect(link.isNearlyUniform()).is.true; });
}
