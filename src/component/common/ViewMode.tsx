// mui import
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// recoil import
import { useRecoilState } from 'recoil';
import { viewModeState } from '@/recoil/atoms';


export const ViewMode = () => {
  const [viewMode, setViewMode] = useRecoilState(viewModeState);
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
