import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '#Unique ID', width: 120 },
  { field: 'empId', headerName: 'Employee ID', width: 130 },
  { field: 'complainer', headerName: 'Complainer', width: 130 }, 
  {
    field: 'address',
    headerName: 'Address',
    type: 'text',
    width: 120,
  },
  { 
    field: 'sector',
    headerName: 'Sector',
    sortable: false,
    width: 160,
  },
  { field: 'actions', headerName: 'Actions', width: 120 },
  { field: 'stage', headerName: 'Stage', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'categoryType', headerName: 'Category Type', width: 120 },
  { field: 'remark', headerName: 'Remark', width: 130 },
  { field: 'date&time', headerName: 'Date & Time', width: 130 },
  { field: 'targetDateTime', headerName: 'Target Date & Time', width: 170 },
  { field: 'vendor', headerName: 'Vendor', width: 130 },
  { field: 'priority', headerName: 'Priority', width: 130 },
];

const rows = [
  { id: 1, empId: '#03-101-2201', complainer: 'Jon', address: 'Noida sector-123' ,sector:'abc',actions:'Pending',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'working on switch Board'},
  { id: 2, empId: '#03-101-2202', complainer: 'Cersei', address: 'Gujarat-phase1 b-lock',sector:110,actions:'Pending',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted' },
  { id: 3, empId: '#03-101-2203', complainer: 'Jaime', address: 'North delhi block A',sector:'19',actions:'Pending',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted' },
  { id: 4, empId: '#03-101-2204', complainer: 'Arya', address: 'Gurgaon sector-9' ,sector:16,actions:'Unassigned',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted'},
  { id: 5, empId: '#03-101-2205', complainer: 'Daenerys', address: 'Delhi-sector-11',sector:11,actions:'Unassigned',stage:'Vendor Visited' ,category:'Plumbing',categoryType:'Wire cut',remark:'Deleted'},
  { id: 6, empId: '#03-101-2206', complainer: null, address: 'Chandigarh-101' ,sector:10,actions:'Unassigned',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted'},
  { id: 7, empId: '#03-101-2207', complainer: 'Ferrara', address: 'A-block sector 110',sector:44,actions:'Assigned',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted' },
  { id: 8, empId: '#03-101-2207', complainer: 'Rossini', address: 'Ahmedabad Gujarat',sector:36,actions:'Assigned',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted' },
  { id: 9, empId: '#03-101-2208', complainer: 'Harvey', address:'Noida block A ',sector:20,actions:'Assigned',stage:'Vendor Visited',category:'Plumbing',categoryType:'Wire cut',remark:'Deleted' },
];

export default function DataTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ minWidth: 700 }} aria-label="customized table"
        // checkboxSelection
      />
    </div>
  );
}
