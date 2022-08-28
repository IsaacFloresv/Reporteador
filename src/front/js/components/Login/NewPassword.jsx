import React from 'react'



const NewPassword = ({setstage}) => {

    const handleChange = ({target}) => {
        setLogin({
            ...login,
            [target.name]: target.value
        });
    };
    
   

    useEffect(() => {
        if (isSubmitting) 
            navigate("/dashboard");
        }, [isSubmitting]);

  return (
    <div>NewPassword</div>
  )
}

export default NewPassword