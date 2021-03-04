import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function ProfileTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square id='square'>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Віддам" />
        <Tab label="Обміняю" />
        <Tab label='Не опубліковані'/>
        <Tab label="Комментарі" />
        <Tab label="Історія"/>
      </Tabs>
    </Paper>
  );
}