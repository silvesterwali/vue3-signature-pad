"use client";

import { ArrowDownToLine, Plus, Undo, XIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { colorParam } from "../../store/useStore.ts";
import { emit } from "../../events/event-bus.ts";
import {
  ColorPicker,
  ColorPickerAlphaSlider,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerEyeDropper,
  ColorPickerFormatSelect,
  ColorPickerHueSlider,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerTrigger,
} from "./color-picker.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog.tsx";
import { Button } from "./button";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialItem,
  SpeedDialLabel,
  SpeedDialTrigger,
} from "./speed-dial.tsx";

const downloadFormats = [
  {
    label: "Save as PNG",
    detail: "save-signature-as-png",
  },
  {
    label: "Save as JPG",
    detail: "save-signature-as-jpg",
  },
  {
    label: "Save as SVG",
    detail: "save-signature-as-svg",
  },
] as const;
export function SpeedDialMenuComponent() {
  const [color, setColor] = useState(colorParam.get());
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState("Save as PNG");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    return colorParam.subscribe(setColor);
  }, []);
  return (
    <div>
      <Dialog open={isDialogOpen}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Signature download formats
              <button
                onClick={() => setIsDialogOpen(!isDialogOpen)}
                name="data-dialog-close-button"
                data-slot="button"
              >
                {" "}
                <XIcon className="w-4.5 h-4.5 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in " />
              </button>
            </DialogTitle>
            <DialogDescription className="flex flex-col items-start space-y-2 mt-2">
              {downloadFormats.map((format) => {
                return (
                  <button
                    data-slot="signature-label-button"
                    key={format.label}
                    name={format.label}
                    onClick={(e) => {
                      emit(format.detail);
                      e?.preventDefault();
                    }}
                    className="secondary-text text-sm decoration-dotted underline-offset-[5px] hover:underline cursor-pointer"
                  >
                    {format.label}
                  </button>
                );
              })}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <SpeedDial open={isSpeedDialOpen} onOpenChange={setIsSpeedDialOpen}>
        <SpeedDialTrigger className="transition-transform duration-200 ease-out data-[state=closed]:rotate-0 data-[state=open]:rotate-135">
          <Plus className="w-5 h-5" />
        </SpeedDialTrigger>
        <SpeedDialContent
          onInteractOutside={(event) => {
            event.preventDefault();
          }}
        >
          <SpeedDialItem>
            <SpeedDialLabel>Undo</SpeedDialLabel>
            <SpeedDialAction onSelect={() => emit("undo-signature")}>
              <Undo className="w-5 h-5" />
            </SpeedDialAction>
          </SpeedDialItem>
          <SpeedDialItem>
            <SpeedDialLabel>Save</SpeedDialLabel>
            <SpeedDialAction onSelect={() => setIsDialogOpen(!isDialogOpen)}>
              <ArrowDownToLine className="w-5 h-5" />
            </SpeedDialAction>
          </SpeedDialItem>
          <SpeedDialItem>
            <SpeedDialLabel>Color</SpeedDialLabel>
            <SpeedDialAction>
              <ColorPicker
                value={color}
                onValueChange={(e) => {
                  colorParam.set(e);
                }}
                open={isOpen}
                onOpenChange={setIsOpen}
                defaultValue="#3b82f6"
                defaultFormat="hex"
              >
                <ColorPickerTrigger asChild>
                  <div className="flex items-center gap-2">
                    <ColorPickerSwatch className="size-4.5" />
                  </div>
                </ColorPickerTrigger>
                <ColorPickerContent>
                  <ColorPickerArea />
                  <div className="flex items-center gap-2">
                    <ColorPickerEyeDropper />
                    <div className="flex flex-1 flex-col gap-2">
                      <ColorPickerHueSlider />
                      <ColorPickerAlphaSlider />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ColorPickerFormatSelect />
                    <ColorPickerInput />
                  </div>
                </ColorPickerContent>
              </ColorPicker>
            </SpeedDialAction>
          </SpeedDialItem>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
