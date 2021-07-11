import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [loading, setLoading] = useState(false);


    const handleLogin = (data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        console.log(data)
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="text-center heading">
                        <h4>School Management System</h4>
                        <p>Login to the System</p>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                            <label>User Name</label>
                            <Input
                                {...register("userName", { required: true })}
                                placeholder="Enter User Name"></Input>
                            {errors.userName?.type === 'required' &&
                                <label className="validation-error mb-0">User Name is Required</label>
                            }
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <Input.Password
                                placeholder="input password"
                                {...register("userPassword", { required: true })}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            {errors.userPassword?.type === 'required' &&
                                <label className="validation-error mb-0">Password is Required</label>
                            }
                        </div>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-login"
                            loading={loading}

                        >{!loading ? 'Login' : ''}</Button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/auth/forgot-password">Forgot Password ?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login
