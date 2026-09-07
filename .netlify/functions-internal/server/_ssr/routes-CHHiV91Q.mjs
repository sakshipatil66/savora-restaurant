import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as LoaderCircle, c as ChevronRight, d as ArrowUpRight, f as ArrowDownRight, i as Menu, l as ChevronLeft, n as Star, o as Leaf, r as Quote, s as Expand, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CHHiV91Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			gold: "rounded-none bg-primary text-primary-foreground shadow-none hover:bg-accent hover:text-accent-foreground",
			goldOutline: "rounded-none border border-primary/60 bg-transparent text-foreground shadow-none hover:bg-primary hover:text-primary-foreground",
			ink: "rounded-none bg-foreground text-background shadow-none hover:bg-primary hover:text-primary-foreground",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-12 px-7 text-xs uppercase tracking-widest",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var savora_story_grid_default = "/assets/savora-story-grid-DIgKN3PO.jpg";
var savora_dishes_grid_default = "/assets/savora-dishes-grid-C6XxLiEl.jpg";
var positions = {
	tl: "left-0 top-0",
	tr: "right-0 top-0",
	bl: "bottom-0 left-0",
	br: "bottom-0 right-0"
};
function SavoraImage({ grid, quadrant, alt, className, eager = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: grid === "story" ? savora_story_grid_default : savora_dishes_grid_default,
			alt,
			loading: eager ? "eager" : "lazy",
			width: 1920,
			height: 1920,
			className: cn("absolute max-w-none object-cover", positions[quadrant]),
			style: {
				width: "200%",
				height: "200%"
			}
		})
	});
}
function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-kicker",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl", light ? "text-cream" : "text-foreground"),
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-6 max-w-xl text-sm leading-7", light ? "text-cream-muted" : "text-muted-foreground"),
				children: description
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "section-shell overflow-hidden bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[520px] sm:min-h-[650px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
						grid: "story",
						quadrant: "tl",
						alt: "The warmly lit SAVORA dining room",
						className: "absolute left-0 top-0 h-[78%] w-[82%] shadow-editorial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
						grid: "story",
						quadrant: "br",
						alt: "Seasonal ingredients prepared for dinner",
						className: "absolute bottom-0 right-0 h-[40%] w-[48%] border-[10px] border-cream shadow-editorial sm:border-[16px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-5 left-2 origin-left -rotate-90 text-[9px] uppercase tracking-[0.35em] text-muted-foreground sm:-left-8",
						children: "Season led · locally rooted"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our story",
						title: "More Than a Meal.",
						description: "SAVORA began with a simple belief: memorable dining happens when care is present in every detail. Our kitchen interprets India's generous culinary traditions through the clarity of modern technique and the rhythm of the seasons."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-sm leading-7 text-muted-foreground",
						children: "From the first welcome to the final petit four, every moment is composed with warmth, restraint, and a distinctly Pune spirit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ink",
						size: "lg",
						className: "mt-9",
						onClick: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }),
						children: ["Discover our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid grid-cols-2 gap-8 border-t border-foreground/15 pt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-display text-3xl font-normal",
							children: "14"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Years of craft"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-display text-3xl font-normal",
							children: "28"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Seasonal plates"
						})] })]
					})
				]
			})]
		})
	});
}
function Chef() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
				grid: "story",
				quadrant: "tr",
				alt: "Executive Chef Aarya Deshmukh plating a dish",
				className: "aspect-[4/5] w-full shadow-editorial"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Meet our chef",
					title: "Aarya Deshmukh",
					description: "Chef Aarya's cooking is grounded in memory: family kitchens, Konkan markets, and the scent of spices warming over a low flame. Fifteen years across Mumbai, Copenhagen, and Singapore sharpened a philosophy built on restraint."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 border-l border-primary pl-6 font-display text-2xl italic leading-snug text-foreground",
					children: "“Technique should never speak louder than the ingredient.”"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 grid grid-cols-2 gap-7 border-t border-border pt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[9px] uppercase tracking-widest text-muted-foreground",
						children: "Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 font-display text-2xl",
						children: "15 years"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[9px] uppercase tracking-widest text-muted-foreground",
						children: "Philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 font-display text-2xl",
						children: "Memory, refined"
					})] })]
				})
			] })]
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		if (event.currentTarget.checkValidity()) setSent(true);
		else event.currentTarget.reportValidity();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-shell bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Find us",
					title: "Come for dinner. Stay for the feeling."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-9 not-italic text-sm leading-7 text-muted-foreground",
					children: [
						"SAVORA, 10th Floor, Meridian House",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Koregaon Park, Pune 411001"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+912067454500",
							className: "contact-link",
							children: ["+91 20 6745 4500 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:hello@savora.in",
							className: "contact-link",
							children: ["hello@savora.in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/search/?api=1&query=Koregaon+Park+Pune",
							target: "_blank",
							rel: "noreferrer",
							className: "contact-link",
							children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid grid-cols-2 gap-8 border-t border-border pt-7 text-xs leading-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Lunch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [
							"Daily",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"12 PM — 3:30 PM"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Dinner"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [
							"Daily",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"7 PM — 11 PM"
						]
					})] })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink p-7 text-cream sm:p-10",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-[400px] flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-10 w-10 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-4xl",
							children: "Thank you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-cream-muted",
							children: "We’ll be in touch shortly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "goldOutline",
							size: "lg",
							className: "mt-7 border-cream/30 text-cream",
							onClick: () => setSent(false),
							children: "Send another note"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Write to us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-4xl",
							children: "How can we help?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label text-cream-muted",
									children: ["Name *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										name: "name",
										className: "h-12 rounded-none border-cream/20 text-cream"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label text-cream-muted",
									children: ["Email *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										name: "email",
										type: "email",
										className: "h-12 rounded-none border-cream/20 text-cream"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label text-cream-muted",
									children: ["Message *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										required: true,
										name: "message",
										className: "min-h-32 rounded-none border-cream/20 text-cream"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "gold",
							size: "lg",
							type: "submit",
							className: "mt-7",
							children: "Send message"
						})
					]
				})
			})]
		})
	});
}
var savora_experience_default = "/assets/savora-experience-CEmhisf9.jpg";
var experiences = [
	[
		"01",
		"Fine Dining",
		"An intimate evening paced entirely around you.",
		"tl"
	],
	[
		"02",
		"Private Dining",
		"A secluded room for up to sixteen guests.",
		"bl"
	],
	[
		"03",
		"Chef's Table",
		"Seven seats with a view into our creative process.",
		"tr"
	],
	[
		"04",
		"Celebrations",
		"Personalised menus for your defining occasions.",
		"br"
	]
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "section-shell bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Beyond the table",
				title: "The SAVORA Experience",
				description: "Choose the setting. We compose the details—from a spontaneous dinner to the celebration you will remember for years."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: experiences.map(([number, title, copy, quadrant], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `experience-tile group relative overflow-hidden ${index === 0 || index === 3 ? "md:min-h-[600px]" : "md:min-h-[440px]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
							grid: "story",
							quadrant,
							alt: `${title} at SAVORA`,
							className: "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-7 text-cream sm:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] tracking-widest text-primary",
									children: number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl sm:text-4xl",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-sm text-xs leading-6 text-cream-muted",
									children: copy
								})
							]
						})
					]
				}, title))
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "parallax-section relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink px-5 text-center text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: savora_experience_default,
				alt: "SAVORA dining room overlooking Pune at dusk",
				loading: "lazy",
				width: 1920,
				height: 1088,
				className: "absolute inset-0 h-[115%] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/65" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Stay awhile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-5xl leading-none sm:text-7xl lg:text-8xl",
						children: "Crafted for moments worth remembering."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "goldOutline",
						size: "lg",
						className: "mt-9 border-cream/50 text-cream",
						onClick: () => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }),
						children: ["Explore the experience ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				]
			})
		]
	})] });
}
var links$1 = [
	["Home", "home"],
	["Our story", "about"],
	["Menu", "menu"],
	["Experiences", "experience"],
	["Gallery", "gallery"],
	["Reservations", "reservations"]
];
function Footer() {
	const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink px-5 pb-8 pt-20 text-cream sm:px-8 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 border-b border-cream/15 pb-16 lg:grid-cols-[1.3fr_.7fr_.7fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goTo("home"),
							className: "text-left font-display text-5xl",
							children: "SAVORA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-sm leading-7 text-cream-muted",
							children: "Modern Indian dining shaped by memory, season, and a generous sense of occasion."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "gold",
							size: "lg",
							className: "mt-8",
							onClick: () => goTo("reservations"),
							children: ["Reserve a table ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-title",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-5 flex flex-col items-start gap-3",
						children: links$1.slice(0, 4).map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goTo(id),
							className: "footer-link",
							children: label
						}, id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-title",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col items-start gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => goTo("gallery"),
								className: "footer-link",
								children: "Gallery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => goTo("contact"),
								className: "footer-link",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-link",
								href: "https://www.instagram.com/",
								target: "_blank",
								rel: "noreferrer",
								children: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-link",
								href: "https://www.facebook.com/",
								target: "_blank",
								rel: "noreferrer",
								children: "Facebook"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "footer-title",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-5 not-italic text-xs leading-6 text-cream-muted",
							children: [
								"Koregaon Park",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Pune, Maharashtra",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+912067454500",
									className: "transition-colors hover:text-primary",
									children: "+91 20 6745 4500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hello@savora.in",
									className: "transition-colors hover:text-primary",
									children: "hello@savora.in"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-xs leading-6 text-cream-muted",
							children: [
								"Open daily",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"12 PM — 11 PM"
							]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 pt-7 text-[9px] uppercase tracking-[0.2em] text-cream-muted sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 SAVORA. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pune · Maharashtra · India" })]
			})]
		})
	});
}
var gallery = [
	[
		"story",
		"tl",
		"The main dining room"
	],
	[
		"dish",
		"bl",
		"Slow-cooked Kashmiri lamb"
	],
	[
		"story",
		"tr",
		"Chef Aarya at the pass"
	],
	[
		"dish",
		"br",
		"Saffron pistachio dessert"
	],
	[
		"story",
		"bl",
		"Private candlelit dining"
	],
	[
		"dish",
		"tr",
		"Wild mushroom kulcha"
	]
];
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	const activeImage = active === null ? void 0 : gallery[active];
	const change = (direction) => setActive((value) => value === null ? 0 : (value + direction + gallery.length) % gallery.length);
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setActive(null);
			if (event.key === "ArrowRight") change(1);
			if (event.key === "ArrowLeft") change(-1);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section-shell bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				light: true,
				eyebrow: "In the room",
				title: "An evening at SAVORA.",
				description: "A glimpse of the craft, company, and quiet theatre that unfolds each night."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4",
				children: gallery.map(([grid, quadrant, alt], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(index),
					"aria-label": `View ${alt}`,
					className: `group relative overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 3 ? "row-span-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
						grid,
						quadrant,
						alt,
						className: "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/35",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { className: "h-6 w-6 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" })
					})]
				}, alt))
			})]
		}), activeImage && active !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Gallery lightbox",
			className: "fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "absolute right-4 top-4 z-10 text-cream hover:bg-cream/10",
					onClick: () => setActive(null),
					"aria-label": "Close gallery",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "absolute left-3 top-1/2 z-10 -translate-y-1/2 text-cream hover:bg-cream/10 sm:left-8",
					onClick: () => change(-1),
					"aria-label": "Previous image",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
					grid: activeImage[0],
					quadrant: activeImage[1],
					alt: activeImage[2],
					className: "h-[75vh] w-[min(100%,1100px)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "absolute right-3 top-1/2 z-10 -translate-y-1/2 text-cream hover:bg-cream/10 sm:right-8",
					onClick: () => change(1),
					"aria-label": "Next image",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "absolute bottom-5 text-xs uppercase tracking-widest text-cream-muted",
					children: [
						activeImage[2],
						" · ",
						active + 1,
						"/",
						gallery.length
					]
				})
			]
		})]
	});
}
var savora_hero_default = "/assets/savora-hero-DIVzv6FV.jpg";
var goTo$1 = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[760px] overflow-hidden bg-ink text-cream md:min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: savora_hero_default,
				alt: "Seared fish plated with saffron sauce in the SAVORA dining room",
				width: 1920,
				height: 1200,
				fetchPriority: "high",
				className: "hero-image absolute inset-0 h-full w-full object-cover object-[66%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-center px-5 pb-20 pt-28 sm:px-8 md:min-h-screen lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl animate-hero-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Where flavor meets experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-6xl leading-[0.88] text-cream sm:text-8xl lg:text-[8.75rem]",
							children: "SAVORA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-lg text-base leading-7 text-cream-muted sm:text-lg",
							children: "An elevated dining experience shaped by exceptional ingredients, thoughtful Indian cooking, and unforgettable moments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "gold",
								size: "lg",
								onClick: () => goTo$1("reservations"),
								children: ["Reserve a table ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "goldOutline",
								size: "lg",
								className: "border-cream/40 text-cream hover:border-primary",
								onClick: () => goTo$1("menu"),
								children: "Explore menu"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-7 left-5 right-5 grid grid-cols-2 gap-4 border-t border-cream/20 pt-5 text-[10px] uppercase tracking-[0.24em] text-cream-muted sm:left-8 sm:right-8 lg:left-12 lg:right-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pune · Maharashtra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "Open daily · 12 PM — 11 PM"
					})]
				})]
			})
		]
	});
}
var menu = {
	Starters: [
		[
			"Tandoor Cauliflower",
			"Charred florets, cultured cashew, chilli oil",
			"₹780",
			true,
			"tl"
		],
		[
			"Coastal Scallops",
			"Raw mango, coconut, kokum and curry leaf",
			"₹1,150",
			false,
			"tr"
		],
		[
			"Jackfruit Galouti",
			"Smoked papad, mint and saffron",
			"₹720",
			true,
			"bl"
		]
	],
	"Main Course": [
		[
			"Kashmiri Lamb",
			"Morel, turnip purée and black cardamom jus",
			"₹1,650",
			false,
			"bl"
		],
		[
			"Malabar Sea Bass",
			"Saffron velouté, pickled fennel and greens",
			"₹1,750",
			false,
			"tl"
		],
		[
			"Forest Mushroom Khichdi",
			"Millet, truffle, aged parmesan",
			"₹1,050",
			true,
			"tr"
		]
	],
	Specials: [
		[
			"Chef's Tasting Menu",
			"Seven courses celebrating the Western Ghats",
			"₹4,800",
			false,
			"tr"
		],
		[
			"Monsoon Thali",
			"A seasonal procession of regional favourites",
			"₹2,400",
			true,
			"tl"
		],
		[
			"Fire & Smoke",
			"Charred seasonal produce from the open kitchen",
			"₹1,350",
			true,
			"bl"
		]
	],
	Desserts: [
		[
			"Saffron Reverie",
			"Pistachio, rose, honey and gold leaf",
			"₹690",
			true,
			"br"
		],
		[
			"Dark Chocolate Mysore Pak",
			"Cocoa nib, sea salt, coffee",
			"₹650",
			true,
			"tr"
		],
		[
			"Tender Coconut",
			"Jaggery, lime leaf and toasted rice",
			"₹590",
			true,
			"tl"
		]
	],
	Beverages: [
		[
			"Kokum No. 7",
			"Kokum, grapefruit, tonic and smoked salt",
			"₹450",
			true,
			"br"
		],
		[
			"Mango Leaf Highball",
			"Mango leaf cordial, citrus and soda",
			"₹480",
			true,
			"tl"
		],
		[
			"Estate Coffee",
			"Single-origin coffee, jaggery and spice",
			"₹320",
			true,
			"tr"
		]
	]
};
function MenuSection() {
	const [category, setCategory] = (0, import_react.useState)("Starters");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "section-shell bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The menu",
					title: "A seasonal expression.",
					description: "Our menu changes with the land. What remains is an exacting approach to flavour, produce, and generous hospitality."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-1 overflow-x-auto border-b border-border pb-px",
					role: "tablist",
					"aria-label": "Menu categories",
					children: Object.keys(menu).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": category === item,
						onClick: () => setCategory(item),
						className: cn("shrink-0 border-b-2 px-5 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors", category === item ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-menu-in mt-10 grid gap-5 lg:grid-cols-3",
					children: menu[category].map(([name, description, price, vegetarian, quadrant]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group grid grid-cols-[112px_minmax(0,1fr)] gap-5 border-b border-border pb-5 lg:grid-cols-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
							grid: "dish",
							quadrant,
							alt: name,
							className: "aspect-square w-full lg:aspect-[4/3]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl leading-tight sm:text-2xl",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-xs text-primary",
										children: price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-5 text-muted-foreground",
									children: description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("flex items-center gap-1 text-[9px] uppercase tracking-wider", vegetarian ? "text-vegetarian" : "text-muted-foreground"),
										children: [vegetarian ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), vegetarian ? "Vegetarian" : "Non-vegetarian"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-7 px-0 text-[9px] uppercase tracking-wider hover:bg-transparent hover:text-primary",
										onClick: () => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" }),
										children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})]
								})
							]
						})]
					}, name))
				}, category)
			]
		})
	});
}
var links = [
	["Home", "home"],
	["About", "about"],
	["Menu", "menu"],
	["Experience", "experience"],
	["Gallery", "gallery"],
	["Reservations", "reservations"],
	["Contact", "contact"]
];
var goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 40);
			let current = "home";
			links.forEach(([, id]) => {
				const element = document.getElementById(id);
				if (element && element.getBoundingClientRect().top < 180) current = id;
			});
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const navigate = (id) => {
		setOpen(false);
		window.setTimeout(() => goTo(id), 80);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 border-b transition-all duration-500", scrolled || open ? "border-cream/10 bg-ink/95 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => navigate("home"),
					className: "min-w-0 text-left text-cream",
					"aria-label": "SAVORA home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-2xl leading-none",
						children: "SAVORA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[8px] uppercase tracking-[0.35em] text-primary",
						children: "Pune · India"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main navigation",
					className: "hidden items-center justify-center gap-6 lg:flex",
					children: links.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate(id),
						className: cn("nav-link", active === id && "nav-link-active"),
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "gold",
					size: "lg",
					className: "hidden lg:inline-flex",
					onClick: () => navigate("reservations"),
					children: "Reserve a table"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((value) => !value),
					className: "text-cream hover:bg-cream/10 hover:text-primary lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mobile-menu-panel fixed inset-x-0 top-[65px] z-50 h-[calc(100dvh-65px)] px-6 transition-all duration-300 lg:hidden", open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col justify-center",
				"aria-label": "Mobile navigation",
				children: [links.map(([label, id], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => navigate(id),
					className: "border-b border-cream/10 py-4 text-left font-display text-3xl text-cream transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-4 font-sans text-[10px] text-primary",
						children: ["0", index + 1]
					}), label]
				}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "gold",
					size: "lg",
					className: "mt-8",
					onClick: () => navigate("reservations"),
					children: "Reserve a table"
				})]
			})
		})]
	});
}
var fieldClass = "h-12 rounded-none border-foreground/20 bg-transparent px-4 focus-visible:ring-primary";
function Reservation() {
	const [state, setState] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const submit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			setError("Please complete all required fields before continuing.");
			form.reportValidity();
			return;
		}
		setError("");
		setState("loading");
		window.setTimeout(() => setState("success"), 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reservations",
		className: "section-shell bg-reservation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reservations",
				title: "Your table awaits.",
				description: "Join us for an evening shaped around warm hospitality and the best of the season."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 border-t border-foreground/15 pt-6 text-xs leading-6 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For parties of eight or more, please contact our reservations team directly." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+912067454500",
					className: "mt-4 inline-block font-medium text-foreground hover:text-primary",
					children: "+91 20 6745 4500"
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-foreground/15 bg-background p-6 shadow-editorial sm:p-10",
				children: state === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-[470px] flex-col items-center justify-center text-center",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-16 w-16 place-items-center rounded-full border border-primary text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-4xl",
							children: "Request received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-7 text-muted-foreground",
							children: "Your reservation request has been received. We look forward to welcoming you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							size: "lg",
							className: "mt-8",
							onClick: () => setState("idle"),
							children: "Make another request"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Full name *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										name: "name",
										autoComplete: "name",
										className: fieldClass,
										placeholder: "Your name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Email *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "email",
										name: "email",
										autoComplete: "email",
										className: fieldClass,
										placeholder: "you@example.com"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Phone *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "tel",
										name: "phone",
										autoComplete: "tel",
										className: fieldClass,
										placeholder: "+91"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Date *", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										required: true,
										type: "date",
										name: "date",
										className: fieldClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Time *", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										name: "time",
										className: `${fieldClass} w-full border px-4 text-sm`,
										defaultValue: "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select time"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "12:30 PM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1:30 PM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "7:00 PM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "8:30 PM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "10:00 PM" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label",
									children: ["Guests *", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										name: "guests",
										className: `${fieldClass} w-full border px-4 text-sm`,
										defaultValue: "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select guests"
										}), [
											1,
											2,
											3,
											4,
											5,
											6,
											7,
											8
										].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { children: [
											value,
											" ",
											value === 1 ? "guest" : "guests"
										] }, value))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label sm:col-span-2",
									children: ["Occasion", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "occasion",
										className: `${fieldClass} w-full border px-4 text-sm`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Just dining" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Birthday" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Anniversary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Business dinner" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other celebration" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "form-label sm:col-span-2",
									children: ["Special request", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										name: "request",
										className: "min-h-28 rounded-none border-foreground/20 p-4",
										placeholder: "Dietary preferences, accessibility needs, or anything we should know"
									})]
								})
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-destructive",
							role: "alert",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "gold",
							size: "lg",
							type: "submit",
							disabled: state === "loading",
							className: "mt-7 w-full sm:w-auto",
							children: state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), " Sending request"] }) : "Reserve your table"
						})
					]
				})
			})]
		})
	});
}
var dishes = [
	{
		name: "Tandoor Cauliflower",
		category: "Small plate",
		price: "₹780",
		quadrant: "tl",
		alt: "Tandoor-smoked cauliflower with herbs"
	},
	{
		name: "Wild Mushroom Kulcha",
		category: "From the hearth",
		price: "₹920",
		quadrant: "tr",
		alt: "Wild mushroom kulcha with shaved truffle"
	},
	{
		name: "Kashmiri Lamb",
		category: "Signature",
		price: "₹1,650",
		quadrant: "bl",
		alt: "Slow-cooked lamb with rich sauce"
	},
	{
		name: "Saffron Reverie",
		category: "Dessert",
		price: "₹690",
		quadrant: "br",
		alt: "Saffron pistachio dessert with gold leaf"
	}
];
function SignatureDishes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					light: true,
					eyebrow: "A taste of SAVORA",
					title: "Signature plates.",
					description: "Ingredients at their peak, transformed with fire, patience, and a respect for origin."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "goldOutline",
					size: "lg",
					className: "self-start border-cream/30 text-cream sm:self-auto",
					onClick: () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }),
					children: "View full menu"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-cream/15 md:grid-cols-2 xl:grid-cols-4",
				children: dishes.map((dish) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "dish-card group relative min-h-[480px] overflow-hidden bg-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavoraImage, {
							grid: "dish",
							quadrant: dish.quadrant,
							alt: dish.alt,
							className: "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dish.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dish.price })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl",
									children: dish.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-h-0 overflow-hidden text-xs leading-6 text-cream-muted opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100",
									children: "A precise balance of smoke, texture, brightness, and aromatic spice."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									className: "mt-3 px-0 text-primary opacity-100 hover:bg-transparent hover:text-cream md:opacity-0 md:group-hover:opacity-100",
									onClick: () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }),
									children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							]
						})
					]
				}, dish.name))
			})]
		})
	});
}
var testimonials = [
	["Ananya Mehta", "The food has confidence without spectacle. Every plate felt considered, and the room made a Tuesday evening feel like an occasion."],
	["Rohan & Mira", "Our anniversary dinner was beautifully paced. The chef's tasting menu moved from familiar memories to completely new flavours."],
	["Devika Shah", "Rarely does a restaurant balance warmth and precision so naturally. SAVORA is already part of our Pune ritual."]
];
function Testimonials() {
	const [active, setActive] = (0, import_react.useState)(0);
	const testimonial = testimonials[active] ?? testimonials[0];
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 6e3);
		return () => window.clearInterval(timer);
	}, []);
	const change = (direction) => setActive((value) => (value + direction + testimonials.length) % testimonials.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 text-center sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-9 w-9 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-menu-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex justify-center gap-1 text-primary",
							"aria-label": "5 out of 5 stars",
							children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current" }, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mx-auto mt-8 max-w-4xl font-display text-3xl leading-tight sm:text-5xl",
							children: [
								"“",
								testimonial[1],
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-7 text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
							children: [testimonial[0], " · Pune"]
						})
					]
				}, active),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "goldOutline",
						size: "icon",
						onClick: () => change(-1),
						"aria-label": "Previous testimonial",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "goldOutline",
						size: "icon",
						onClick: () => change(1),
						"aria-label": "Next testimonial",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureDishes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chef, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reservation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
