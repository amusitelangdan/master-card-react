import React, { Component } from "react";
import "./Login.less";
import bg from "../../assets/images/login-bg.png";
import logo from "../../assets/images/login-logo.png";
import { Button } from 'antd';
import LxInput from "../../components/lx-input/lx-input";
import { JSEncrypt }  from "jsencrypt";
import { publicKey, getCaptcha, LoginParams, userLogin } from '../../api/login.service'
interface LoginState {
    username: string;
    password: string;
    publicKey: string;
    captcha: string;
    captchaValue: string;
}

interface CaptchaInterface {
    code: string;
    token: string;
}

class Login extends Component<any, LoginState> {
    encrypt: any;
    captcha: CaptchaInterface = {
        code: '',
        token: '',
    }
    constructor(props: any) {
        super(props);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getCaptcha = this.getCaptcha.bind(this);
        this.handleChangeCaptcha = this.handleChangeCaptcha.bind(this);
    }
    state: LoginState = {
        username: '',
        password: '',
        publicKey: '',
        captcha: '',
        captchaValue: '',
    }

    handleChangeUserName(e: any) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e: any) {
        this.setState({
            password: e.target.value
        })
    }

    handleChangeCaptcha(e: any) {
        this.setState({
            captchaValue: e.target.value
        })
    }

    userLogin() {
        let encrypted = this.encrypt.encrypt(this.state.password)
        let data: LoginParams = {
            password: encrypted,
            username: this.state.username,
            captcha: this.state.captchaValue,
            token: this.captcha.token
        }
        userLogin(data).then((res: any) => {
            console.log(res);
            if (res.status === 1) {
                sessionStorage.setItem('userInfo', JSON.stringify(res.user))
                this.props.history.replace('/')
            }
        })
    }

    handleLogin() {
        if (this.state.username && this.state.password && this.state.captchaValue) {
            this.userLogin()
        }
    }

    getCaptcha() {
        getCaptcha().then((res: any) => {
            if (res.status === 1) {
                this.setState({
                    captcha: `data:image/jpg;base64,${res.image}`
                })
                this.captcha.code = res.code;
                this.captcha.token = res.token;
            }
        }) 
    }

    componentDidMount() {
        publicKey().then((res: any) => {
            if (res.status === 1) {
                this.encrypt = new JSEncrypt();
                this.encrypt.setPublicKey(res.public)
                this.setState({
                    publicKey: res.public
                })
            }
        })
        this.getCaptcha()
    }

    render() {
        const { username, password, captcha, captchaValue } = this.state
        return (
            <div className="login-box-wrapper">
                <img src={bg} className="bg-image" alt="" />
                <div className="login-card">
                    <img src={logo} className="login-logo-image" alt="" />
                    <div className="login-dialog">
                        <div className="login-title">登录</div>
                        <div className="login-content">
                            <LxInput placeholder="请输入手机号或用户名" value={username} onChange={this.handleChangeUserName} />
                            <div className="input-box">
                                <LxInput password placeholder="请输入密码" value={password} onChange={this.handleChangePassword} />
                            </div>
                            <div className="input-box">
                                <LxInput placeholder="请输入验证码" value={captchaValue} onChange={this.handleChangeCaptcha}/>
                                <img className="captcha-image" onClick={this.getCaptcha} src={captcha} alt=""/>
                            </div>
                            <Button className="login-button" type="primary" shape="round" size="middle" onClick={this.handleLogin} danger>登录</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login