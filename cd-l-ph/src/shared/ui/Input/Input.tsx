import { cn } from "@/shared/utils/index"

const Input = ({
    type,
    value,
    id,
    name,
    className,
    placeholder,
    onChange,
    checked,
    required,
    pattern,
} : {
    type: "checkbox" | "tel" | "email" | "file" | "text" | string,
    value: string,
    id: string
    name: string
    className?: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    checked?: boolean
    required: boolean
    pattern: string
}) => {
    return(
        <input 
            type={type} 
            value={value} 
            id={id} 
            name={name} 
            placeholder={placeholder} 
            onChange={onChange}
            required={required}
            pattern={pattern} 
            className={cn('p-2 bg-white border-black border-2',className)}></input>
    )
}

export default Input;