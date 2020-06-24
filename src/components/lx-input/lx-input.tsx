import React,{ Component } from "react";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "./lx-input.less";
interface LxInputProps {
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    password?: boolean;
    onChange?: Function;
}

class LxInput extends Component<LxInputProps> {
    constructor(props: LxInputProps) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
       if (this.props.onChange) {
        this.props.onChange(e)
       }
    }

    render() {
        const {placeholder, password, value} = this.props;
        let input;
        if (password) {
            input = <Input.Password onChange={this.handleChange} value={value} placeholder={placeholder} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
        } else {
            input = <Input onChange={this.handleChange} value={value} placeholder={placeholder} />
        }
        return (
            <div className="lx-input-box-wrapper">
                { input }
            </div>
        )
    }
}

export default LxInput