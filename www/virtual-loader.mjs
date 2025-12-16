export async function resolve(specifier, context, next) {
	if (specifier.startsWith("virtual:") || specifier.startsWith("astro:")) {
		console.error(
			"virtual spec:",
			specifier,
			"imported from",
			context.parentURL,
		);
		return {
			url: "data:text/javascript,export default {};",
			shortCircuit: true,
		};
	}
	return next(specifier, context);
}
