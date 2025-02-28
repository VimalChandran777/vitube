import React from 'react'
import {Stack} from '@mui/material'
import { Link } from "react-router-dom";

import {logo} from '../utils/constants'
import SearchBar from './SearchBar';


export default function Navbar() {
  return (
    <div>
      <Stack direction='row' alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }} >
        <Link to='/' style={{display:'flex',alignItems:'center'}} >
          <img src={logo} height={45} alt='logo' />
        </Link>
       <SearchBar />
      </Stack>
    </div>
  )
}
