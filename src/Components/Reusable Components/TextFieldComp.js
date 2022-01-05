import React from 'react'
import { useField ,ErrorMessage } from 'formik'
import TextField from '@mui/material/TextField';


const TextFieldComp = ({label, ...props}) => {
   const [field,meta] = useField(props);

let errVal = meta.touched && meta.error && 'is-invalid' ? true : false
return (
   <>
   
         <div className='mb-2'>
         <TextField
          error={errVal}
          label={label}
          {...field}
          {...props}
        />
           <div style={{"color" : "tomato"}}>
         <ErrorMessage   name={field.name} />
   </div>

        
        </div> 
</>
    )
}

export default TextFieldComp

{/* <label htmlFor={field.name}>{label}</label>
 <label htmlFor={field.name}/> 
 <input 
className='form-control shadow-none' 
autoComplete='off'
{...field} 
{...props}/>   */}