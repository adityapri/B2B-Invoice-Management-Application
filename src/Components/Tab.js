import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import  { useEffect, useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { getData } from '../Sevice/data';
import { DataGrid, gridColumnsSelector, unstable_resetCleanupTracking } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { visuallyHidden } from '@mui/material/utils';
import Modal from '@mui/material/Modal';
import { bgcolor } from '@mui/system';



// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }
//  const rows = [ 
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
//  ];
const useStyle=makeStyles({
  tabul:{
    backgroundColor:'#283E4C',
  }
})
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding:'10px',
  p: 4,
};
const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding:'10px',
  p: 4,
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'sl_no',
    numeric: true,
    disablePadding: false,
    label: 'sl_no',
  },
  {
    id: 'b_code',
    numeric: false,
    disablePadding: true,
    label: 'b_code',
  },
  {
    id: 'Cust_number',
    numeric: true,
    disablePadding: false,
    label: 'Cust_number',
  },
  {
    id: 'Clear_date',
    numeric: true,
    disablePadding: false,
    label: 'Clear_date',
  },
  {
    id: 'Bussiness_year',
    numeric: true,
    disablePadding: false,
    label: 'Bussiness_year',
  },
  {
    id: 'Doc_id',
    numeric: true,
    disablePadding: false,
    label: 'Doc_id',
  },
  {
    id: 'Posting_date',
    numeric: true,
    disablePadding: false,
    label: 'Posting_date',
  },
  {
    id: 'Document_create_date',
    numeric: true,
    disablePadding: false,
    label: 'Document_create_date',
  },
  {
    id: 'Due_in_date',
    numeric: true,
    disablePadding: false,
    label: 'Due_in_date',
  },
  {
    id: 'Invoice_currency',
    numeric: true,
    disablePadding: false,
    label: 'Invoice_currency',
  },
  {
    id: 'Document_type',
    numeric: true,
    disablePadding: false,
    label: 'Document_type',
  },
  {
    id: 'Posting_id',
    numeric: true,
    disablePadding: false,
    label: 'Posting_id',
  },{
    id: 'Total_open_amount',
    numeric: true,
    disablePadding: false,
    label: 'Total_open_amount',
  },{
    id: 'Baseline_create_date',
    numeric: true,
    disablePadding: false,
    label: 'Baseline_create_date',
  },{
    id: 'Invoice_id',
    numeric: true,
    disablePadding: false,
    label: 'Invoice_id',
  },{
    id: 'Aging_bucket',
    numeric: true,
    disablePadding: false,
    label: 'Aging_bucket',
  },
  {
    id: 'Cust_payment_terms',
    numeric: true,
    disablePadding: false,
    label: 'Customer Payment terms',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'arialabel': 'select all desserts',
            }}
          />
        </TableCell >
        {headCells.map((headCell) => (
          <TableCell
          sx={{color:'white'}}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span"  >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 ),
        color:'white'
      }}
      
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          
        </Typography>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Tab() {


  const [data,setData]=useState([]);
  useEffect(()=>{
    async function gData()
    {
        setData(await getData());
        
    }
    gData();

  },[]);
  const classes=useStyle();
  const [addInvoiceId,setaddInvoiceId]=useState('');
  const [addCustTerms,setaddCustTerms]=useState('');
  const [addBase,setaddBase]=useState('');
  const [addTotal,setaddTotal]=useState(0);
  const [addPostingId,setaddPostingId]=useState('');
  const [addDoctype,setaddDoctype]=useState('');
  const [addCurr,setaddCurr]=useState('');
  const [addDue,setaddDue]=useState('');
  const [addDcd,setaddDcd]=useState('');
  const [addPosting,setaddPosting]=useState('');
  const [addDocid,setaddDocid]=useState('');
  const [addBussYear,setaddBussYear]=useState('');
  const [addCdate,setaddCdate]=useState('');
  const [addCust,setaddCust]=useState('');
  const [addBuss,setaddBuss]=useState('');
  const [editCurr,setEditCurr]=useState('');
  const [editCust,setEditCust]=useState('');
  const [open, setOpen] = React.useState(false);
  const [openb, setOpenb] = React.useState(false);
  const [openc, setOpenc] = React.useState(false);
  const [opend,setOpend]=useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenb=()=>setOpenb(true);
  const handleOpenc=()=>setOpenc(true);
  const handleOpend=()=>setOpend(true);
  const handleClose = () => setOpen(false);
  const handleCloseb = () => setOpenb(false);
  const handleClosec = () => setOpenc(false);
  const handleClosed = () => setOpend(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search,setSearch]=React.useState('');
  const handleAdd=()=>{
    const rst={'b_code':addBuss,
      'Cust_number':addCust,
    'sl_no':data.length+1};
   // const newData=[...sea(data),rst];
    const newInput={Aging_bucket: "null",
    Area_bussiness: "",
    Baseline_create_date: String(addBase),
    Bussiness_year: String(addBussYear),
    Clear_date: String(addCdate),
    Cust_number: String(addCust),
    Cust_payment_terms: String(addCustTerms),
    Doc_id: String(addDocid),
    Document_create_date: String(addDcd),
    Document_create_date1: String(addDcd),
    Document_type: String(addDoctype),
    Due_in_date: String(addDue),
    Invoice_currency: String(addCurr),
    Invoice_id: String(addInvoiceId),
    IsOpen: "0",
    Is_deleted: "0",
    Posting_date: String(addPosting),
    Posting_id: String(addPostingId),
    Total_open_amount: (addTotal),
    b_code: String(addBuss),
    sl_no: data.length+1}
    //console.log(newData);
    //console.log(search+" is null");
    
    setData([...data,newInput]);
    
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleEdit=()=>{
    console.log("In Edit");
    for(let i=0;i<selected.length;i++){
    let index=parseInt(selected)-1;
    data[index].Invoice_currency=editCurr;
      data[index].Cust_payment_terms=editCust;
    }
    setSelected([]);
  }
  function refreshPage() {
    window.location.reload(false);
  }

  const handleDelete=()=>{
    const result=data.filter((row)=>{
      return !(selected.includes( row.sl_no));
    })
    setData(result);
    //console.log(results);
  }
  const buttons = [
    
    <Button key="one" style={{minWidth:'250px',color:'white'}} sx={{ bgcolor: 'primary.main' }}>Predict</Button>,
    <Button key="two" style={{minWidth:'250px',color:'white'}}>Analytics View</Button>,
    <Button key="three" style={{minWidth:'250px',color:'white'}} onClick={handleOpend}> Advance Search</Button>,
    <Button key="one" style={{minWidth:'5px',color:'white'}}><ReplayIcon onClick={refreshPage}/></Button>
  ];
  const buttons2 = [
    <Button key="add"  style={{minWidth:'250px',color:'white'}} onClick={handleOpenc} >Add</Button>,
    <Button key="edit" style={{minWidth:'250px',color:'white'}} onClick={handleOpenb} >Edit</Button>,
    <Button key="delete" startIcon={<DeleteIcon />} style={{minWidth:'250px',color:'white'}} onClick={handleOpen} >Delete</Button>,
  ];
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = sea(data).map((row) => row.sl_no);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, sl_no) => {
    const selectedIndex = selected.indexOf(sl_no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sl_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    console.log(newSelected);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sea(data).length) : 0;
  function sea(data)
  {
    return data.filter((row)=>{return row.Cust_number.indexOf(search)>-1})
  }
 const handleAdvSearch=()=>{
     const arr=data.filter((row)=>{return (row.Doc_id.indexOf(addDocid)>-1)&&(row.Invoice_id.indexOf(addInvoiceId)>-1)&&(row.Cust_number.indexOf(addCust)>-1)&&(row.Bussiness_year.indexOf(addBussYear)>-1)});
     setData(arr);
  }
  return (<>

  <Box  
      sx={{
        display: 'flex',
        //bgcolor:'blue',
        paddingLeft: '30px',
        paddingRight: '30px',
        padding:'10px',
        width:1 ,
        flexDirection: 'row',
        justifyContent:'space-between',
        '& > *': {
          m: 1,
        },
        maxWidth:'false',
      }}
    >
      <ButtonGroup size="large" aria-label="large button group" sx={{//flexGrow:8,
      //bgcolor:'pink',
      }}>
        <div className='container'>  {buttons}</div>
      
      </ButtonGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Delete?</h3>
          <p>Are you sure you want to delete these record[s]</p>
          <div style={{display:'flex',justifyContent:'space-evenly'}} className="container">
            <button onClick={handleClose} style={{width:'50%'}} className="btn">Cancel</button> 
            <button style={{width:'50%'}} className="btn" onClick={()=>{handleDelete();
            handleClose();
            setSelected([]);}}>Delete</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openb}
        onClose={handleCloseb}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Edit?</h3>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" onChange={(event)=>{
            setEditCurr(event.target.value)
          }}/>
          <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined"  onChange={(event)=>{
            setEditCust(event.target.value)
          }} />
          </div>
              <br />
          <div style={{display:'flex',justifyContent:'space-evenly'}} className="container" >
            <button  style={{width:'50%'}} className="btn" onClick={()=>{
              handleEdit();
              handleCloseb();
            }}>Edit</button> 
            <button style={{width:'50%'}} className="btn" onClick={handleCloseb} >Cancel</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Delete?</h3>
          <p>Are you sure you want to delete these record[s]</p>
          <div style={{display:'flex',justifyContent:'space-evenly'}} className="container">
            <button onClick={handleClose} style={{width:'50%'}} className="btn">Cancel</button> 
            <button style={{width:'50%'}} className="btn" onClick={()=>{handleDelete();
            handleClose();
            setSelected([]);}}>Delete</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={opend}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>ADVANCED SEARCH</h3>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Document ID" variant="outlined" onChange={(event)=>{
            setaddDocid(event.target.value)
          }}/>
          <TextField id="outlined-basic" label="Invoice ID" variant="outlined"  onChange={(event)=>{
            setaddInvoiceId(event.target.value)
          }} />
          </div>
              <br />
              <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Customer Number" variant="outlined" onChange={(event)=>{
            setaddCust(event.target.value)
          }}/>
          <TextField id="outlined-basic" label="Bussiness Year" variant="outlined"  onChange={(event)=>{
            setaddBussYear(event.target.value)
          }} />
          </div>
          <br />
          <div style={{display:'flex',justifyContent:'space-evenly'}} className="container" >
            <button  style={{width:'50%'}} className="btn" onClick={handleAdvSearch} >Search</button> 
            <button style={{width:'50%'}} className="btn" onClick={handleClosed} >Cancel</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openc}
        onClose={handleClosec}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <h3 >ADD</h3>
          <div style={{display:'flex',justifyContent:'space-between'}} >
          <TextField id="outlined-basic" label="Bussiness Code" variant="outlined" onChange={(event)=>{
            setaddBuss(event.target.value);
          }} sx={{widht:'100px',padding:'10px'}}/>
          <TextField id="outlined-basic" label="Customer Number" variant="outlined"  onChange={(event)=>{
            setaddCust(event.target.value);
          }} sx={{widht:'100px',padding:'10px'}}/>
           <TextField id="outlined-basic" label="Clear Date"
        InputLabelProps={{ shrink: true }} type="date" variant="outlined"  onChange={(event)=>{
          setaddCdate(event.target.value);
        }} sx={{widht:'100px',padding:'10px'}}/>
            <TextField id="outlined-basic" label="Bussiness Year"  variant="outlined" onChange={(event)=>{
              setaddBussYear(event.target.value);
            }} sx={{widht:'100px',padding:'10px'}}/>
          </div>
          <br />
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Document ID" variant="outlined" onChange={(event)=>{
            setaddDocid(event.target.value);
          }} sx={{widht:'100px',padding:'10px'}}/>
           <TextField id="outlined-basic" label="Posting Date"
        InputLabelProps={{ shrink: true }} type="date" variant="outlined"  onChange={(event)=>{
          setaddPosting(event.target.value);
        }} sx={{widht:'100px',padding:'10px'}}/>
            <TextField id="outlined-basic" label="Document Create Date"
        InputLabelProps={{ shrink: true }} type="date" variant="outlined"  onChange={(event)=>{
          setaddDcd(event.target.value);
        }} sx={{widht:'100px',padding:'10px'}}/>
            <TextField id="outlined-basic" label="Due Date"
        InputLabelProps={{ shrink: true }} type="date" variant="outlined"  onChange={(event)=>{
          setaddDue(event.target.value);
        }} sx={{widht:'100px',padding:'10px'}}/>
            
          </div>
          <br />
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Invoice Currency" variant="outlined" onChange={(event)=>{
            setaddCurr(event.target.value);
          }} sx={{widht:'100px',padding:'10px'}}/>
          <TextField id="outlined-basic" label="Document Type" variant="outlined"  onChange={(event)=>{
            setaddDoctype(event.target.value);
          }}sx={{widht:'100px',padding:'10px'}}/>
           <TextField id="outlined-basic" label="Posting Id" variant="outlined"  onChange={(event)=>{
             setaddPostingId(event.target.value);
           }}sx={{widht:'100px',padding:'10px'}}/>
            <TextField id="outlined-basic" label="Total Open Amount"  variant="outlined"  onChange={(event)=>{
              setaddTotal(event.target.value);
            }}sx={{widht:'100px',padding:'10px'}}/>
          </div>
          <br />
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="BaseLine Create Date"
        InputLabelProps={{ shrink: true }} type="date" variant="outlined"  onChange={(event)=>{
          setaddBase(event.target.value);
        }} sx={{widht:'100px',padding:'10px'}}/>
         
           <TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" onChange={(event)=>{
             setaddCustTerms(event.target.value);
           }} sx={{widht:'100px',padding:'10px'}}/>
            <TextField id="outlined-basic" label="Invoice ID"  variant="outlined" onChange={(event)=>{
              setaddInvoiceId(event.target.value);
            }} sx={{widht:'100px',padding:'10px'}}/>
            <div style={{widht:'100px',padding:'10px'}}></div>
          </div>
          <div style={{display:'flex',justifyContent:'space-evenly'}} className="container">
            <button  style={{width:'50%',border:'1px solid white'}} className="btn" onClick={()=>{handleAdd();
            handleClosec();}}>ADD</button> 
            <button style={{width:'50%'}} className="btn" onClick={handleClosec}>CANCEL</button>
          </div>
        </Box>
      </Modal>
      <TextField id="filled-basic" label="Search Customer Id" variant="outlined" sx={{border:'error.main',bgcolor:'white'}} onChange={(e)=>{setSearch(e.target.value);}}/>
      <ButtonGroup size="large" aria-label="large button group" sx={
        {
          //width:'100%',
        }
      } >
        <div className='container'>{buttons2}</div>
      </ButtonGroup>
    </Box>
    
    <Box sx={{ width: '100%' ,bgcolor:"#2C4250"}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer className={classes.tabul}>
          <Table
          className={classes.tabul}
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={sea(data).length}
            />
            <TableBody >
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(sea(data), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.sl_no);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.sl_no)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.sl_no}
                      selected={isItemSelected}
                      
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                        align='right'
                        sx={{color:'white'}}
                      >
                        {row.sl_no}
                      </TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.b_code}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Cust_number}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Clear_date}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Bussiness_year}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Doc_id}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Posting_date}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Document_create_date}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Due_in_date}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Invoice_currency}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Document_type}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Posting_id}</TableCell>
                      <TableCell align="right"sx={{color:'white'}}>{row.Total_open_amount}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Baseline_create_date}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Invoice_id}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Aging_bucket}</TableCell>
                      <TableCell align="right" sx={{color:'white'}}>{row.Cust_payment_terms}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.tabul}
          sx={{color:'white'}}
          rowsPerPageOptions={[10,15,25]}
          component="div"
          count={sea(data).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    </>
  );
}