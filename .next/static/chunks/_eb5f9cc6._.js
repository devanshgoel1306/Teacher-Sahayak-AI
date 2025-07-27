(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/ai/flows/data:573c04 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40df10d4f37c0a9fcd0bccfa1a8013c58464b0b4d1":"synthesizeSpeech"},"src/ai/flows/text-to-speech.ts",""] */ __turbopack_context__.s({
    "synthesizeSpeech": (()=>synthesizeSpeech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var synthesizeSpeech = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40df10d4f37c0a9fcd0bccfa1a8013c58464b0b4d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "synthesizeSpeech"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGV4dC10by1zcGVlY2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBBIEdlbmtpdCBmbG93IGZvciBzeW50aGVzaXppbmcgdGV4dCBpbnRvIHNwZWVjaC5cbiAqIFxuICogLSBzeW50aGVzaXplU3BlZWNoIC0gQSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRleHQgdG8gYXVkaW8uXG4gKiAtIFN5bnRoZXNpemVTcGVlY2hJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgc3ludGhlc2l6ZVNwZWVjaCBmdW5jdGlvbi5cbiAqIC0gU3ludGhlc2l6ZVNwZWVjaE91dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIHN5bnRoZXNpemVTcGVlY2ggZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnZ2Vua2l0JztcbmltcG9ydCB3YXYgZnJvbSAnd2F2JztcbmltcG9ydCB7IGdvb2dsZUFJIH0gZnJvbSAnQGdlbmtpdC1haS9nb29nbGVhaSc7XG5cblxuY29uc3QgU3ludGhlc2l6ZVNwZWVjaElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB0ZXh0OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgdGV4dCB0byBzeW50aGVzaXplLicpLFxuICBsYW5ndWFnZUNvZGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZWZhdWx0KCdlbi1JTicpLmRlc2NyaWJlKCdUaGUgbGFuZ3VhZ2UgZm9yIHRoZSBzcGVlY2guJyksXG59KTtcbmV4cG9ydCB0eXBlIFN5bnRoZXNpemVTcGVlY2hJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFN5bnRoZXNpemVTcGVlY2hJbnB1dFNjaGVtYT47XG5cbmNvbnN0IFN5bnRoZXNpemVTcGVlY2hPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgYXVkaW9EYXRhVXJpOiB6LnN0cmluZygpLmRlc2NyaWJlKFwiVGhlIHN5bnRoZXNpemVkIGF1ZGlvIGFzIGEgZGF0YSBVUkkuIEV4cGVjdGVkIGZvcm1hdDogJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCw8ZW5jb2RlZF9kYXRhPicuXCIpLFxufSk7XG5leHBvcnQgdHlwZSBTeW50aGVzaXplU3BlZWNoT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU3ludGhlc2l6ZVNwZWVjaE91dHB1dFNjaGVtYT47XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN5bnRoZXNpemVTcGVlY2goXG4gIGlucHV0OiBTeW50aGVzaXplU3BlZWNoSW5wdXRcbik6IFByb21pc2U8U3ludGhlc2l6ZVNwZWVjaE91dHB1dD4ge1xuICByZXR1cm4gc3ludGhlc2l6ZVNwZWVjaEZsb3coaW5wdXQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0b1dhdihcbiAgcGNtRGF0YTogQnVmZmVyLFxuICBjaGFubmVscyA9IDEsXG4gIHJhdGUgPSAyNDAwMCxcbiAgc2FtcGxlV2lkdGggPSAyXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyB3YXYuV3JpdGVyKHtcbiAgICAgIGNoYW5uZWxzLFxuICAgICAgc2FtcGxlUmF0ZTogcmF0ZSxcbiAgICAgIGJpdERlcHRoOiBzYW1wbGVXaWR0aCAqIDgsXG4gICAgfSk7XG5cbiAgICBsZXQgYnVmczogYW55W10gPSBbXTtcbiAgICB3cml0ZXIub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICB3cml0ZXIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgYnVmcy5wdXNoKGQpO1xuICAgIH0pO1xuICAgIHdyaXRlci5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KGJ1ZnMpLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgfSk7XG5cbiAgICB3cml0ZXIud3JpdGUocGNtRGF0YSk7XG4gICAgd3JpdGVyLmVuZCgpO1xuICB9KTtcbn1cblxuY29uc3Qgc3ludGhlc2l6ZVNwZWVjaEZsb3cgPSBhaS5kZWZpbmVGbG93KFxuICB7XG4gICAgbmFtZTogJ3N5bnRoZXNpemVTcGVlY2hGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogU3ludGhlc2l6ZVNwZWVjaElucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogU3ludGhlc2l6ZVNwZWVjaE91dHB1dFNjaGVtYSxcbiAgfSxcbiAgYXN5bmMgKHsgdGV4dCB9KSA9PiB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiB7IGF1ZGlvRGF0YVVyaTogJycgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IG1lZGlhIH0gPSBhd2FpdCBhaS5nZW5lcmF0ZSh7XG4gICAgICAgICAgICBtb2RlbDogZ29vZ2xlQUkubW9kZWwoJ2dlbWluaS0yLjUtZmxhc2gtcHJldmlldy10dHMnKSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlTW9kYWxpdGllczogWydBVURJTyddLFxuICAgICAgICAgICAgICAgIHNwZWVjaENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZvaWNlQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIHByZWJ1aWx0Vm9pY2VDb25maWc6IHsgdm9pY2VOYW1lOiAnQWxnZW5pYicgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvbXB0OiB0ZXh0LnN1YnN0cmluZygwLCA1MDAwKSwgLy8gRW5mb3JjZSBhIGNoYXJhY3RlciBsaW1pdFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1lZGlhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGF1ZGlvIG1lZGlhIHJldHVybmVkIGZyb20gVFRTIG1vZGVsLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXVkaW9CdWZmZXIgPSBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgIG1lZGlhLnVybC5zdWJzdHJpbmcobWVkaWEudXJsLmluZGV4T2YoJywnKSArIDEpLFxuICAgICAgICAgICAgJ2Jhc2U2NCdcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdhdkJhc2U2NCA9IGF3YWl0IHRvV2F2KGF1ZGlvQnVmZmVyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXVkaW9EYXRhVXJpOiAnZGF0YTphdWRpby93YXY7YmFzZTY0LCcgKyB3YXZCYXNlNjQsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGV4dC10by1zcGVlY2ggQVBJIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc3ludGhlc2l6ZSBzcGVlY2guJyk7XG4gICAgfVxuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0E2QnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/voice-output.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "VoiceOutput": (()=>VoiceOutput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Speaker$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/speaker.js [app-client] (ecmascript) <export default as Speaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$573c04__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:573c04 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function VoiceOutput({ text, language = 'en-IN', className }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceOutput.useEffect": ()=>{
            // Cleanup audio on component unmount
            return ({
                "VoiceOutput.useEffect": ()=>{
                    if (audioRef.current) {
                        audioRef.current.pause();
                        audioRef.current = null;
                    }
                }
            })["VoiceOutput.useEffect"];
        }
    }["VoiceOutput.useEffect"], []);
    const playAudio = async ()=>{
        if (!text) return;
        // If already playing, stop it
        if (isPlaying && audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            return;
        }
        setIsGenerating(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$573c04__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["synthesizeSpeech"])({
                text,
                languageCode: language
            });
            if (result.audioDataUri) {
                const audio = new Audio(result.audioDataUri);
                audioRef.current = audio;
                setIsPlaying(true);
                audio.play();
                audio.onended = ()=>{
                    setIsPlaying(false);
                    audioRef.current = null;
                };
                audio.onerror = ()=>{
                    setIsPlaying(false);
                    audioRef.current = null;
                    toast({
                        variant: 'destructive',
                        title: 'Audio Error',
                        description: 'Could not play the generated audio.'
                    });
                };
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Audio Generation Failed',
                    description: 'The audio could not be generated for this text.'
                });
            }
        } catch (error) {
            console.error('TTS Error:', error);
            toast({
                variant: 'destructive',
                title: 'TTS Error',
                description: 'An unexpected error occurred while generating speech.'
            });
        } finally{
            setIsGenerating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        variant: "ghost",
        size: "icon",
        onClick: playAudio,
        disabled: isGenerating || !text,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full", className),
        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/voice-output.tsx",
            lineNumber: 99,
            columnNumber: 9
        }, this) : isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"], {
            className: "text-primary"
        }, void 0, false, {
            fileName: "[project]/src/components/voice-output.tsx",
            lineNumber: 101,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Speaker$3e$__["Speaker"], {}, void 0, false, {
            fileName: "[project]/src/components/voice-output.tsx",
            lineNumber: 103,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voice-output.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(VoiceOutput, "nfLrFCssOdJ/FPfX8EaF5kK7c3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = VoiceOutput;
var _c;
__turbopack_context__.k.register(_c, "VoiceOutput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/voice-output.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/voice-output.tsx [app-client] (ecmascript)"));
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/speaker.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Speaker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            key: "1nb95v"
        }
    ],
    [
        "path",
        {
            d: "M12 6h.01",
            key: "1vi96p"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "4",
            key: "1jruaj"
        }
    ],
    [
        "path",
        {
            d: "M12 14h.01",
            key: "1etili"
        }
    ]
];
const Speaker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Speaker", __iconNode);
;
 //# sourceMappingURL=speaker.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/speaker.js [app-client] (ecmascript) <export default as Speaker>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Speaker": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$speaker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/speaker.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>CircleStop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "9",
            width: "6",
            height: "6",
            rx: "1",
            key: "1ssd4o"
        }
    ]
];
const CircleStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleStop", __iconNode);
;
 //# sourceMappingURL=circle-stop.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StopCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_eb5f9cc6._.js.map