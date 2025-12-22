    export function getInitialTheme() {
    if (typeof window === 'undefined') {
        return 'light';
    }

    try {
        const saved = window.localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
        return saved;
        }
    } catch {
        // localStorage 접근 실패 시 무시
    }

    const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDark ? 'dark' : 'light';
    }
