export default function Text_01() {
    return (
        <div className="flex items-center justify-center" dir="rtl">
            <div className="relative px-4 py-2 overflow-hidden">
                <h1 className="text-4xl sm:text-5xl font-black shimmer-text tracking-tight">
                    درخشش اصالت
                </h1>
            </div>
            <style>{`
                .shimmer-text {
                    --shimmer-color-start: #334155;
                    --shimmer-color-mid: #94a3b8;
                    background: linear-gradient(
                        90deg,
                        var(--shimmer-color-start) 0%,
                        var(--shimmer-color-start) 40%,
                        var(--shimmer-color-mid) 50%,
                        var(--shimmer-color-start) 60%,
                        var(--shimmer-color-start) 100%
                    );
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    /* Updated for RTL flow */
                    animation: shimmer 3s infinite linear;
                }

                @media (prefers-color-scheme: dark) {
                    .shimmer-text {
                        --shimmer-color-start: #f1f5f9;
                        --shimmer-color-mid: #a855f7;
                    }
                }

                @keyframes shimmer {
                    0% { background-position: -100% 0; }
                    100% { background-position: 100% 0; }
                }
            `}</style>
        </div>
    );
}