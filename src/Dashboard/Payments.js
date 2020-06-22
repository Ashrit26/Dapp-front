import React from 'react';
import Web3 from 'web3';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../config';

class Payments extends React.Component{

  state={
    tasks: [],
    taskCount: 0,
    todoList: {},
    open: false,
  }
divStyle = {
  display: 'flex',
  width: '100%',
};

divStyle1 = {
  width: '100%',
};
  render(){

  return(<div style={this.divStyle1}>
  <div style={this.divStyle}>
                  <Grid item xs={12} md={4} lg={4} spacing={12}>
                  <Paper style={{padding: "5px",margin:"5px",display: "flex",overflow: "auto",flexDirection: "column", height: 240,backgroundColor: "#FFFF2E"}}>
                    <center>
                      <h2>Advance</h2><br/>
                      <h4>Advance for UI</h4>
                      <h5>Rs. 15000</h5>
                    </center>
                  </Paper>
                </Grid>
</div>



</div>);
}
}

export default Payments;
