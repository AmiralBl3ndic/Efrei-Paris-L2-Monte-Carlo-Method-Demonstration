const exporter = module.exports = {};

exporter.random = () => {
	return Math.random();
};

/** Get a random value inside a closed interval
 *
 * @param min: minimum value (will be included)
 * @param max: maximum value (will be included)
 * @returns {number} an integer between the min and max bounds (included)
 */
exporter.randInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	
	return Math.floor(Math.random() * (max - min + 1) + min);
};

