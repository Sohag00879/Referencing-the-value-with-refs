import { useRef } from "react";

export default function Counter() {
    let ref = useRef(0)
    const handleClick = () => {
        ref.current = ref.current + 1;
        console.log(ref.current)
    }
    return (
        <button
            onClick={handleClick}
        >
            Click me!
        </button>
    );
}
