(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/ai/flows/data:832d3a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c665cfb49e988d1b420756d26c556b177fc46e64":"transcribeAudio"},"src/ai/flows/speech-to-text.ts",""] */ __turbopack_context__.s({
    "transcribeAudio": (()=>transcribeAudio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var transcribeAudio = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c665cfb49e988d1b420756d26c556b177fc46e64", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "transcribeAudio"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3BlZWNoLXRvLXRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBBIEdlbmtpdCBmbG93IGZvciB0cmFuc2NyaWJpbmcgYXVkaW8gdG8gdGV4dCB1c2luZyBHb29nbGUgQ2xvdWQgU3BlZWNoLXRvLVRleHQgQVBJLlxuICogXG4gKiAtIHRyYW5zY3JpYmVBdWRpbyAtIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2NyaWJlcyBhdWRpbyBkYXRhLlxuICogLSBUcmFuc2NyaWJlQXVkaW9JbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgdHJhbnNjcmliZUF1ZGlvIGZ1bmN0aW9uLlxuICogLSBUcmFuc2NyaWJlQXVkaW9PdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSB0cmFuc2NyaWJlQXVkaW8gZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnZ2Vua2l0JztcbmltcG9ydCB7IFNwZWVjaENsaWVudCB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvc3BlZWNoJztcblxuY29uc3QgVHJhbnNjcmliZUF1ZGlvSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGF1ZGlvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiVGhlIGF1ZGlvIGRhdGEgdG8gdHJhbnNjcmliZSwgYXMgYSBkYXRhIFVSSS4gRXhwZWN0ZWQgZm9ybWF0OiAnZGF0YTphdWRpby93ZWJtO2NvZGVjcz1vcHVzO2Jhc2U2NCw8ZW5jb2RlZF9kYXRhPicuXCJcbiAgICApLFxuICBsYW5ndWFnZUNvZGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZWZhdWx0KCdlbi1JTicpLmRlc2NyaWJlKCdUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGF1ZGlvLicpLFxufSk7XG5leHBvcnQgdHlwZSBUcmFuc2NyaWJlQXVkaW9JbnB1dCA9IHouaW5mZXI8dHlwZW9mIFRyYW5zY3JpYmVBdWRpb0lucHV0U2NoZW1hPjtcblxuY29uc3QgVHJhbnNjcmliZUF1ZGlvT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB0cmFuc2NyaXB0aW9uOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgdHJhbnNjcmliZWQgdGV4dC4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgVHJhbnNjcmliZUF1ZGlvT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgVHJhbnNjcmliZUF1ZGlvT3V0cHV0U2NoZW1hPjtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgU3BlZWNoQ2xpZW50LlxuLy8gVGhlIGNsaWVudCB3aWxsIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBwcm9qZWN0J3Mgc2VydmljZSBhY2NvdW50IGNyZWRlbnRpYWxzXG4vLyB3aGVuIGRlcGxveWVkIG9uIEZpcmViYXNlIEFwcCBIb3N0aW5nLiBGb3IgbG9jYWwgZGV2ZWxvcG1lbnQsIGVuc3VyZSB5b3UgaGF2ZVxuLy8gYXV0aGVudGljYXRlZCB3aXRoIGBnY2xvdWQgYXV0aCBhcHBsaWNhdGlvbi1kZWZhdWx0IGxvZ2luYC5cbmxldCBzcGVlY2hDbGllbnQ6IFNwZWVjaENsaWVudCB8IHVuZGVmaW5lZDtcbnRyeSB7XG4gIHNwZWVjaENsaWVudCA9IG5ldyBTcGVlY2hDbGllbnQoKTtcbn0gY2F0Y2ggKGUpIHtcbiAgY29uc29sZS53YXJuKFwiU3BlZWNoQ2xpZW50IGZhaWxlZCB0byBpbml0aWFsaXplLiBWb2ljZSBpbnB1dCBtYXkgbm90IHdvcmsgaW4gbG9jYWwgZGV2ZWxvcG1lbnQgaWYgQURDIGlzIG5vdCBjb25maWd1cmVkLiBJdCB3aWxsIHdvcmsgd2hlbiBkZXBsb3llZC5cIiwgZSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zY3JpYmVBdWRpbyhcbiAgaW5wdXQ6IFRyYW5zY3JpYmVBdWRpb0lucHV0XG4pOiBQcm9taXNlPFRyYW5zY3JpYmVBdWRpb091dHB1dD4ge1xuICByZXR1cm4gdHJhbnNjcmliZUF1ZGlvRmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IHRyYW5zY3JpYmVBdWRpb0Zsb3cgPSBhaS5kZWZpbmVGbG93KFxuICB7XG4gICAgbmFtZTogJ3RyYW5zY3JpYmVBdWRpb0Zsb3cnLFxuICAgIGlucHV0U2NoZW1hOiBUcmFuc2NyaWJlQXVkaW9JbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFRyYW5zY3JpYmVBdWRpb091dHB1dFNjaGVtYSxcbiAgfSxcbiAgYXN5bmMgKHsgYXVkaW9EYXRhVXJpLCBsYW5ndWFnZUNvZGUgfSkgPT4ge1xuICAgIGlmICghc3BlZWNoQ2xpZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNwZWVjaENsaWVudCBub3QgaW5pdGlhbGl6ZWQuIFRoaXMgZmVhdHVyZSBtYXkgb25seSBiZSBhdmFpbGFibGUgd2hlbiBkZXBsb3llZC5cIik7XG4gICAgfVxuICAgICAgXG4gICAgLy8gVGhlIGJhc2U2NCBkYXRhIGlzIHRoZSBwYXJ0IG9mIHRoZSBkYXRhIFVSSSBhZnRlciB0aGUgY29tbWFcbiAgICBjb25zdCBhdWRpb0J5dGVzID0gYXVkaW9EYXRhVXJpLnNwbGl0KCcsJylbMV07XG5cbiAgICBjb25zdCBhdWRpbyA9IHtcbiAgICAgIGNvbnRlbnQ6IGF1ZGlvQnl0ZXMsXG4gICAgfTtcbiAgICBcbiAgICAvLyBOb3RlOiBUaGUgJ2NoaXJwJyBtb2RlbCB1c2VkIGhlcmUgaXMgcGFydCBvZiB0aGUgdjIgQVBJIGZlYXR1cmVzLFxuICAgIC8vIGJ1dCB0aGUgTm9kZS5qcyBjbGllbnQgY2FuIGFjY2VzcyBpdCB2aWEgdGhlIHYxcDFiZXRhMSBlbmRwb2ludC5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBtb2RlbDogJ2NoaXJwJyxcbiAgICAgIGVuY29kaW5nOiAnV0VCTV9PUFVTJyBhcyBjb25zdCxcbiAgICAgIHNhbXBsZVJhdGVIZXJ0ejogNDgwMDAsIC8vIFRoaXMgbXVzdCBtYXRjaCB0aGUgY2xpZW50IHJlY29yZGluZyBzZXR0aW5nc1xuICAgICAgbGFuZ3VhZ2VDb2RlOiBsYW5ndWFnZUNvZGUsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICBhdWRpbzogYXVkaW8sXG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtyZXNwb25zZV0gPSBhd2FpdCBzcGVlY2hDbGllbnQucmVjb2duaXplKHJlcXVlc3QpO1xuICAgICAgY29uc3QgdHJhbnNjcmlwdGlvbiA9XG4gICAgICAgIHJlc3BvbnNlLnJlc3VsdHNcbiAgICAgICAgICA/Lm1hcCgocmVzdWx0KSA9PiByZXN1bHQuYWx0ZXJuYXRpdmVzPy5bMF0udHJhbnNjcmlwdClcbiAgICAgICAgICAuam9pbignXFxuJykgfHwgJyc7XG5cbiAgICAgIHJldHVybiB7IHRyYW5zY3JpcHRpb24gfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdTcGVlY2gtdG8tdGV4dCBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB0cmFuc2NyaWJlIGF1ZGlvLicpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVNBMENzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/voice-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "VoiceInput": (()=>VoiceInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$media$2d$recorder$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-media-recorder/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$832d3a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:832d3a [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const fileToDataUri = (blob)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>{
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Failed to convert blob to Data URI'));
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};
function VoiceInput({ onTranscript, language = 'en-IN', className }) {
    _s();
    const [isTranscribing, setIsTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleAudioStop = async (blobUrl, blob)=>{
        setIsTranscribing(true);
        try {
            const audioDataUri = await fileToDataUri(blob);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$832d3a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["transcribeAudio"])({
                audioDataUri,
                languageCode: language
            });
            if (result.transcription) {
                onTranscript(result.transcription);
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Transcription Failed',
                    description: 'Could not understand audio. Please try again.'
                });
            }
        } catch (error) {
            console.error('Voice input error:', error);
            toast({
                variant: 'destructive',
                title: 'Voice Error',
                description: 'Failed to process audio. Please check permissions and try again.'
            });
        } finally{
            setIsTranscribing(false);
            clearBlobUrl();
        }
    };
    const { status, startRecording, stopRecording, clearBlobUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$media$2d$recorder$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactMediaRecorder"])({
        audio: {
            channelCount: 1
        },
        onStop: handleAudioStop,
        onPermissionDenied: {
            "VoiceInput.useReactMediaRecorder": ()=>{
                toast({
                    variant: "destructive",
                    title: "Microphone Permission Denied",
                    description: "Please allow microphone access in your browser settings to use this feature."
                });
            }
        }["VoiceInput.useReactMediaRecorder"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        size: "icon",
        className: `rounded-full ${className}`,
        onClick: status === 'recording' ? stopRecording : startRecording,
        disabled: isTranscribing,
        children: isTranscribing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/voice-input.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, this) : status === 'recording' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"], {
            className: "text-destructive"
        }, void 0, false, {
            fileName: "[project]/src/components/voice-input.tsx",
            lineNumber: 95,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {}, void 0, false, {
            fileName: "[project]/src/components/voice-input.tsx",
            lineNumber: 97,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/voice-input.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(VoiceInput, "IAWiJGnLXx6POlvqn1Lwy6+ChTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$media$2d$recorder$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReactMediaRecorder"]
    ];
});
_c = VoiceInput;
var _c;
__turbopack_context__.k.register(_c, "VoiceInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/voice-input.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/voice-input.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_bff3a892._.js.map