export function getInitialTheme() {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    try {
        const saved = window.localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
    } catch {
        // localStorage 접근 실패 시 무시
    }

    const prefersLight =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;

    return prefersLight ? 'light' : 'dark';
}
