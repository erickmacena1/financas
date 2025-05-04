function InputNumber ({className, ...props}) {
    return (<input 
        className={`bg-slate-800 p-2 rounded ${className}`}
        type="number"
        {...props}
        />)
}

export default InputNumber