import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UseForm = (callback, validate) => {
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (evento) => {
        const { value, name } = evento.target;
        console.log(value)
        setFormData({
            ...formData,
            [name]: value
        })

        console.log("aqui caralho", JSON.stringify(formData))
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const { name, cpf, email, password, confirmPassword } = formData
        const URL = `https://paysharedev.herokuapp.com/v1/payshare/auth/signup`
        const data = {
            name,
            cpf,
            age: 21,
            email,
            password
        };

        if (password == confirmPassword) {
            try {
                console.log(data)
                await axios.post(URL, data).then((result) => {
                    console.log(result)
                    return history.push('/login');
                }).catch((err) => {
                    console.log(err)
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            alert("Senha não correspondem")
        }
        setErrors(validate(formData));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );
    
      return { handleChange, handleSubmit, formData, errors };
};

export default UseForm;

