import React, { useEffect, useState } from 'react';

function CursorEffect() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // カーソルの位置を追跡
    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // カーソル位置に応じたclip-pathを計算
    const { x, y } = cursorPosition;
    const clipPath = `circle(80px at ${x}px ${y}px)`;

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* 背景色を設定 */}
            <div
                className="absolute top-0 left-0 h-full w-full bg-blue-500 transition-all duration-300"
                style={{ clipPath: clipPath }}
            ></div>
        </div>
    );
}

export default CursorEffect;