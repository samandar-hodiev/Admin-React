
const index = ({className, children}) => {
    return (
        <aside className={className ? className : "w-[300px] h-screen bg-[#1F2937]"}>
            {children ? children : "this is Aside section"}
        </aside>
    )
}
export default index;