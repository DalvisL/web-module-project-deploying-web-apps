import React from 'react';
import styled from 'styled-components';

const AddMember = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    position: fixed;
    height: 225px;
    width: 400px;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -112.5px;
    -webkit-box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.5);
    align-items: center;
    button {
        background: none;
        border: none;
        color: darkgray;
        &:hover {
            color: gray;
            cursor: pointer;
        }
    }
    .exit-btn {
        align-self: flex-end;
        color: darkgray;
        margin-right: 20px;
        height: 30px;
        width: 30px;
        margin-top: 20px;
        border: solid darkgray 1px;
        border-radius: 50%;
        &:hover {
            border: solid gray 1px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 80%;
        label{
            font-size: 2rem;;
        }
        button {
            font-size: 2.4rem;
        }
        input {
            margin-left: 10px;
        }
    }
`


export default function Form(props) {
    const {formData, setFormData, teamMembers, setTeamMembers, setModalOpen} = props;
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const memberArr = [...teamMembers];
        memberArr.push(formData);
        console.log(memberArr);
        setTeamMembers(memberArr);
        setFormData({
            name:'',
            email:'',
            role:''
        }
        )
    }
    const handleChange = evt => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    };
  return (
    <div>
        <AddMember>
            <button className='exit-btn' onClick={() => setModalOpen(false)}>X</button>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label>
                    Name 
                    <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={(evt) => handleChange(evt)}
                    />
                </label>
                <label>
                    Email 
                    <input 
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={evt => handleChange(evt)}
                    />
                </label>
                <label>
                    Role 
                    <input 
                    type='text'
                    name='role'
                    placeholder='Role'
                    value={formData.role}
                    onChange={evt => handleChange(evt)}
                    />
                </label>
                <button>Add</button>
            </form>
        </AddMember>
    </div>
  )
}
