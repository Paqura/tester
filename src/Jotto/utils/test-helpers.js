export const findElementByAttr = (wrapper, name) => {
	return wrapper.find(`[data-type="${name}"]`);
};