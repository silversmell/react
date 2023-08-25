import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 id='signup_title'> ȸ������ (Signup) </h3>
                </div>
                <div className='Signup'>
                    <div>
                        {/* ���̵� */}
                        <div>
                            <h5> ���̵� </h5>
                            <input type='text' maxLength='20' name='signup_id' />
                        </div>

                        {/* ��й�ȣ */}
                        <div>
                            <h5> ��й�ȣ </h5>
                            <input type='password' maxLength='15' name='signup_password' />
                        </div>

                        {/* ��й�ȣ */}
                        <div>
                            <h5> ��й�ȣ Ȯ�� </h5>
                            <input type='password' maxLength='15' name='signup_pswCheck' />
                        </div>
                    </div>

                    <div id='signup_section'>
                        {/* �̸� */}
                        <div>
                            <h5> �̸� </h5>
                            <input type='text' maxLength='10' name='signup_name' />
                        </div>

                        {/* ������� */}
                        <div>
                            <h5> ������� </h5>
                            <input type='text' maxLength='6' name='signup_birthday' /> -
                            <input type='text' maxLength='1' name='signup_sex' /> ******
                        </div>

                        {/* ������� */}
                        <div>
                            <h5> �̸��� </h5>
                            <input type='text' maxLength='15' name='signup_email' /> @
                            <select name='signup_email_select'>
                                <option value='gmail.com'> gmail.com </option>
                                <option value='naver.com'> naver.com </option>
                                <option value='write'> ���� �Է� </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <input type='button' value='�����ϱ�' name='sigunup_submit' />
                </div>
            </div>
   
)}
}