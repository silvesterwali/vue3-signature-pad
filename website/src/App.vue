<!-- eslint-disable no-alert -->
<script setup lang='ts'>
import type { Signature } from '@selemondev/vue3-signature-pad'
import { VueSignaturePad } from '@selemondev/vue3-signature-pad'
import { onMounted, ref } from 'vue'
import CustomCodeBlock from './components/CustomCodeBlock.vue'
import EventsTable from './components/EventsTable.vue'
import GithubIcon from './components/icons/GithubIcon.vue'
import PropsTable from './components/PropsTable.vue'

const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 2,
  minWidth: 2,
})

const colors = [
  {
    color: 'rgb(51, 133, 255)',
  },

  {
    color: 'rgb(85, 255, 51)',
  },

  {
    color: 'rgb(255, 85, 51)',
  },
]
const signature = ref<Signature>()
const signatureLaptop = ref<Signature>()
const signatureTablet = ref<Signature>()
const signatureWaterMark = ref<Signature>()
const signatureWaterMarkTablet = ref<Signature>()
const signatureWaterMarkLaptop = ref<Signature>()
function handleUndoLaptop() {
  return signatureLaptop.value?.undo()
}

function handleClearCanvasLaptop() {
  return signatureLaptop.value?.clearCanvas()
}

function handleSaveSignatureLaptop(format?: string) {
  return alert(signatureLaptop.value?.saveSignature(format))
}

function handleUndoTablet() {
  return signatureTablet.value?.undo()
}

function handleClearCanvasTablet() {
  return signatureTablet.value?.clearCanvas()
}

function handleSaveSignatureTablet() {
  return alert(signatureTablet.value?.saveSignature())
}

function handleUndo() {
  return signature.value?.undo()
}

function handleClearCanvas() {
  return signature.value?.clearCanvas()
}

function handleSaveSignature(format: string) {
  return alert(signature.value?.saveSignature(format))
}

function handleUndoWaterMarkLaptop() {
  return signatureWaterMarkLaptop.value?.undo()
}

function handleClearCanvasWaterMarkLaptop() {
  return signatureWaterMarkLaptop.value?.clearCanvas()
}

function handleSaveSignatureWaterMarkLaptop(format?: string) {
  return alert(signatureWaterMarkLaptop.value?.saveSignature(format))
}

function handleUndoWaterMarkTablet() {
  return signatureWaterMarkTablet.value?.undo()
}

function handleClearCanvasWaterMarkTablet() {
  return signatureWaterMarkTablet.value?.clearCanvas()
}

function handleSaveSignatureWaterMarkTablet(format?: string) {
  return alert(signatureWaterMarkTablet.value?.saveSignature(format))
}

function handleWaterMarkUndo() {
  return signatureWaterMark.value?.undo()
}

function handleClearWaterMarkCanvas() {
  return signatureWaterMark.value?.clearCanvas()
}

function handleSaveWaterMarkSignature(format?: string) {
  return alert(signatureWaterMark.value?.saveSignature(format))
}

function handleAddWaterMark() {
  return signatureWaterMark.value?.addWaterMark({
    text: 'Selemondev',
    font: '20px Sans',
    style: 'all',
    fillStyle: 'blue',
    strokeStyle: 'blue',
    x: 830,
    y: 380,
    sx: 830,
    sy: 380,
  })
};

function handleAddWaterMarkLaptop() {
  return signatureWaterMarkLaptop.value?.addWaterMark({
    text: 'Selemondev',
    font: '20px Sans',
    style: 'all',
    fillStyle: 'blue',
    strokeStyle: 'blue',
    x: 830,
    y: 380,
    sx: 830,
    sy: 380,
  })
}

function handleAddWaterMarkTablet() {
  return signatureWaterMarkTablet.value?.addWaterMark({
    text: 'Selemondev',
    font: '20px Sans',
    style: 'all',
    fillStyle: 'blue',
    strokeStyle: 'blue',
    x: 830,
    y: 380,
    sx: 830,
    sy: 380,
  })
}

const installCmd = ref(`npm install @selemondev/vue3-signature-pad`)
const localImportSnippet = ref(`import { VueSignaturePad } from '@selemondev/vue3-signature-pad'`)
const nuxiSnippet = ref(`npx nuxi@latest module add @selemondev/nuxt-signature-pad`)
const vueSignaturePadTypes = ref(`export interface Point {
  x: number
  y: number
  time: number
  color?: string | undefined
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
  _point: (t: number, start: number, c1: number, c2: number, end: number) => number
}

export interface SignaturePadOptions {
  /*
   * (float or function) Radius of a single dot.
   */
  dotSize?: number | (() => number) | undefined

  /*
   * (float) Minimum width of a line. Defaults to 0.5.
   */
  minWidth?: number | undefined

  /*
   * (float) Maximum width of a line. Defaults to 2.5.
   */
  maxWidth?: number | undefined

  /*
   * (integer) Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling. Defaults to 16.
   */
  throttle?: number | undefined

  /*
   * (integer) Add the next point only if the previous one is farther than x pixels. Defaults to 5.
   */
  minDistance?: number | undefined

  /*
   * (string) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
   */
  backgroundColor?: string | undefined

  /*
   * (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
   */
  penColor?: string | undefined

  /*
   * (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
   */
  velocityFilterWeight?: number | undefined

  /*
   * (function) Callback when stroke begin.
   */
  onBegin?: ((event: MouseEvent) => void) | undefined

  /*
   * (function) Callback when stroke end.
   */
  onEnd?: ((event: MouseEvent) => void) | undefined
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
};

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
      ratio?: number | undefined
      width?: number | undefined
      height?: number | undefined
      callback?: ((error?: ErrorEvent) => void) | undefined
    },
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
    endPoint: Point,
  ) => { end: number, start: number }
  _strokeWidth: (velocity: number) => number
  _drawCurveSegment: (x: number, y: number, width: number) => void
  _drawCurve: (_a: { color: string, curve: Bezier }) => void
  _drawDot: (_a: { color: string, point: Point }) => void
  _fromData: (
    pointGroups: Point[][],
    drawCurve: (_a: { color: string, curve: Bezier }) => void,
    drawDot: (_a: { color: string, point: Point }) => void,
  ) => void
  _toSVG: () => string
  addEventListener: (type: string, listener: (event: Event) => void, options?: { once?: boolean }) => void
  addWaterMark: (obj: WaterMarkObj) => void
  save: (t: string) => void
  undo: () => void
  isCanvasEmpty: () => boolean
  saveSignature: (format?: string) => string
  clearCanvas: () => void
}

export interface Props {
  options: Options
  width: string
  height: string
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
`)

onMounted(() => {
  handleAddWaterMark()
  handleAddWaterMarkTablet()
  handleAddWaterMarkLaptop()
})
</script>

<template>
  <div class=" bg-[#eee]">
    <div class="max-w-screen-lg px-4 py-6 mx-auto space-y-4">
      <div class="space-y-2 md:flex md:justify-between">
        <div>
          <h1 class="text-2xl font-semibold">
            Vue 3 Signature Pad
          </h1>
          <div class="text-stone-600">
            A beautiful signature pad component for Vue 3.
          </div>
        </div>
        <div class="flex items-center gap-1">
          <a
            href="https://x.com/selemondev" target="_blank"
            class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
          >
            <svg class="mr-1 size-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
              />
            </svg>
            @selemondev
          </a>
          <a
            href="https://github.com/selemondev/vue3-signature-pad" target="_blank"
            class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
          >
            <GithubIcon class="mr-1 size-4" />
            Github
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="p-4 bg-white rounded-md">
          <div class="relative bg-gray-100 rounded-md">
            <div class="hidden lg:block">
              <VueSignaturePad
                ref="signatureLaptop" height="400px" width="950px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="hidden md:block lg:hidden">
              <VueSignaturePad
                ref="signatureTablet" height="400px" width="695px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="block md:hidden">
              <VueSignaturePad
                ref="signature" height="400px" width="250px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="absolute md:hidden flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleUndo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearCanvas"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveSignature('image/jpeg')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
                  />
                </svg>
              </button>
            </div>

            <div class="absolute md:block lg:hidden flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleUndoTablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearCanvasTablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveSignatureTablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
                  />
                </svg>
              </button>
            </div>

            <div class="absolute lg:block flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleUndoLaptop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearCanvasLaptop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveSignatureLaptop()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
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
          <div>
            <h1 class="text-lg">
              Choose pen color
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <div v-for="color in colors" :key="color.color">
              <button
                type="button" :style="`background: ${color.color}`"
                class="grid w-8 h-8 rounded-full place-items-center" @click="options.penColor = color.color"
              >
                <p v-if="options.penColor === color.color">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
                    <path
                      fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between w-full p-3 bg-white rounded-md">
          <div>
            <h1 class="text-lg">
              Choose maximum pen line thickness
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <input v-model="options.maxWidth" type="range" :min="0" :max="10">
            <p> {{ options.maxWidth }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between w-full p-3 bg-white rounded-md">
          <div>
            <h1 class="text-lg">
              Choose minimum pen line thickness
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <input v-model="options.minWidth" type="range" :min="0" :max="10">
            <p> {{ options.minWidth }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-1">
        <h2 class="text-lg font-semibold">
          Installation
        </h2>
        <CustomCodeBlock :code="installCmd" lang="bash" />
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold">
          Register it as a local component
        </h3>
        <p class="text-sm">
          Register it as a local component as shown below and you are good to go 🎉:
        </p>
        <CustomCodeBlock :code="localImportSnippet" lang="javascript" />
      </div>

      <div class="space-y-1">
        <h3 class="font-semibold">
          Usage
        </h3>

        <p class="text-sm">
          You can get the svgs from the <a
            href="https://icones.js.org/" target="_blank"
            class="text-blue-500 underline transition-all duration-200 ease-in hover:text-blue-600"
          >Icones</a> library.
        </p>

        <CustomCodeBlock
          code="<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { VueSignaturePad } from '@selemondev/vue3-signature-pad'
import type { CanvasSignature } from '@selemondev/vue3-signature-pad'

const options = ref({
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: 2,
  minWidth: 2,
})

const colors = [
  {
    color: 'rgb(51, 133, 255)',
  },
  {
    color: 'rgb(85, 255, 51)',
  },
  {
    color: 'rgb(255, 85, 51)',
  },
]
const signature = ref<Signature>()

function handleUndo() {
  return signature.value?.undo()
}

function handleClearCanvas() {
  return signature.value?.clearCanvas()
}

function handleSaveSignature() {
  return signature.value?.saveSignature() && alert(signature.value?.saveSignature())
}

</script>

<template>
  <div class='flex flex-col space-y-2'>
    <div class='p-4 bg-white rounded-md'>
      <div class='relative bg-gray-100 rounded-md'>
        <VueSignaturePad
          ref='signature'
          height='400px'
          width='950px'
          :max-width='options.maxWidth'
          :min-width='options.minWidth'
          :options='{
            penColor: options.penColor,
            backgroundColor: options.backgroundColor,
          }'
        />

        <div class='absolute flex flex-col space-y-2 top-3 right-4'>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
            @click='handleUndo'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991'
              />
            </svg>
          </button>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
            @click='handleClearCanvas'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 14 14'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11'
              />
            </svg>
          </button>
          <button
            type='button'
            class='grid p-2 bg-white rounded-md shadow-md place-items-center'
            @click='handleSaveSignature'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='#000'
                d='M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose pen color</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <div v-for='color in colors' :key='color.color'>
          <button
            type='button'
            :style='{ background: color.color }'
            class='grid w-8 h-8 rounded-full place-items-center'
            @click='options.penColor = color.color'
          >
            <p v-if='options.penColor === color.color'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 48 48'
              >
                <path
                  fill='#ffffff'
                  fill-rule='evenodd'
                  stroke='#ffffff'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='4'
                  d='m4 24l5-5l10 10L39 9l5 5l-25 25z'
                  clip-rule='evenodd'
                />
              </svg>
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose maximum pen line thickness</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <input v-model='options.maxWidth' type='range' :min='0' :max='10' />
        <p>{{ options.maxWidth }}</p>
      </div>
    </div>
    <div class='flex items-center justify-between w-full p-3 bg-white rounded-md'>
      <div>
        <h1 class='text-lg'>Choose minimum pen line thickness</h1>
      </div>
      <div class='flex items-center space-x-4'>
        <input v-model='options.minWidth' type='range' :min='0' :max='10' />
        <p>{{ options.minWidth }}</p>
      </div>
    </div>
  </div>
</template>" lang="vue"
        />
      </div>

      <div class="space-y-1">
        <h3 class="font-semibold">
          Nuxt 3
        </h3>
        <p class="text-sm">
          If you are using Nuxt 3, you can simply install it by using nuxi as shown below and also add TypeScript as a
          dev
          dependency:
        </p>
        <div class="flex flex-col space-y-3">
          <CustomCodeBlock :code="nuxiSnippet" lang="bash" />
          <CustomCodeBlock code="npm install --save-dev Typescript" lang="bash" />
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="font-semibold">
          Props
        </h3>
        <PropsTable />
      </div>

      <div class="space-y-3">
        <h3 class="font-semibold">
          Events
        </h3>
        <EventsTable />
      </div>

      <div class="space-y-3">
        <h3 class="font-semibold">
          TypeScript
        </h3>
        <p class="text-sm">
          If you are using TypeScript, below are the types that can be imported from `@selemondev/vue3-signature-pad` as
          shown
          below:
        </p>
        <CustomCodeBlock
          code="import type { CanvasOptions, Props, WaterMarkObj, ..... } from @selemondev/vue3-signature-pad"
          lang="typescript"
        />
        <CustomCodeBlock :code="vueSignaturePadTypes" lang="typescript" />
      </div>

      <div class="space-y-3">
        <h3 class="font-semibold">
          Example with Watermark
        </h3>
        <div class="p-4 bg-white rounded-md">
          <div class="relative bg-gray-100 rounded-md">
            <div class="hidden lg:block">
              <VueSignaturePad
                ref="signatureWaterMarkLaptop" height="400px" width="950px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="hidden md:block lg:hidden">
              <VueSignaturePad
                ref="signatureWaterMarkTablet" height="400px" width="695px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="block md:hidden">
              <VueSignaturePad
                ref="signatureWaterMark" height="400px" width="250px" :max-width="options.maxWidth"
                :clear-on-resize="false" :min-width="options.minWidth" :options="{
                  penColor: options.penColor, backgroundColor: options.backgroundColor,
                }"
              />
            </div>

            <div class="absolute md:hidden flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleWaterMarkUndo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearWaterMarkCanvas"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveWaterMarkSignature()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
                  />
                </svg>
              </button>
            </div>

            <div class="absolute md:block lg:hidden flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleUndoWaterMarkTablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearCanvasWaterMarkTablet"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveSignatureWaterMarkTablet()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
                  />
                </svg>
              </button>
            </div>

            <div class="absolute lg:block flex flex-col space-y-2 top-3 right-4">
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleUndoWaterMarkLaptop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleClearCanvasWaterMarkLaptop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14">
                  <path
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                    d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1.002 1.002 0 0 0 .77-.37a1.001 1.001 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"
                  />
                </svg>
              </button>
              <button
                type="button" class="grid p-2 bg-white rounded-md shadow-md place-items-center"
                @click="handleSaveSignatureWaterMarkLaptop()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M21 7v14H3V3h14zm-2 .85L16.15 5H5v14h14zM12 18q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6zM5 7.85V19V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Dark Mode */
@media (prefers-color-scheme: dark) {

  .shiki,
  .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki--code--block {
  width: 100%;
}

pre {
  z-index: 1;
  padding: 16px 24px;
  border-radius: 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  background-color: #F9F9F9 !important;
}

code {
  display: block;
  line-height: 1.7;
  font-size: 15px;
}
</style>
