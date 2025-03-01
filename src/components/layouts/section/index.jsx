
const index = ({className, children}) => {
    return (
        <section className={className ? className : "w-auto h-auto bg-yellow-300"}>
            {children ? children : "this is section"}
        </section>
    )
}

export default index;