<p align="center">
 <h1 align="center">
  Vue 3 Signature Pad
 </h1>
</p>

<!-- automd:badges color="green" license name="@selemondev/vue3-signature-pad" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@selemondev/vue3-signature-pad?color=green)](https://npmjs.com/package/@selemondev/vue3-signature-pad)
[![npm downloads](https://img.shields.io/npm/dm/@selemondev/vue3-signature-pad?color=green)](https://npm.chart.dev/@selemondev/vue3-signature-pad)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@selemondev/vue3-signature-pad?color=green)](https://bundlephobia.com/package/@selemondev/vue3-signature-pad)
[![install size](https://img.shields.io/npm/dm/%40selemondev%2Fvue3-signature-pad
)](https://packagephobia.com/result?p=@selemondev/vue3-signature-pad)
[![codecov](https://img.shields.io/codecov/c/gh/selemondev/vue3-signature-pad?color=green)](https://codecov.io/gh/selemondev/vue3-signature-pad)
[![license](https://img.shields.io/github/license/selemondev/vue3-signature-pad?color=green)](https://github.com/selemondev/vue3-signature-pad/blob/main/LICENSE)

<!-- /automd -->

## Installation

<!-- automd:pm-install name="@selemondev/vue3-signature-pad" -->

```sh
# ✨ Auto-detect
npx nypm install @selemondev/vue3-signature-pad

# npm
npm install @selemondev/vue3-signature-pad

# yarn
yarn add @selemondev/vue3-signature-pad

# pnpm
pnpm install @selemondev/vue3-signature-pad

# bun
bun install @selemondev/vue3-signature-pad

# deno
deno install @selemondev/vue3-signature-pad
```

<!-- /automd -->

## Usage

```ts
<script setup lang="ts">
import { VueSignaturePad } from "@selemondev/vue3-signature-pad"
import { onMounted, ref } from "vue";

const state = ref({
  options: {
    penColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  disabled: false,
})

const colors = [
  {
    color: 'rgb(51, 133, 255)'
  },

  {
    color: 'rgb(85, 255, 51)'
  },

  {
    color: 'rgb(255, 85, 51)'
  }
];

const activeColor = ref();

const signature = ref();

const handleSave = (format?: string) => {
  return alert(signature.value.saveSignature(format))
};
const handleClear = () => {
  return signature.value.clearCanvas()
};
const handleUndo = () => {
  return signature.value.undo()
};

const handleDisabled = () => {
    return state.value.disabled = !state.value.disabled;
};

const handleFromDataURL = (url: string) => {
  return signature.value.fromDataURL(url);
};

const handleAddWaterMark = () => {
    return signature.value.addWaterMark({
    text: "Selemondev",          // watermark text, > default ''
    font: "20px Arial",         // mark font, > default '20px sans-serif'
    style: 'all',               // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
    fillStyle: "red",           // fillcolor, > default '#333'
    strokeStyle: "blue",      // strokecolor, > default '#333'
    x: 100,                     // fill positionX, > default 20
    y: 200,                     // fill positionY, > default 20
    sx: 100,                    // stroke positionX, > default 40
    sy: 200                     // stroke positionY, > default 40
  });
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="flex flex-col items-center space-y-4">
      <div class="bg-gray-100 p-6">
        <VueSignaturePad ref="signature" height="400px" width="1280px" :maxWidth="2" :minWidth="2"
        :disabled="state.disabled"
          :options="{
            penColor: state.options.penColor, backgroundColor: state.options.backgroundColor
          }" />
      </div>

      <button type="button" @click="handleSave('image/jpeg')">Save</button>
       <button type="button" @click="handleClear">Clear</button>
       <button type="button" @click="handleUndo">Undo</button>
       <button type="button" @click="handleDisabled">Disabled</button>
       <button type="button" @click="handleFromDataURL('https://github.com/selemondev.png')">
       FromData URL
       </button>
       <button type="button" @click="handleAddWaterMark">Add watermark</button>
    </div>
  </div>
</template>
```

## Props

| name          |     type      |           default         |       description             |
|:-------------:|:-------------:|:-------------------------:|   :-----------------:         |
| option        | `Object`     | {penColor:"rgb(0, 0, 0)", backgroundColor:"rgb(255,255,255)"} |     penColor and backgroundColor  |
|        width      | `String`      |         "100%"            | Pad width  |
|        height     | `String`      |         "100%"            | Pad height |
|        throttle   | `Number`      |         16                | Draw the next point at most once per every x milliseconds |
|        maxWidth   | `Number`      |         2                 | Maximum thickness of the pen line |
|        minWidth   | `Number`      |         2                 | Minimum thickness of the pen line |
|  clearOnResize  | `Boolean`     |          false          |Clear canvas on window resize|
|  waterMark  | `Object`     |          {}          |Add addWaterMark |
|  disabled  | `Boolean`     |          false          |Disable canvas |
|  defaultUrl  | `String`     |          ""          |Show image by default |

## Events

| name              |  params                                       | description  |
| :-------------:   |:-------------:                                |:-------------:|
| saveSignature              | 	        format (() / image/jpeg / image/svg) | Save image as PNG/JPEG or SVG |
| clearCanvas             |                                   			| Clear canvas |
| isCanvasEmpty           |                                   			| Returns true if the canvas is empty, otherwise it returns false |
| undo             |                                   			| Remove the last drawing |
| addWaterMark      |           {}     | Add waterMark
| fromDataURL      |          (url)    | Draw signature image from data URL.
| handleBeginStroke |                  | Emits `Signature started` when the user starts drawing on the canvas.
| handleEndStroke |                  | Emits `Signature ended` when the user stops drawing on the canvas.
| handleBeforeUpdateStroke |                  | Emits `Signature before update` before the drawing gets updated on the canvas.
| handleAfterUpdateStroke |                  | Emits `Signature after update` after the drawing gets updated on the canvas.

## Credits go to these amazing projects

- [Signature Pad](https://github.com/szimek/signature_pad)

- [Vue 3 Signature](https://github.com/WangShayne/vue3-signature) - Vue 3 Signature Pad is an enhanced version of Vue 3 Signature with type safety and more options.
