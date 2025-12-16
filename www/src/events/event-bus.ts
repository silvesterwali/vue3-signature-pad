const EVENT_NAME = "trigger:command";

export function emit(name: string) {
  window.dispatchEvent(
    new CustomEvent<string>(EVENT_NAME, {
      detail: name,
    }),
  );
}

export function on(name: string, fn: (name: string) => void) {
  const handler = (e: Event) => {
    if ((e as CustomEvent<string>).detail === name) {
      fn((e as CustomEvent<string>).detail);
    }
  };

  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}
