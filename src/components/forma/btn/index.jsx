
const index = ({ className, children, btnType }) => {
    return (
        <button
            className={className ? className : "rounded-md py-1 px-2 bg-slate-300 cursor-pointer hover:bg-slate-400 focus:ring-2 transition-all duration-150 ring-blue-500"}
            type={btnType}
        >
            {children ? children : "Button"}
        </button>
    )
}

export default index;

