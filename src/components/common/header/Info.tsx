/* eslint-disable arrow-body-style */
import { MenuItem, TextField } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook, FaInstagram, FaPhone, FaTwitter,
} from "react-icons/fa";

const HeaderInfo = () => {
  return (
    <div className="hidden lg:flex justify-between items-center bg-[#FFFFFF] px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <span>Kigali 452 st</span>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone />
          <span>+250782443651</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <TextField select size="small" value="RWF">
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="RWF">RWF</MenuItem>
        </TextField>
        <TextField select size="small" value="rwanda">
          <MenuItem value="rwanda"> Rwanda</MenuItem>
          <MenuItem value="tanzania"> Tanzania</MenuItem>
          <MenuItem value="kenya"> Kenya</MenuItem>
          <MenuItem value="burundi"> Burundi</MenuItem>
        </TextField>
        <div className="flex items-center gap-1">
          <FaFacebook className="text-[28px]" />
          <FaTwitter className="text-[28px]" />
          <FaInstagram className="text-[28px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
