import React from 'react'
import {useFormik} from 'formik'

const initialValues ={
    name:'',
    email:'',
    channel:''
}
const onSubmit = values=>{
           
    console.log('formdata' , values);
}
let errName = false;
let errMail = false;
let errChannel = false;
let globalErr = false
const validate = values=>{
    let errors={}
    if(values.name === ''){
        errors.name='Required'
        errName = false
    } else{
        errName = true
    }

    if(values.email === ''){
        errors.email='Required'
        errMail = false
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
        errors.email = 'Invalid email  format'
        errMail = false
    } else{
        errMail = true
    }

    if(values.channel === ''){
        errors.channel='Required'
        errChannel = false
    }
    else{
        errChannel = true
    }

    if( errName === true && errMail === true && errChannel === true){
        globalErr = true
    }
    else{
        globalErr = false
    }
}
const Form1 = () => {
    const formik = useFormik({ initialValues,onSubmit,validate  })

  
    return (
       <form onSubmit={formik.handleSubmit} validate>
               <div className="form-control">
               <label htmlFor='name'>Name</label>
               <input 
               onBlur={formik.handleBlur}
               type='text' 
               id='name' 
               name='name'  
               onChange={formik.handleChange} 
               value={formik.values.name}/>


               {formik.errors.name ?( <div className='error' style={{"color": "red"}}>{formik.errors.name}</div>): null}


               </div>
               <label htmlFor='email'>Email</label>
               <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
   
   {formik.errors.email ? <div>{formik.errors.email}</div>: null}
               <label htmlFor='channel'>Channel</label>
               <input 
               type='text' 
               id='channel'
               name='channel' 
               onChange={formik.handleChange} 
               value={formik.values.channel}/>

{formik.errors.channel ? (<div>{formik.errors.channel}</div>): null}


<div>{globalErr === true ?  (<button type='submit' >Submit</button>) :  (<button type='submit' disabled >Submit</button>) }</div>
    </form>
    )
}

export default Form1
