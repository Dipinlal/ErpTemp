import React, { useState } from 'react';
import { Checkbox, Paper, Typography, List, ListItem } from '@mui/material';
import { useTheme } from '../../../../../config/themeContext';

function EnteredEntityList() {
    const [checkedItems, setCheckedItems] = useState({});
    const {currentTheme} = useTheme()

    const users = [
        'Entity1', 'Entity2'
    ];

    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    return (
        <Paper style={{  width: 300, overflowX: 'hidden' }}>
            <Typography  gutterBottom sx={{backgroundColor:currentTheme.thirdColor,color:currentTheme.tableHeaderColor,padding:"2px"}}>
                Entered List
            </Typography>
            <List style={{ maxHeight: 200, overflowY: 'auto', width: '100%', padding: 0,scrollbarWidth:"thin" }}>
                {users.map((user, index) => (
                    <ListItem key={index} style={{ width: '100%', padding: 0,fontSize:"12px" }}>
                        {/* <Checkbox
                            checked={checkedItems[user] || false}
                            onChange={handleChange}
                            name={user}
                            sx={{padding:0,fontSize:"12px"}}
                        /> */}
                        {user}
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default EnteredEntityList;
