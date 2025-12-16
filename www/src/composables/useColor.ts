import { ref, onMounted, onUnmounted } from "vue";
import { colorParam } from "../store/useStore.ts";

export function useColor() {
  const color = ref(colorParam.get());

  onMounted(() => {
    const unsub = colorParam.subscribe(v => (color.value = v));
    onUnmounted(unsub);
  });

  return {
    color,
    setColor: colorParam.set
  };
}
