const COLORS_LIGHT = {
	appBackground: "#EEECEC",
	primary900: "#00146D",
	primary300: "#6d78bd",
	primary200: "#969ecf",
	primary100: "#B0B7E5",
	secondary800: "#6d0014",
	grey600: "#757575",
	grey300: "#BDBDBD",
	fontMain: "#000000",
	fontInverse: "#FFFFFF",
} as const;

const COLORS_DARK = {
	appBackground: "#262626",
	primary900: "#BA68C8",
	primary300: "#e1bee7",
	primary200: "#514951",
	primary100: "#351401",
	secondary800: "#c86876",
	grey300: "#757575",
	grey600: "#BDBDBD",
	fontMain: "#FFFFFF",
	fontInverse: "#000000",
} as const;

export { COLORS_DARK, COLORS_LIGHT };
