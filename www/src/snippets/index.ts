export const installCmd = `npm install @selemondev/vue3-signature-pad`;
export const localImportSnippet = `import { VueSignaturePad } from '@selemondev/vue3-signature-pad'`;
export const usageSnippet = `<script setup lang="ts">
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
</script>

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
export const nuxiSnippet = `npx nuxi@latest module add nuxt-signature-pad`;
export const typesSnippet = `
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
`
