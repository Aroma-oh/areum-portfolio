import { FaAddressCard, FaPhoneAlt, FaSchool } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';


export const PROFILE = [
  {
    icon: <FaAddressCard />,
    type: 'NAME',
    content: '오아름',
  },
  {
    icon: <FaPhoneAlt />,
    type: 'PHONE',
    content: '-',
  },
  {
    icon: <MdMarkEmailUnread />,
    type: 'EMAIL',
    content: '-',
  },
  {
    icon: <FaSchool />,
    type: 'BOOTCAMP',
    content: '코드스테이츠 43기',
  },
];