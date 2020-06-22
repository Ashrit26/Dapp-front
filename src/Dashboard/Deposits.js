import React from 'react';
import Web3 from 'web3'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../config'

class Deposits extends React.Component{

  state={
    tasks: [],
    taskCount: 0,
    todoList: {}
  }



  render(){

  return (
    <React.Fragment>
      <div className="profilePic">
        <AccountCircleIcon />
      </div>
    </React.Fragment>
  );
  }
}

export default Deposits;
