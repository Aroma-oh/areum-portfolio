// mui import
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// recoil import
import { useRecoilState } from 'recoil';
import { isHorizontalState } from '@/recoil/atoms';


export const ViewMode = () => {
  const [isHorizon, setIsHorizon] = useRecoilState(isHorizontalState);

  return (
    <FormControl>
      <Select
        sx={{
          width: '150px', height: '45px'
        }}
        value={isHorizon ? 'horizon' : 'horizontal'}
      >
        <MenuItem value="horizon" onClick={() => setIsHorizon(true)}>가로 보기</MenuItem>
        <MenuItem value="horizontal" onClick={() => setIsHorizon(false)}>세로 보기</MenuItem>
      </Select>
    </FormControl>
  )
}
