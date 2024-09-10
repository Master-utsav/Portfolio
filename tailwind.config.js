/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  generalsans: ['General Sans', 'sans-serif'],
		},
		clipPath: {
			'wave-enter': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Full visibility
			'wave-exit': 'polygon(0 0, 100% 0, 100% 0, 0 100%)', // Reveal effect
		},
		colors: {
		  black: {
			DEFAULT: '#000',
			100: '#010103',
			200: '#0E0E10',
			300: '#1C1C21',
			500: '#3A3A49',
			600: '#1A1A1A',
		  },
		  white: {
			DEFAULT: '#FFFFFF',
			800: '#E4E4E6',
			700: '#D6D9E9',
			600: '#AFB0B6',
			500: '#62646C',
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		backgroundImage: {
		  terminal: "url('/assets/terminal.png')",
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		transitionProperty: {
			'clip-path': 'clip-path', // Enable transition for clip-path
		  },
	  },
	},
	plugins: [require("tailwindcss-animate")],
	plugins: [require("@tailwindcss/forms")],
  }
  