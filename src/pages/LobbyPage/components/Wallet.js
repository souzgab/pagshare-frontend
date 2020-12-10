import React, { useState, useEffect } from 'react';

import Input from '@material-ui/core/Input';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


async function findByUser() {
    const URL = `https://paysharedev.herokuapp.com/v1/payshare/user/${localStorage.getItem('id')}`
    //setando auth bearer
    const config = {
      headers: { Authorization: localStorage.getItem('token').replace(/['"]+/g, '') }
    };
    try {
      const data = await axios.get(URL, config).then((result) => {
        if (result.status === 200) {
          return result.data
        }
      }).catch((err) => {
        console.log(err)
      })
      return data
    } catch (e) {
      console.log(e)
    }
}
  


export function Wallet(props) {
    const [dinheiro, setDinheiro] = useState("0,00");

    async function loadDatas() {
        const data = await findByUser();
        setDinheiro(data.userAmount.toFixed(2));
    }

    const [money, setMoney] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setMoney({ ...money, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    if (!money.showPassword) {
        loadDatas();
    }
        setMoney({ ...money, showPassword: !money.showPassword });
    }

    return(
        <div>
            <Input
                disabled
                style={{ backgroundColor: 'transparent', color: '#ffff', fontSize: '20px', fontFamily: 'roboto', border: 'none' }}
                id="standard-adornment-password"
                type={money.showPassword ? 'text' : 'password'}
                value={`R$ ${dinheiro}`}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    style={{ color: '#ffff' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    >
                    {money.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />
        </div>
    );
}

export default Wallet;