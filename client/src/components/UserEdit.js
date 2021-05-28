import React from 'react';
import {Edit,SimpleForm,TextInput,DateInput} from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm >
                <TextInput disabled source="id"/>
                <TextInput source="name"/>
                <TextInput source="email" />
                <TextInput multiline source="body" />
                <DateInput lable="Joined" source="joinedOn" />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;
