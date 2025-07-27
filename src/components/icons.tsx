import type { SVGProps } from "react";

export function SahayakLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <rect width="256" height="256" fill="none" />
            <path
                d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm33.4,62.6-40,40a8,8,0,0,1-11.3,0l-40-40a8,8,0,0,1,11.3-11.3L128,121.4l34.7-34.7a8,8,0,0,1,11.3,11.3Z"
                fill="currentColor"
                className="text-primary"
            />
            <path
                d="M128,152a72,72,0,0,0-58.4,28.3,8,8,0,0,0,10.1,12.4,56,56,0,0,1,96.6,0,8,8,0,0,0,10.1-12.4A72,72,0,0,0,128,152Z"
                fill="currentColor"
                className="text-accent"
            />
        </svg>
    )
}
