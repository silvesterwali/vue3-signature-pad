type Listener<T> = (value: T) => void;

export function createSearchParam<T>(
	key: string,
	defaultValue: T,
	parse: (v: string) => T,
	serialize: (v: T) => string,
) {
	let value = defaultValue;
	const listeners = new Set<Listener<T>>();

	const read = () => {
		const params = new URLSearchParams(window.location.search);
		const raw = params.get(key);
		value = raw !== null ? parse(raw) : defaultValue;
		listeners.forEach((l) => l(value));
	};

	const write = (v: T, replace = false) => {
		if (value === v) return;
		value = v;
		const url = new URL(window.location.href);
		url.searchParams.set(key, serialize(v));
		history[replace ? "replaceState" : "pushState"]({}, "", url);
		listeners.forEach((l) => l(value));
	};

	const get = () => value;

	const subscribe = (listener: Listener<T>): (() => void) => {
		listeners.add(listener);
		listener(value);

		return () => {
			listeners.delete(listener);
		};
	};

	window.addEventListener("popstate", read);
	read();

	return { subscribe, set: write, get };
}

export const colorParam = createSearchParam(
	"color",
	"#0000",
	(v) => v,
	(v) => v,
);
