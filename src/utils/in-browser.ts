// check if in browser
const inBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

export default inBrowser;