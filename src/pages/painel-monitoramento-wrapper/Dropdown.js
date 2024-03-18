import React from "react";

import { makeStyles,useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const useStyles = makeStyles((theme) => ({
  formControl: {
    "& .MuiInputBase-root": {
      color: "#fed200",
      borderColor: "#fed200",
      borderWidth: "2px", 
      borderStyle: "solid",
      borderRadius: "100px",
      minWidth: "200px",
      justifyContent: "center",
      width: '100%', 
      [theme.breakpoints.down('sm')]: {
        minWidth: "180px",
      },
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingLeft: '10px', 
    },
    "&.Mui-disabled": {
      "& .MuiInputBase-root": {
        borderColor: "grey", // substitua isso pela cor desejada
        color: "grey", // substitua isso pela cor desejada
        
      }}
  },
  select: {
    width: "auto",
    fontSize: "15px",
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  selectIcon: {
    position: "absolute", 
    color: "#fed200",
    fontSize: "25px",
    right: '5px', 
   
    
  },
  paper: {
    borderRadius: 12,
    marginTop: 8
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: "12px"
    },
    "& li.Mui-selected": {
      color: "white",
      background: "#fed200"
    },
    "& li.Mui-selected:hover": {
      background: "#fed200"
    }
  }
}));

const DropDown = ({ value, handleChange, items, data, dropDownValue }) => {
  const classes = useStyles();
  const isDisabled = dropDownValue === 1;

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    getContentAnchorEl: null
  };

 return (
    <FormControl className={`${classes.formControl} ${isDisabled ? "Mui-disabled" : ""}`}>
      <Select
        value={value}
        onChange={handleChange}
        disableUnderline
        IconComponent={ExpandMoreRoundedIcon}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon
        }}
        disabled={isDisabled} // Disable the Select component if dropDownValue is 1
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.value} 
          disabled={item.disabled ? item.disabled(data) : false}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;