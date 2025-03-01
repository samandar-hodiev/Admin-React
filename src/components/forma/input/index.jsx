
const index = ({inputType, inputName, inputId, className, inputPlaceholder}) => {
    return(
    //    <input 
    //    type={inputType} 
    //    name={inputName} 
    //    id={inputId} 
    //    className={className ? className : "bg-blue-300"}
    //    />


       <input
       name={inputName} 
       id={inputId}
       type={inputType}
       placeholder={inputPlaceholder}
       className={className ? className : "px-2 -y-1 rounded"}
   />
    )
}

export default index;

