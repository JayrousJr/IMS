import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import {
    DataGrid,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";
function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            {/* <GridToolbarDensitySelector
                slotProps={{ tooltip: { title: "Change density" } }}
            /> */}
            <Box sx={{ flexGrow: 1 }} />
            {/* <GridToolbarExport
                slotProps={{
                    tooltip: { title: "Export data" },
                    button: { variant: "outlined" },
                }}
            /> */}
        </GridToolbarContainer>
    );
}
const TableGridComponent = ({ rows, columns }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m="10px 0 0 0"
            height="65vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "1",
                },
                "& .name-column--cell": {
                    color: colors.grey[100],
                },
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: colors.grey[800],
                    borderBottom: "1",
                },
                "& .MuiDataGrid-virtualScroller": {
                    // backgroundColor: colors.grey[700],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "1",
                    backgroundColor: colors.grey[800],
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
                overflowX: "none",
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                autoHeight
                slots={{
                    toolbar: CustomToolbar,
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default TableGridComponent;
