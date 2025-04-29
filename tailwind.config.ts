
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk specific colors
				magenta: '#fd0c78',
				teal: '#16a085',
				crimson: '#c0392b',
				green: '#27ae60',
				purple: '#8e44ad',
				// Terminal colors
				terminal: {
					bg: '#000000',
					text: '#f0f0f0',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'text-glitch': {
					'0%': {
						transform: 'translate(0)',
						opacity: '1'
					},
					'2%': {
						transform: 'translate(-3px, 2px)',
						opacity: '0.9'
					},
					'4%': {
						transform: 'translate(3px, -2px)',
						opacity: '0.9'
					},
					'6%': {
						transform: 'translate(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translate(0)',
						opacity: '1'
					}
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 5px 0px var(--glow-color)' },
					'50%': { boxShadow: '0 0 15px 2px var(--glow-color)' },
					'100%': { boxShadow: '0 0 5px 0px var(--glow-color)' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'breathing-border': {
					'0%, 100%': { borderColor: 'rgba(253, 12, 120, 0.6)' },
					'50%': { borderColor: 'rgba(253, 12, 120, 1)' },
				},
				'rotate-sigil': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-glitch': 'text-glitch 10s infinite',
				'scanline': 'scanline 8s linear infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'cursor-blink': 'blink 1s infinite',
				'float': 'float 6s ease-in-out infinite',
				'breathing-border': 'breathing-border 4s ease-in-out infinite',
				'rotate-sigil': 'rotate-sigil 10s linear infinite',
			},
			fontFamily: {
				'mono': ['IBM Plex Mono', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
