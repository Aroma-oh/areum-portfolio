// react, styled import 
import { useState } from 'react'
// mui import
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


export const ViewMode = () => {
  const [viewMode, setViewMode] = useState('10');
  const handleChange = (event: SelectChangeEvent) => {
    setViewMode(event.target.value as string);
  };

  return (

    <FormControl>
      <Select
        sx={{
          width: '150px', height: '45px'
        }}
        value={viewMode}
        onChange={handleChange}
      >
        <MenuItem value={10}>가로 보기</MenuItem>
        <MenuItem value={20}>세로 보기</MenuItem>
      </Select>
    </FormControl>

  )
}
