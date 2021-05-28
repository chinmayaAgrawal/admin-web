import React from 'react';
import {Create,SimpleForm,TextInput,DateInput} from 'react-admin';

 const UserCreate = (props) => {
    return (
        <Create title='Create new User' {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source='email' />
                <TextInput multiline source="body" />
                <DateInput lable="Published" source="publishedAt" />
            </SimpleForm>
        </Create>
    )
}
export default UserCreate;
