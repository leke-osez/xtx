import React from "react";
import "./paymentsTable.css";
import Input, { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PaymentsTable = () => {
  return (
    <div className="payments__data-table">
      <div className="payments__data-table_header">
        {/* SEARCH BAR */}
        <Box display="flex" borderRadius="3px">
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Search by Reference id"
          />
        </Box>

        {/* REFRESH AND DOWNLOAD BUTTON */}
        <div className="payments__data-table_header-buttons">
          <div>
            <p>Refresh Table</p>
          </div>

          <div>
            <p>Download</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentsTable;
