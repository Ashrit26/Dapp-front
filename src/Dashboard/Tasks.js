import React from 'react';
import Web3 from 'web3';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../config';

class Tasks extends React.Component{

  state={
    tasks: [],
    taskCount: 0,
    todoList: {},
    open: false,
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
/*     this.loadBlockchainData1 = this.loadBlockchainData1.bind(this); */
 }
  
componentDidMount() {
  console.log("uday");
   this.handleLoad();
  console.log("aditya");
  this.loadBlockchainData();
/*   this.loadBlockchainData1(); */
}

async loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  console.log(web3);
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
  this.setState({ todoList })
  console.log(todoList);
  const taskCount = await todoList.methods.tasksCount().call()
  console.log(taskCount)
  this.setState({ taskCount })
  console.log(this.state.taskCount); 
  for (var i = 1; i <= taskCount; i++) {
    const task = await todoList.methods.tasks(i).call()
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  console.log(this.state.tasks, typeof(this.state.tasks[0]));
  this.setState({open: true});
  console.log(this.state.open);
}

/* async loadBlockchainData1() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  console.log(web3);
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
  this.setState({ todoList })
  console.log(todoList);
  todoList.deployed().then(function(instance) {
    return instance.addTask("taska","taskb","taskc","taskd", { from: accounts[0] });
  }).then(function(result) {
    // Wait for votes to update
    console.log("added");
  }).catch(function(err) {
    console.error(err);
  });
} */

async handleLoad() {
  console.log("uday");
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    console.log("uday");
    try {
        // Request account access if needed
        window.ethereum.enable();
        var firstAcc = await window.web3.eth.getAccounts();
        console.log(firstAcc);
        // Acccounts now exposed
    } catch (error) {
        // User denied account access...
    }
}
// Legacy dapp browsers...
else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    // Acccounts always exposed
    var accs = window.web3.eth.getAccounts();
    console.log(accs);
}
// Non-dapp browsers...
else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}
}

divStyle = {
  display: 'flex',
  width: '100%',
};

divStyle1 = {
  width: '100%',
};
  render(){

  return(<div style={this.divStyle1}>{this.state.open === true &&
  <div style={this.divStyle}>
{this.state.tasks.map((task, index) => (
                  <Grid item xs={12} md={4} lg={4} spacing={12}>
                  <Paper style={{padding: "5px",margin:"5px",display: "flex",overflow: "auto",flexDirection: "column", height: 240,backgroundColor: "#FFFF2E"}}>
                    <center>
                      <h2>{task[1]}</h2><br/>
                      <h4>{task[2]}</h4>
                      <h5>{task[3]}hrs</h5>
                      <h6>{task[4]}</h6>
                    </center>
                  </Paper>
                </Grid>
    ))}
</div>}



</div>);
}
}

export default Tasks;
