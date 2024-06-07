import { createPortal } from "react-dom"

export default function Modal({ children, onClose }) {
    return createPortal(
        <dialog>{children}</dialog>,
        document.getElementById('modal-root')
    )
}