<script setup lang="ts">
import type {
	CanvasOptions,
	Point,
	Props,
	Signature,
	WaterMarkObj,
} from "../types";
import SignaturePad from "signature_pad";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
const props = withDefaults(defineProps<Props>(), {
	throttle: 16,
	minWidth: 5,
	maxWidth: 5,
	height: "100%",
	width: "100%",
	options: () => ({
		backgroundColor: "oklch(100.0% 0.000 89.9)",
		penColor: "oklch(0.0% 0.000 0.0)",
	}),
	disabled: false,
	clearOnResize: false,
	defaultUrl: "",
});
const emits = defineEmits<{
	(e: "beginStroke", val: Signature): void;
	(e: "endStroke", val: Signature): void;
	(e: "beforeUpdateStroke", val: Signature): void;
	(e: "afterUpdateStroke", val: Signature): void;
}>();
const canvasOptions = ref<CanvasOptions>({
	signaturePad: {} as Signature,
	dotSize: 0.5,
	minWidth: 2,
	maxWidth: 2,
	throttle: 16,
	backgroundColor: props.options.backgroundColor,
	penColor: props.options.penColor,
	canvasUuid: `canvas_${crypto.randomUUID()}`,
});
const canvas = document.getElementById(
	canvasOptions.value.canvasUuid,
) as HTMLCanvasElement;
function isCanvasEmpty(): boolean {
	return canvasOptions.value.signaturePad.isEmpty();
}

function saveSignature(format?: string, quality = 1.0): string {
	if (format !== undefined || quality !== 1.0) {
		return canvasOptions.value.signaturePad.toDataURL(format, quality);
	}
	return canvasOptions.value.signaturePad?.toDataURL();
}

function clearCanvas() {
	return canvasOptions.value.signaturePad.clear();
}

function fromDataURL(url: string) {
	return canvasOptions.value.signaturePad.fromDataURL(url);
}
function toDataURL(type: string, ...options: any) {
	return canvasOptions.value.signaturePad.toDataURL(type, ...options);
}

function undo() {
	const canvasData: Point[][] = canvasOptions.value.signaturePad.toData();
	if (canvasData.length) {
		canvasData.pop();
		canvasOptions.value.signaturePad.fromData(canvasData);
	}
}

function addWaterMark(data: WaterMarkObj) {
	if (!(Object.prototype.toString.call(data) === "[object Object]")) {
		throw new Error(`Expected Object, got ${typeof data}.`);
	} else {
		const textData = {
			text: data.text || "",
			x: data.x || 20,
			y: data.y || 20,
			sx: data.sx || 40,
			sy: data.sy || 40,
		};
		const VCanvas = document.getElementById(
			canvasOptions.value.canvasUuid,
		) as HTMLCanvasElement;
		const ctx = VCanvas.getContext("2d");
		if (ctx) {
			ctx.font = data.font || "20px sans-serif";
			ctx.fillStyle = data.fillStyle || "#333";
			ctx.strokeStyle = data.strokeStyle || "#333";
			if (data.style === "all") {
				ctx.fillText(textData.text, textData.x, textData.y);

				ctx.strokeText(textData.text, textData.sx, textData.sy);
			} else if (data.style === "stroke") {
				ctx.strokeText(textData.text, textData.sx, textData.sy);
			} else {
				ctx.fillText(textData.text, textData.x, textData.y);
			}
		}
		canvasOptions.value.signaturePad._isEmpty = false;
	}
}

function handleBeginStroke() {
	return canvasOptions.value.signaturePad.addEventListener(
		"beginStroke",
		() => {
			emits("beginStroke", canvasOptions.value.signaturePad);
		},
	);
}

function handleEndStroke() {
	return canvasOptions.value.signaturePad.addEventListener("endStroke", () => {
		emits("endStroke", canvasOptions.value.signaturePad);
	});
}

function handleBeforeUpdateStroke() {
	return canvasOptions.value.signaturePad.addEventListener(
		"beforeUpdateStroke",
		() => {
			emits("beforeUpdateStroke", canvasOptions.value.signaturePad);
		},
	);
}

function handleAfterUpdateStroke() {
	return canvasOptions.value.signaturePad.addEventListener(
		"afterUpdateStroke",
		() => {
			emits("afterUpdateStroke", canvasOptions.value.signaturePad);
		},
	);
}
function resizeCanvas() {
	const c = document.getElementById(
		canvasOptions.value.canvasUuid,
	) as HTMLCanvasElement;
	if (!c) return;

	let url: string | undefined;

	if (!isCanvasEmpty()) {
		url = saveSignature();
	}

	const ratio = Math.max(window.devicePixelRatio || 1, 1);

	const rect = c.getBoundingClientRect();
	if (!rect.width || !rect.height) return;

	c.width = rect.width * ratio;
	c.height = rect.height * ratio;

	c.style.width = `${rect.width}px`;
	c.style.height = `${rect.height}px`;

	const ctx = c.getContext("2d");
	ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);

	clearCanvas();

	if (!props.clearOnResize && url) {
		fromDataURL(url);
	}

	if (props.waterMark && Object.keys(props.waterMark).length) {
		addWaterMark(props.waterMark);
	}
}
const resizeHandler = () => {
	resizeCanvas();
};
function draw() {
	const canvas = document.getElementById(
		canvasOptions.value.canvasUuid,
	) as HTMLCanvasElement;
	if (!canvas) {
		throw new Error(
			`Canvas element with ID ${canvasOptions.value.canvasUuid} not found.`,
		);
	}
	// @ts-expect-error
	canvasOptions.value.signaturePad = new SignaturePad(
		canvas,
		canvasOptions.value,
	);
	handleBeginStroke();
	handleEndStroke();
	handleBeforeUpdateStroke();
	handleAfterUpdateStroke();
	props.disabled
		? canvasOptions.value.signaturePad?.off()
		: canvasOptions.value.signaturePad?.on();
	const resizeHandler = () => {
		resizeCanvas();
	};
	window.addEventListener("resize", resizeHandler);
	resizeCanvas();
	if (props.defaultUrl !== "") {
		fromDataURL(props.defaultUrl);
	}
}

defineExpose({
	saveSignature,
	clearCanvas,
	addWaterMark,
	isCanvasEmpty,
	fromDataURL,
	toDataURL,
	resizeCanvas,
	undo,
});

onMounted(() => {
	draw();
});

onBeforeUnmount(() => {
	const resizeHandler = () => {
		resizeCanvas();
	};
	window.removeEventListener("resize", resizeHandler);
});

watch(
	() => props,
	(val) => {
		canvasOptions.value.signaturePad.penColor = val.options?.penColor!;
		canvasOptions.value.signaturePad.backgroundColor =
			val.options?.backgroundColor!;
		canvasOptions.value.signaturePad.minWidth = val.minWidth;
		canvasOptions.value.signaturePad.maxWidth = val.maxWidth;
	},
	{ immediate: true, deep: true },
);
</script>

<template>
    <canvas
        :id="canvasOptions.canvasUuid"
        :style="{ width: props.width, height: props.height }"
        :data-uid="canvasOptions.canvasUuid"
    />
</template>
