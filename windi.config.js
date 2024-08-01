// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
      extend: {
        animation: {
          "clip-from-top-animation": "clip 1s ease-in-out 1.5s forwards",
          autoRun: 'autoRun 20s linear infinite',
        },
        keyframes: {
          "clip": {
            "0%": { 'clip-path': "ellipse(100% 100% at 50% 50%)" },
            "100%": { 'clip-path': "ellipse(160% 160% at 50% 160%)" },
          },
          autoRun: {
            '0%': {
              transform: 'perspective(1000px) rotateX(-16deg) rotateY(0deg)',
            },
            '100%': {
              transform: 'perspective(1000px) rotateX(-16deg) rotateY(360deg)',
            },
          },
        },
        perspective: {
          '1000px': '1000px',
        },
      },
    },
    shortcuts: {
      'perspective-1000': 'perspective(1000px)',
      'banner': 'relative w-full h-screen text-center overflow-hidden',
      'slider': 'absolute top-10 left-1/2 transform -translate-x-1/2 w-[200px] h-[250px] perspective-[1000px] animate-autoRun z-10',
      'item': 'absolute inset-0',
    },
    variants: {
      extend: {
        width: ['responsive'],
        height: ['responsive'],
        fontSize: ['responsive'],
        textAlign: ['responsive'],
        padding: ['responsive'],
        margin: ['responsive'],
      },
    },
  });