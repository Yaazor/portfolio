import type { AstroSession } from "astro";

export function HasDarkMode() {
    return localStorage.has('theme')
}

export function ToggleDarkMode(enabled: boolean) {
    if(enabled) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.removeItem('theme')
    }
}