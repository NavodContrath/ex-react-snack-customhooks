import { useEffect, useRef, useState } from "react";

/*  Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse. */
export default function useCostumPointer(emoji) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isMoving, setIsMoving] = useState(false)
    const timeoutRef = useRef(null);


    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setIsMoving(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                setIsMoving(false)
            }, 50)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])


    return (
        <>
            <style>
                {`
                body {
                    height: 100vh;
                    margin: 0;
                    padding: 0;
                    cursor: ${isMoving ? "none" : "auto"};
          }
        `}
            </style>
            {isMoving && <div
                style={{
                    position: "fixed",
                    top: mousePosition.y,
                    left: mousePosition.x,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    fontSize: "2rem",
                    zIndex: 9999,
                }}
            >
                {emoji}
            </div>}
        </>
    )
}