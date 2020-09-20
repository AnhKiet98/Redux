import React, { Component } from 'react'

export default class BaiTapGetDataSinhVien extends Component {
    state = {

        values: {
            maSinhVien: '',
            tenSinhVien: '',
            emailSinhVien: '',
            sdtSinhVien: '',
        },

        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            emailSinhVien: '',
            sdtSinhVien: '',
        }


    }
    handleChangeInput = (event) => {

        let { value, name } = event.target;
        let type = event.target.getAttribute('type_');
        let newValues = { ...this.state.values };
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} Khong dc bo trong` : '' };

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (type === 'emailSinhVien') {
            
            if (!regexEmail.test(value)) {
                console.log(regexEmail.test(value));
                newErrors[name] = 'Email khong hop le'
            }
        }
        newValues = {
            ...newValues,
            [name]: value
        }

        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <form classname="container-fluid m-auto m-2">
                    <div className="card text-left">
                        <div className="row m-2">

                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã SV</p>
                                    <input name="maSinhVien" className="form-control" onChange={this.handleChangeInput}></input>
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="emailSinhVien" name="emailSinhVien" className="form-control" onChange={this.handleChangeInput}></input>
                                    <p className="text-danger">{this.state.errors.emailSinhVien}</p>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input name="tenSinhVien" className="form-control" onChange={this.handleChangeInput}></input>
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input name="sdtSinhVien" className="form-control" onChange={this.handleChangeInput}></input>
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
