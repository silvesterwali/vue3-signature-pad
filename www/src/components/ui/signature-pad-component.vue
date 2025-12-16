<script setup lang="ts">
import VueSignaturePad from "../../../../src/components/VueSignaturePad.vue";
import { ref, onMounted, onUnmounted, watch, useTemplateRef } from "vue";
import { colorParam } from "../../store/useStore";
import type { Signature } from "../../../../src/types";
import { on } from "../../events/event-bus";
const options = ref({
    penColor: "#000",
    backgroundColor: "oklch(100.0% 0.000 89.9)",
    maxWidth: 2,
    minWidth: 2,
});
const signature = useTemplateRef<Signature>("signature");
function dataURLToBlob(dataURL: string) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}
async function handleSave() {
    if (signature.value?.isCanvasEmpty())
        return alert("Signature cannot be empty!");
    const dataURL = signature.value?.toDataURL();
    const blob = dataURLToBlob(dataURL!);
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = "signature-pad.png";

    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

function handleUndo() {
    return signature.value?.undo();
}
const color = ref(colorParam.get());
onMounted(() => {
  const cleanups = [
    colorParam.subscribe(v => (color.value = v)),
    on("save-signature", handleSave),
    on("undo-signature", handleUndo),
  ];

  onUnmounted(() => {
    cleanups.forEach(fn => fn());
  });
});


watch(
    color,
    (newColor) => {
        options.value.penColor = newColor;
    },
    { immediate: true },
);
</script>

<template>
    <div class="border border-gray-100 rounded-lg shadow-md p-1">
        <VueSignaturePad
            ref="signature"
            height="350px"
            width="100%"
            class="signature-pad-component-cursor rounded-lg"
            :options="{
                penColor: color,
                backgroundColor: 'oklch(100.0% 0.000 89.9)',
            }"
            :max-width="options.maxWidth"
            :min-width="options.minWidth"
        />
    </div>
</template>

<style scoped>
.signature-pad-component-cursor {
    cursor: url("../../icons/pen-icon.svg"), pointer;
}
</style>
