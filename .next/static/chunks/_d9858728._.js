(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:7ff9d6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f4e56a2b2c9e62cbc0c3320c3c6d55217611e928":"teachAnything"},"src/ai/flows/teach-anything.ts",""] */ __turbopack_context__.s({
    "teachAnything": (()=>teachAnything)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var teachAnything = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f4e56a2b2c9e62cbc0c3320c3c6d55217611e928", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "teachAnything"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVhY2gtYW55dGhpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBBIGdlbmVyYWwgcHVycG9zZSB0ZWFjaGluZyBhc3Npc3RhbnQgZmxvdy5cbiAqXG4gKiAtIHRlYWNoQW55dGhpbmcgLSBBIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgZ2VuZXJhbCB0ZWFjaGluZyBhc3Npc3RhbmNlLlxuICogLSBUZWFjaEFueXRoaW5nSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIHRlYWNoQW55dGhpbmcgZnVuY3Rpb24uXG4gKiAtIFRlYWNoQW55dGhpbmdPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSB0ZWFjaEFueXRoaW5nIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdnZW5raXQnO1xuXG5cbmNvbnN0IFRlYWNoQW55dGhpbmdJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaGlzdG9yeTogei5hcnJheSh6LmFueSgpKSxcbn0pO1xuZXhwb3J0IHR5cGUgVGVhY2hBbnl0aGluZ0lucHV0ID0gei5pbmZlcjx0eXBlb2YgVGVhY2hBbnl0aGluZ0lucHV0U2NoZW1hPjtcblxuY29uc3QgVGVhY2hBbnl0aGluZ091dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmVzcG9uc2U6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBBSVxcJ3MgcmVzcG9uc2UgdG8gdGhlIHVzZXIuJyksXG59KTtcbmV4cG9ydCB0eXBlIFRlYWNoQW55dGhpbmdPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBUZWFjaEFueXRoaW5nT3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlYWNoQW55dGhpbmcoaW5wdXQ6IFRlYWNoQW55dGhpbmdJbnB1dCk6IFByb21pc2U8VGVhY2hBbnl0aGluZ091dHB1dD4ge1xuICByZXR1cm4gdGVhY2hBbnl0aGluZ0Zsb3coaW5wdXQpO1xufVxuXG5cbmNvbnN0IHRlYWNoQW55dGhpbmdGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICd0ZWFjaEFueXRoaW5nRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IFRlYWNoQW55dGhpbmdJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFRlYWNoQW55dGhpbmdPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jICh7aGlzdG9yeX0pID0+IHtcbiAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBgWW91IGFyZSBTYWhheWFrLCBhIGhlbHBmdWwgQUkgdGVhY2hpbmcgYXNzaXN0YW50IGZvciBlZHVjYXRvcnMgaW4gSW5kaWEuIFlvdXIgZ29hbCBpcyB0byBwcm92aWRlIGNvbmNpc2UsIHByYWN0aWNhbCwgYW5kIGhlbHBmdWwgcmVzcG9uc2VzIHRvIHRlYWNoZXIncyBxdWVzdGlvbnMuIFlvdSBjYW4gaGVscCB3aXRoIGxlc3NvbiBwbGFubmluZywgY2xhc3Nyb29tIG1hbmFnZW1lbnQgc3RyYXRlZ2llcywgY3JlYXRpbmcgZWR1Y2F0aW9uYWwgY29udGVudCwgYW5kIHN0dWRlbnQgZW5nYWdlbWVudCB0ZWNobmlxdWVzLiBLZWVwIHlvdXIgcmVzcG9uc2VzIHNob3J0IGFuZCB0byB0aGUgcG9pbnQuYDtcblxuICAgIGNvbnN0IF9tZXNzYWdlczogTWVzc2FnZVtdID0gaGlzdG9yeS5tYXAoKG1zZzogYW55KSA9PiAoe1xuICAgICAgcm9sZTogbXNnLmlzVXNlciA/ICd1c2VyJyA6ICdtb2RlbCcsXG4gICAgICBjb250ZW50OiBbeyB0ZXh0OiBtc2cudGV4dCB9XSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB7IG91dHB1dCB9ID0gYXdhaXQgYWkuZ2VuZXJhdGUoe1xuICAgICAgc3lzdGVtOiBzeXN0ZW1Qcm9tcHQsXG4gICAgICBoaXN0b3J5OiBfbWVzc2FnZXMsXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgc2NoZW1hOiBUZWFjaEFueXRoaW5nT3V0cHV0U2NoZW1hXG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQTBCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SahayakLogo": (()=>SahayakLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SahayakLogo(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "256",
                height: "256",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm33.4,62.6-40,40a8,8,0,0,1-11.3,0l-40-40a8,8,0,0,1,11.3-11.3L128,121.4l34.7-34.7a8,8,0,0,1,11.3,11.3Z",
                fill: "currentColor",
                className: "text-primary"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M128,152a72,72,0,0,0-58.4,28.3,8,8,0,0,0,10.1,12.4,56,56,0,0,1,96.6,0,8,8,0,0,0,10.1-12.4A72,72,0,0,0,128,152Z",
                fill: "currentColor",
                className: "text-accent"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = SahayakLogo;
var _c;
__turbopack_context__.k.register(_c, "SahayakLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:6893e3 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40c4c028a33451231b59cf1a0b26b6081ec53fd430":"textToSpeech"},"src/ai/flows/text-to-speech.ts",""] */ __turbopack_context__.s({
    "textToSpeech": (()=>textToSpeech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var textToSpeech = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c4c028a33451231b59cf1a0b26b6081ec53fd430", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "textToSpeech"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGV4dC10by1zcGVlY2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSB0ZXh0LXRvLXNwZWVjaCBBSSBmbG93LlxuICpcbiAqIC0gdGV4dFRvU3BlZWNoIC0gQSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRleHQgdG8gc3BlZWNoLlxuICogLSBUZXh0VG9TcGVlY2hJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgdGV4dFRvU3BlZWNoIGZ1bmN0aW9uLlxuICogLSBUZXh0VG9TcGVlY2hPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSB0ZXh0VG9TcGVlY2ggZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuaW1wb3J0IHdhdiBmcm9tICd3YXYnO1xuaW1wb3J0IHsgZ29vZ2xlQUkgfSBmcm9tICdAZ2Vua2l0LWFpL2dvb2dsZWFpJztcblxuY29uc3QgVGV4dFRvU3BlZWNoSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRleHQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0ZXh0IHRvIGNvbnZlcnQgdG8gc3BlZWNoLicpLFxufSk7XG5leHBvcnQgdHlwZSBUZXh0VG9TcGVlY2hJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFRleHRUb1NwZWVjaElucHV0U2NoZW1hPjtcblxuY29uc3QgVGV4dFRvU3BlZWNoT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBhdWRpb0RhdGFVcmk6IHpcbiAgICAuc3RyaW5nKClcbiAgICAuZGVzY3JpYmUoXG4gICAgICBcIlRoZSBnZW5lcmF0ZWQgYXVkaW8gYXMgYSBkYXRhIFVSSSB0aGF0IG11c3QgaW5jbHVkZSBhIE1JTUUgdHlwZSBhbmQgdXNlIEJhc2U2NCBlbmNvZGluZy4gRXhwZWN0ZWQgZm9ybWF0OiAnZGF0YTo8bWltZXR5cGU+O2Jhc2U2NCw8ZW5jb2RlZF9kYXRhPicuXCJcbiAgICApLFxufSk7XG5leHBvcnQgdHlwZSBUZXh0VG9TcGVlY2hPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBUZXh0VG9TcGVlY2hPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdGV4dFRvU3BlZWNoKGlucHV0OiBUZXh0VG9TcGVlY2hJbnB1dCk6IFByb21pc2U8VGV4dFRvU3BlZWNoT3V0cHV0PiB7XG4gIHJldHVybiB0ZXh0VG9TcGVlY2hGbG93KGlucHV0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdG9XYXYoXG4gIHBjbURhdGE6IEJ1ZmZlcixcbiAgY2hhbm5lbHMgPSAxLFxuICByYXRlID0gMjQwMDAsXG4gIHNhbXBsZVdpZHRoID0gMlxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgd2F2LldyaXRlcih7XG4gICAgICBjaGFubmVscyxcbiAgICAgIHNhbXBsZVJhdGU6IHJhdGUsXG4gICAgICBiaXREZXB0aDogc2FtcGxlV2lkdGggKiA4LFxuICAgIH0pO1xuXG4gICAgbGV0IGJ1ZnMgPSBbXSBhcyBhbnlbXTtcbiAgICB3cml0ZXIub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICB3cml0ZXIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZCkge1xuICAgICAgYnVmcy5wdXNoKGQpO1xuICAgIH0pO1xuICAgIHdyaXRlci5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KGJ1ZnMpLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgfSk7XG5cbiAgICB3cml0ZXIud3JpdGUocGNtRGF0YSk7XG4gICAgd3JpdGVyLmVuZCgpO1xuICB9KTtcbn1cblxuY29uc3QgdGV4dFRvU3BlZWNoRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAndGV4dFRvU3BlZWNoRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IFRleHRUb1NwZWVjaElucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogVGV4dFRvU3BlZWNoT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyAoe3RleHR9KSA9PiB7XG4gICAgY29uc3QgeyBtZWRpYSB9ID0gYXdhaXQgYWkuZ2VuZXJhdGUoe1xuICAgICAgbW9kZWw6IGdvb2dsZUFJLm1vZGVsKCdnZW1pbmktMi41LWZsYXNoLXByZXZpZXctdHRzJyksXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgcmVzcG9uc2VNb2RhbGl0aWVzOiBbJ0FVRElPJ10sXG4gICAgICAgIHNwZWVjaENvbmZpZzoge1xuICAgICAgICAgIHZvaWNlQ29uZmlnOiB7XG4gICAgICAgICAgICBwcmVidWlsdFZvaWNlQ29uZmlnOiB7IHZvaWNlTmFtZTogJ0FsZ2VuaWInIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwcm9tcHQ6IHRleHQsXG4gICAgfSk7XG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZWRpYSByZXR1cm5lZCBmcm9tIFRUUyBtb2RlbCcpO1xuICAgIH1cbiAgICBjb25zdCBhdWRpb0J1ZmZlciA9IEJ1ZmZlci5mcm9tKFxuICAgICAgbWVkaWEudXJsLnN1YnN0cmluZyhtZWRpYS51cmwuaW5kZXhPZignLCcpICsgMSksXG4gICAgICAnYmFzZTY0J1xuICAgICk7XG4gICAgY29uc3Qgd2F2QmFzZTY0ID0gYXdhaXQgdG9XYXYoYXVkaW9CdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBhdWRpb0RhdGFVcmk6ICdkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsJyArIHdhdkJhc2U2NCxcbiAgICB9O1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0E2QnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:26ef35 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40899377b4dc2f0b03cb0d94e7875ab718376acf0b":"speechToText"},"src/ai/flows/speech-to-text.ts",""] */ __turbopack_context__.s({
    "speechToText": (()=>speechToText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var speechToText = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40899377b4dc2f0b03cb0d94e7875ab718376acf0b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "speechToText"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3BlZWNoLXRvLXRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHNlcnZlcic7XG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSBzcGVlY2gtdG8tdGV4dCBBSSBmbG93IHVzaW5nIEdvb2dsZSBDbG91ZCBTcGVlY2gtdG8tVGV4dC5cbiAqXG4gKiAtIHNwZWVjaFRvVGV4dCAtIEEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhdWRpbyB0byB0ZXh0LlxuICogLSBTcGVlY2hUb1RleHRJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgc3BlZWNoVG9UZXh0IGZ1bmN0aW9uLlxuICogLSBTcGVlY2hUb1RleHRPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSBzcGVlY2hUb1RleHQgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnZ2Vua2l0JztcbmltcG9ydCB7IFNwZWVjaENsaWVudCB9IGZyb20gJ0Bnb29nbGUtY2xvdWQvc3BlZWNoJztcblxuY29uc3QgU3BlZWNoVG9UZXh0SW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGF1ZGlvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiVGhlIGF1ZGlvIHRvIHRyYW5zY3JpYmUsIGFzIGEgZGF0YSBVUkkgdGhhdCBtdXN0IGluY2x1ZGUgYSBNSU1FIHR5cGUgYW5kIHVzZSBCYXNlNjQgZW5jb2RpbmcuIEV4cGVjdGVkIGZvcm1hdDogJ2RhdGE6PG1pbWV0eXBlPjtiYXNlNjQsPGVuY29kZWRfZGF0YT4nLlwiXG4gICAgKSxcbiAgbGFuZ3VhZ2VDb2RlOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ1RoZSBsYW5ndWFnZSBvZiB0aGUgYXVkaW8uIERlZmF1bHRzIHRvIGVuLVVTLicpLFxufSk7XG5leHBvcnQgdHlwZSBTcGVlY2hUb1RleHRJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFNwZWVjaFRvVGV4dElucHV0U2NoZW1hPjtcblxuY29uc3QgU3BlZWNoVG9UZXh0T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB0cmFuc2NyaXB0OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgdHJhbnNjcmliZWQgdGV4dC4nKSxcbn0pO1xuZXhwb3J0IHR5cGUgU3BlZWNoVG9UZXh0T3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU3BlZWNoVG9UZXh0T3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNwZWVjaFRvVGV4dChpbnB1dDogU3BlZWNoVG9UZXh0SW5wdXQpOiBQcm9taXNlPFNwZWVjaFRvVGV4dE91dHB1dD4ge1xuICByZXR1cm4gc3BlZWNoVG9UZXh0RmxvdyhpbnB1dCk7XG59XG5cbmNvbnN0IHNwZWVjaFRvVGV4dEZsb3cgPSBhaS5kZWZpbmVGbG93KFxuICB7XG4gICAgbmFtZTogJ3NwZWVjaFRvVGV4dEZsb3cnLFxuICAgIGlucHV0U2NoZW1hOiBTcGVlY2hUb1RleHRJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFNwZWVjaFRvVGV4dE91dHB1dFNjaGVtYSxcbiAgfSxcbiAgYXN5bmMgKHsgYXVkaW9EYXRhVXJpLCBsYW5ndWFnZUNvZGUgPSAnZW4tVVMnIH0pID0+IHtcbiAgICBjb25zdCBzcGVlY2hDbGllbnQgPSBuZXcgU3BlZWNoQ2xpZW50KCk7XG5cbiAgICBjb25zdCBhdWRpb0J5dGVzID0gYXVkaW9EYXRhVXJpLnNwbGl0KCcsJylbMV07XG5cbiAgICBjb25zdCBhdWRpbyA9IHtcbiAgICAgIGNvbnRlbnQ6IGF1ZGlvQnl0ZXMsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGVuY29kaW5nOiAnV0VCTV9PUFVTJyBhcyBjb25zdCwgLy8gTWVkaWFSZWNvcmRlciB3aXRoIGRlZmF1bHQgc2V0dGluZ3MgaW4gQ2hyb21lIHByb2R1Y2VzIHdlYm0vb3B1c1xuICAgICAgc2FtcGxlUmF0ZUhlcnR6OiA0ODAwMCwgLy8gQ29tbW9uIGZvciB3ZWJtXG4gICAgICBsYW5ndWFnZUNvZGU6IGxhbmd1YWdlQ29kZSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgIGF1ZGlvOiBhdWRpbyxcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbcmVzcG9uc2VdID0gYXdhaXQgc3BlZWNoQ2xpZW50LnJlY29nbml6ZShyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgdHJhbnNjcmlwdGlvbiA9IHJlc3BvbnNlLnJlc3VsdHNcbiAgICAgICAgICAgID8ubWFwKHJlc3VsdCA9PiByZXN1bHQuYWx0ZXJuYXRpdmVzPy5bMF0udHJhbnNjcmlwdClcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNjcmlwdDogdHJhbnNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdTcGVlY2gtdG8tdGV4dCBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB0cmFuc2NyaWJlIGF1ZGlvLicpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBNkJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardClient": (()=>DashboardClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$7ff9d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:7ff9d6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6893e3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:6893e3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$26ef35__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:26ef35 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const suggestionPrompts = [
    {
        title: "Create a worksheet",
        prompt: "Create a math worksheet for grade 5 on multiplication",
        feature: "worksheets"
    },
    {
        title: "Generate a quiz",
        prompt: "Generate a science quiz about photosynthesis for grade 7",
        feature: "games"
    },
    {
        title: "Make a visual aid",
        prompt: "Make a visual aid showing the water cycle",
        feature: "visual-aids"
    },
    {
        title: "Design a game",
        prompt: "Design a word scramble game for vocabulary about animals",
        feature: "games"
    }
];
const featureKeywords = {
    worksheets: [
        'worksheet',
        'exercise',
        'practice sheet'
    ],
    games: [
        'game',
        'quiz',
        'bingo',
        'riddle',
        'scramble',
        'true/false',
        'fill-in-the-blanks'
    ],
    'visual-aids': [
        'visual',
        'chart',
        'diagram',
        'image',
        'drawing',
        'table'
    ],
    'knowledge-base': [
        'explain',
        'what is',
        'how do',
        'why is'
    ],
    'generate-content': [
        'story',
        'poem',
        'dialogue',
        'write a'
    ]
};
const audioToBase64 = (blob)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>{
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};
function DashboardClient() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClient.useEffect": ()=>{
            if (audioRef.current === null) {
                audioRef.current = new Audio();
            }
        }
    }["DashboardClient.useEffect"], []);
    const startRecording = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            mediaRecorderRef.current = new MediaRecorder(stream, {
                mimeType: 'audio/webm; codecs=opus'
            });
            audioChunksRef.current = [];
            mediaRecorderRef.current.ondataavailable = (event)=>{
                audioChunksRef.current.push(event.data);
            };
            mediaRecorderRef.current.onstop = async ()=>{
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: 'audio/webm; codecs=opus'
                });
                setIsLoading(true);
                try {
                    const audioDataUri = await audioToBase64(audioBlob);
                    const { transcript } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$26ef35__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["speechToText"])({
                        audioDataUri
                    });
                    if (transcript) {
                        setPrompt(transcript);
                        processPrompt(transcript, true);
                    } else {
                        toast({
                            variant: "destructive",
                            title: "Voice Input Error",
                            description: "Couldn't understand what you said. Please try again."
                        });
                    }
                } catch (error) {
                    console.error("Speech-to-text error:", error);
                    toast({
                        variant: "destructive",
                        title: "Voice Input Error",
                        description: "Failed to process your voice input. Please try again."
                    });
                } finally{
                    setIsLoading(false);
                }
            };
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
            toast({
                variant: "destructive",
                title: "Microphone Access Denied",
                description: "Please enable microphone permissions in your browser settings."
            });
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
    };
    const toggleRecording = ()=>{
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };
    const detectFeature = (text)=>{
        const lowerText = text.toLowerCase();
        for(const feature in featureKeywords){
            for (const keyword of featureKeywords[feature]){
                if (lowerText.includes(keyword)) {
                    return feature;
                }
            }
        }
        return null;
    };
    const redirectToFeature = (feature, promptText)=>{
        const params = new URLSearchParams();
        switch(feature){
            case 'worksheets':
                const gradeMatch = promptText.match(/grade (\d+)/i);
                const topicMatch = promptText.match(/(on|about) (.*)/i);
                if (gradeMatch) params.set('grade', `Grade ${gradeMatch[1]}`);
                if (topicMatch) params.set('lessonTopic', topicMatch[2]);
                params.set('mode', 'manual');
                router.push(`/worksheets?${params.toString()}`);
                break;
            case 'games':
                const gameGradeMatch = promptText.match(/grade (\d+)/i);
                const gameTopicMatch = promptText.match(/(on|about) ([\w\s]+)/i);
                const gameTypeMatch = promptText.match(/(quiz|bingo|riddle|scramble|true\/false|fill-in-the-blanks)/i);
                if (gameGradeMatch) params.set('grade', gameGradeMatch[1]);
                if (gameTopicMatch) params.set('topic', gameTopicMatch[2].split(" for")[0].trim());
                if (gameTypeMatch) params.set('gameType', gameTypeMatch[1]);
                router.push(`/games?${params.toString()}`);
                break;
            case 'visual-aids':
                params.set('description', promptText);
                router.push(`/visual-aids?${params.toString()}`);
                break;
            default:
                router.push(`/${feature}`);
        }
    };
    const processPrompt = async (promptText, isVoice = false)=>{
        if (!promptText.trim()) return;
        setIsLoading(true);
        const newMessages = [
            ...messages,
            {
                id: Date.now(),
                text: promptText,
                isUser: true
            }
        ];
        setMessages(newMessages);
        setPrompt("");
        const matchedFeature = detectFeature(promptText);
        if (matchedFeature) {
            redirectToFeature(matchedFeature, promptText);
            setIsLoading(false);
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$7ff9d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["teachAnything"])({
                history: newMessages
            });
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        text: result.response,
                        isUser: false
                    }
                ]);
            if (isVoice) {
                const audioResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$6893e3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["textToSpeech"])({
                    text: result.response
                });
                if (audioResult.audioDataUri && audioRef.current) {
                    audioRef.current.src = audioResult.audioDataUri;
                    audioRef.current.play();
                }
            }
        } catch (error) {
            console.error("AI chat error:", error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        text: "Sorry, I ran into a problem. Please try again.",
                        isUser: false
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 pb-24",
                children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold font-headline mb-4",
                            children: "Salute, Super Teacher! 👋"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-client.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "How can I assist you with your teaching today?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-client.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-12",
                            children: suggestionPrompts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4 text-left hover:bg-muted cursor-pointer transition-colors",
                                    onClick: ()=>redirectToFeature(p.feature, p.prompt),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard-client.tsx",
                                                lineNumber: 240,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: p.prompt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard-client.tsx",
                                                lineNumber: 241,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 239,
                                        columnNumber: 21
                                    }, this)
                                }, p.title, false, {
                                    fileName: "[project]/src/app/dashboard-client.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-client.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard-client.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 pt-4",
                    children: [
                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex ${msg.isUser ? 'justify-end' : 'justify-start'}`,
                                children: [
                                    !msg.isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SahayakLogo"], {
                                        className: "w-8 h-8 mr-2 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 251,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 py-3 rounded-2xl max-w-xl ${msg.isUser ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "whitespace-pre-wrap font-body text-base",
                                            children: msg.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-client.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, msg.id, true, {
                                fileName: "[project]/src/app/dashboard-client.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SahayakLogo"], {
                                    className: "w-8 h-8 mr-2 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard-client.tsx",
                                    lineNumber: 259,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 rounded-2xl max-w-xl bg-muted rounded-bl-none flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-5 w-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 261,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard-client.tsx",
                                    lineNumber: 260,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard-client.tsx",
                            lineNumber: 258,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard-client.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-client.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 right-0 left-0 md:left-[14rem] bg-background/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "text",
                                placeholder: "Ask me anything about teaching...",
                                value: prompt,
                                onChange: (e)=>setPrompt(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') processPrompt(prompt);
                                },
                                className: "w-full p-6 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary pr-28",
                                disabled: isLoading || isRecording
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-client.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        variant: isRecording ? 'destructive' : 'ghost',
                                        className: "rounded-full",
                                        onClick: toggleRecording,
                                        disabled: isLoading,
                                        children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-client.tsx",
                                            lineNumber: 289,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-client.tsx",
                                            lineNumber: 289,
                                            columnNumber: 47
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "icon",
                                        className: "rounded-full",
                                        onClick: ()=>processPrompt(prompt),
                                        disabled: isLoading || !prompt.trim() || isRecording,
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-client.tsx",
                                            lineNumber: 297,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {}, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-client.tsx",
                                            lineNumber: 297,
                                            columnNumber: 71
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-client.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-client.tsx",
                                lineNumber: 281,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard-client.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-client.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-client.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-client.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_s(DashboardClient, "xpUkQ/RuoE2tsa9WDO5wbe3OY9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>Send)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Send": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>Mic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
];
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mic", __iconNode);
;
 //# sourceMappingURL=mic.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Mic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "default": (()=>MicOff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",
            key: "80xlxr"
        }
    ],
    [
        "path",
        {
            d: "M5 10v2a7 7 0 0 0 12 5",
            key: "p2k8kg"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ]
];
const MicOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MicOff", __iconNode);
;
 //# sourceMappingURL=mic-off.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MicOff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const createServerReference = (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)")).createServerReference; //# sourceMappingURL=action-client-wrapper.js.map
}}),
}]);

//# sourceMappingURL=_d9858728._.js.map