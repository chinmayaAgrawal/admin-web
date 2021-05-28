import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin';
 const UserList = (props) => {
    return (
        <List {...props}>

            <Datagrid>
                <TextField source='id'/>
                <TextField source='name' />
                <EmailField source='email' />
                <DateField source='joined on'/>
                <EditButton basePath='/user' />
                <DeleteButton basePath='/user' />
                
            </Datagrid>

        </List>
    )
}
export default UserList;