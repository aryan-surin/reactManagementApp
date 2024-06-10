import { useRef } from "react"
import Input from "./Input.jsx"

export default function NewProject({ onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave () {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // Validation
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredDueDate.trim().length === 0) {
            // Show the error modal.
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    function onHandleCancel () {
        onCancel();
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onHandleCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label='Title' />
                <Input ref={description} label='Description' textarea />
                <Input type="date" ref={dueDate} label='Due Date' />
            </div>
        </div>
    )
}