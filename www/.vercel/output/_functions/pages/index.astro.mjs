import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderComponent } from '../chunks/astro/server_Cz3olCBL.mjs';
import 'clsx';
/* empty css                                 */
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="A beautiful signature pad component for Vue 3."><title>Signature Pad</title>${renderHead()}</head> <body> <div class="max-w-3xl mx-auto space-y-4"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/selemondev/Desktop/vue3-signature-pad/www/src/layouts/default.astro", void 0);

const installCmd = `npm install @selemondev/vue3-signature-pad`;
const localImportSnippet = `import { VueSignaturePad } from '@selemondev/vue3-signature-pad'`;
const usageSnippet = `<script setup lang="ts">
import { ref } from "vue"
import { VueSignaturePad } from "@selemondev/vue3-signature-pad"
import type { CanvasSignature } from "@selemondev/vue3-signature-pad"

const options = ref({
  penColor: "rgb(255, 0, 0)",
  maxWidth: 4,
  minWidth: 4,
})

const colors = [
  { color: "rgb(51, 133, 255)" },
  { color: "rgb(85, 255, 51)" },
  { color: "rgb(255, 85, 51)" },
]

const signature = ref<CanvasSignature>()

function handleUndo() {
  return signature.value?.undo()
}

function handleClearCanvas() {
  return signature.value?.clearCanvas()
}

function handleSaveSignature() {
  const data = signature.value?.saveSignature()
  if (data) alert(data)
}
<\/script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="p-4 bg-white rounded-md">
      <div class="relative bg-gray-100 rounded-md">
        <VueSignaturePad
          ref="signature"
          height="400px"
          width="950px"
          :max-width="options.maxWidth"
          :min-width="options.minWidth"
          :options="{
            penColor: options.penColor,
          }"
        />

        <div class="absolute top-3 right-4 flex flex-col space-y-2">
          <button
            type="button"
            class="grid p-2 bg-white rounded-md shadow-md place-items-center"
            @click="handleUndo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
              />
            </svg>
          </button>

          <button
            type="button"
            class="grid p-2 bg-white rounded-md shadow-md place-items-center"
            @click="handleClearCanvas"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
              />
            </svg>
          </button>

          <button
            type="button"
            class="grid p-2 bg-white rounded-md shadow-md place-items-center"
            @click="handleSaveSignature"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full p-3 bg-white rounded-md">
      <h1 class="text-lg">Choose pen color</h1>

      <div class="flex items-center space-x-4">
        <div v-for="color in colors" :key="color.color">
          <button
            type="button"
            :style="{ background: color.color }"
            class="grid w-8 h-8 rounded-full place-items-center"
            @click="options.penColor = color.color"
          >
            <svg
              v-if="options.penColor === color.color"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffffff"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full p-3 bg-white rounded-md">
      <h1 class="text-lg">Choose maximum pen line thickness</h1>
      <div class="flex items-center space-x-4">
        <input v-model="options.maxWidth" type="range" min="0" max="10" />
        <p>{{ options.maxWidth }}</p>
      </div>
    </div>

    <div class="flex items-center justify-between w-full p-3 bg-white rounded-md">
      <h1 class="text-lg">Choose minimum pen line thickness</h1>
      <div class="flex items-center space-x-4">
        <input v-model="options.minWidth" type="range" min="0" max="10" />
        <p>{{ options.minWidth }}</p>
      </div>
    </div>
  </div>
</template>`;
const nuxiSnippet = `npx nuxi@latest module add nuxt-signature-pad`;
const typesSnippet = `
export interface Point {
  x: number
  y: number
  time: number
  color?: string
  velocityFrom: (start: Point) => number
  distanceTo: (start: Point) => number
}

export interface CurveControl {
  c1: Point
  c2: Point
}

export interface Bezier {
  startPoint: Point
  control1: CurveControl
  control2: CurveControl
  endPoint: Point
  startWidth: number
  endWidth: number
  length: () => number
  _point: (
    t: number,
    start: number,
    c1: number,
    c2: number,
    end: number
  ) => number
}

export interface SignaturePadOptions {
  /*
   * (float or function) Radius of a single dot.
   */
  dotSize?: number | (() => number)

  /*
   * (float) Minimum width of a line. Defaults to 0.5.
   */
  minWidth?: number

  /*
   * (float) Maximum width of a line. Defaults to 2.5.
   */
  maxWidth?: number

  /*
   * (integer) Draw the next point at most once per every x milliseconds.
   * Set it to 0 to turn off throttling. Defaults to 16.
   */
  throttle?: number

  /*
   * (integer) Add the next point only if the previous one is farther than
   * x pixels. Defaults to 5.
   */
  minDistance?: number

  /*
   * (string) Color used to clear the background.
   */
  backgroundColor?: string

  /*
   * (string) Color used to draw the lines.
   */
  penColor?: string

  /*
   * (float) Weight used to modify new velocity based on the previous velocity.
   * Defaults to 0.7.
   */
  velocityFilterWeight?: number

  /*
   * (function) Callback when stroke begin.
   */
  onBegin?: (event: MouseEvent) => void

  /*
   * (function) Callback when stroke end.
   */
  onEnd?: (event: MouseEvent) => void
}

export interface BasicPoint {
  x: number
  y: number
  pressure: number
  time: number
}

export interface PointGroupOptions {
  dotSize: number
  minWidth: number
  maxWidth: number
  penColor: string
  velocityFilterWeight: number
  compositeOperation: GlobalCompositeOperation
}

export interface PointGroup extends PointGroupOptions {
  points: BasicPoint[]
}

export interface Options {
  penColor: string
  backgroundColor: string
}

export interface WaterMarkObj {
  text: string
  font: string
  style: string
  fillStyle: string
  strokeStyle: string
  x: number
  y: number
  sx: number
  sy: number
}

export interface Signature {
  backgroundColor: string
  canvas: HTMLCanvasElement
  dotSize: number | (() => number)
  maxWidth: number
  minDistance: number
  minWidth: number
  options: SignaturePadOptions
  penColor: string
  throttle: number
  velocityFilterWeight: number

  _ctx: CanvasRenderingContext2D
  _data: Array<{
    color: string
    points: Point[]
  }>
  _isEmpty: boolean
  _lastVelocity: number
  _lastWidth: number
  _mouseButtonDown: boolean
  _points: Point[]

  onBegin: (event: MouseEvent) => void
  onEnd: (event: MouseEvent) => void

  clear: () => void
  fromDataURL: (
    dataUrl: string,
    options?: {
      ratio?: number
      width?: number
      height?: number
      callback?: (error?: ErrorEvent) => void
    }
  ) => void

  toDataURL: (type?: string, encoderOptions?: any) => string
  on: () => void
  off: () => void
  isEmpty: () => boolean
  fromData: (pointGroups: Point[][]) => void
  toData: () => Point[][]

  _handleMouseDown: (event: MouseEvent) => void
  _handleMouseMove: (event: MouseEvent) => void
  _handleMouseUp: (event: MouseEvent) => void
  _handleTouchStart: (event: MouseEvent) => void
  _handleTouchMove: (event: MouseEvent) => void
  _handleTouchEnd: (event: MouseEvent) => void

  _strokeMoveUpdate: () => void
  _strokeBegin: (event: MouseEvent) => void
  _strokeUpdate: (event: MouseEvent) => void
  _strokeEnd: (event: MouseEvent) => void

  _handleMouseEvents: (event: MouseEvent) => void
  _handleTouchEvents: (event: TouchEvent) => void
  _reset: () => void

  _createPoint: (x: number, y: number) => Point
  _addPoint: (point: Point) => Bezier | null
  _calculateCurveWidths: (
    startPoint: Point,
    endPoint: Point
  ) => { end: number; start: number }

  _strokeWidth: (velocity: number) => number
  _drawCurveSegment: (x: number, y: number, width: number) => void
  _drawCurve: (args: { color: string; curve: Bezier }) => void
  _drawDot: (args: { color: string; point: Point }) => void

  _fromData: (
    pointGroups: Point[][],
    drawCurve: (args: { color: string; curve: Bezier }) => void,
    drawDot: (args: { color: string; point: Point }) => void
  ) => void

  _toSVG: () => string

  addEventListener: (
    type: string,
    listener: (event: Event) => void,
    options?: { once?: boolean }
  ) => void

  addWaterMark: (obj: WaterMarkObj) => void
  save: (t: string) => void
  undo: () => void
  isCanvasEmpty: () => boolean
  saveSignature: (format?: string) => string
  clearCanvas: () => void
}

export interface Props {
  options?: Options
  width?: string
  height?: string
  minWidth?: number
  maxWidth?: number
  waterMark?: WaterMarkObj
  throttle?: number
  disabled?: boolean
  clearOnResize?: boolean
  defaultUrl?: string
}

export interface CanvasOptions {
  signaturePad: Signature
  throttle: number
  minWidth?: number
  maxWidth?: number
  dotSize?: number
  option: Options
  canvasUuid: string
}
`;

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"></animate></path><path d="M3 2h5v0h-5zM16 22h5v0h-5z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"></animate></path><path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"></animate></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/icons/twitter-icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const TwitterIcon = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, _attrs))}><mask id="SVGtXXaGeHA" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"></ellipse><ellipse cx="14.5" cy="9" rx="1.5" ry="1"></ellipse></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#SVGtXXaGeHA)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"></animate></rect></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/icons/github-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const GithubIcon = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$UiContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-2"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/ui-container.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center space-y-1"> <h1 class="font-semibold text-xl lg:text-4xl">Signature Pad</h1> <h3 class="secondary-text">
A beautiful signature pad component for Vue 3.
</h3> </div> <div class="grid place-items-center"> <div class="relative h-87.5"> ${renderComponent($$result2, "SignaturePadComponent", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/signature-pad-component.vue", "client:component-export": "default" })} <div class="absolute right-3 top-75"> ${renderComponent($$result2, "SpeedDialMenuComponent", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/speed-dial-menu.tsx", "client:component-export": "SpeedDialMenuComponent" })} </div> </div> </div> <div class="pt-3 flex flex-col space-y-2"> <h1 class="font-normal text-lg">Installation</h1> ${renderComponent($$result2, "CustomCodeBlock", null, { "client:only": "vue", "lang": "bash", "code": installCmd, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} </div> ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="font-normal text-lg">Register it as a local component</h1> <h3 class="secondary-text text-sm">
Register it as a local component as shown below and you are good to
            go 🎉:
</h3> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "lang": "bash", "code": localImportSnippet, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="font-normal text-lg">Usage</h1> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "line-numbers": true, "lang": "vue", "code": usageSnippet, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="font-normal text-lg">Nuxt 3</h1> <h3 class="secondary-text text-sm">
If you are using Nuxt 3, you can simply install it by using nuxi as
            shown below:
</h3> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "lang": "bash", "code": nuxiSnippet, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h3 class="secondary-text text-sm">
Add TypeScript as a dev dependency:
</h3> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "lang": "bash", "code": `npm install --save-dev typescript`, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="font-normal text-lg">Typescript</h1> <h3 class="secondary-text text-sm">
Below are the types that can be imported from the package:
</h3> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "lang": "bash", "code": `import type { CanvasOptions, Props, WaterMarkObj, ..... } from '@selemondev/vue3-signature-pad'`, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "UIContainer", $$UiContainer, {}, { "default": ($$result3) => renderTemplate` <h3 class="secondary-text text-sm">
If you prefer the full internal schema (advanced):
</h3> ${renderComponent($$result3, "CustomCodeBlock", null, { "client:only": "vue", "lang": "ts", "line-numbers": true, "code": typesSnippet, "client:component-hydration": "only", "client:component-path": "/Users/selemondev/Desktop/vue3-signature-pad/www/src/components/ui/custom-code-block.vue", "client:component-export": "default" })} ` })} <div class="flex flex-col space-y-1"> <h1 class="font-normal text-lg">Options</h1> <h3 class="secondary-text text-sm">
You can check out the props and events <a href="https://github.com/selemondev/vue3-signature-pad?tab=readme-ov-file#props" class="text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in decoration-dotted underline-offset-[5px] underline">here</a> </h3> </div> <div class="flex items-center space-x-2 py-6"> <a href="https://github.com/selemondev">${renderComponent($$result2, "GithubIcon", GithubIcon, { "class": "icon" })}</a> <a href="https://twitter.com/selemondev">${renderComponent($$result2, "TwitterIcon", TwitterIcon, { "class": "icon" })}</a> </div> ` })}`;
}, "/Users/selemondev/Desktop/vue3-signature-pad/www/src/pages/index.astro", void 0);

const $$file = "/Users/selemondev/Desktop/vue3-signature-pad/www/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
