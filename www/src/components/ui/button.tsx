import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "../../lib/utils";

function Button({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"button"> & {
	asChild?: boolean;
}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(
				"inline-flex bg-white shadow-lg border-gray-200 border items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Button };
