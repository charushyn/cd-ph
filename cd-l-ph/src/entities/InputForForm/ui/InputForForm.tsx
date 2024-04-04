import { Input } from "@/shared/ui/index";
import { cn } from "@/shared/utils/index";

const InputForForm = ({
    stylesInput, 
    stylesLabel, 
    stylesError,
    stylesStatic,
    className,
    includeError,
    type,
    value,
    id,
    name,
    placeholder,
    onChange,
    checked,
    label,
    errorMessage,
    staticTextInput,
    required,
    pattern,
    } 
    : 
    {
    stylesInput?: string,
    stylesLabel?: string,
    stylesError?: string,
    stylesStatic?: string
    className?: string,
    includeError: boolean,
    type: "checkbox" | "tel" | "email" | "file" | "text",
    value: string,
    id: string
    name: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    checked?: boolean
    label: string
    errorMessage: string
    staticTextInput?: string
    required: boolean
    pattern: string
    }) => {
    return(
        <div className={cn('relative', className)}>
            <label className={cn('', stylesLabel)}>{label}</label>
            <Input pattern={pattern} required={required} type={type} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange} checked={checked} className={stylesInput}></Input>
            {staticTextInput && <span className={cn('absolute top-0 bottom-0 left-4', stylesStatic)}>{staticTextInput}</span>}
            {includeError && <span className={cn(' text-red-700', stylesError)}>{errorMessage}</span>}
        </div>
    )
}

export default InputForForm;