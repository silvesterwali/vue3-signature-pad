"use client";

import { ArrowDownToLine, Plus, Undo } from "lucide-react";
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
	SpeedDial,
	SpeedDialAction,
	SpeedDialContent,
	SpeedDialItem,
	SpeedDialLabel,
	SpeedDialTrigger,
} from "./speed-dial.tsx";
export function SpeedDialMenuComponent() {
	const [color, setColor] = useState(colorParam.get());
	const [isOpen, setIsOpen] = useState(false);
	const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);
	useEffect(() => {
		return colorParam.subscribe(setColor);
	}, []);
	return (
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
					<SpeedDialAction onSelect={() => emit("save-signature")}>
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
	);
}
