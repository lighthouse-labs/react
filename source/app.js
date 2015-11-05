console.log("hello world");

// var HelloWorld = React.createClass({
// 	render: function(){
// 		console.log(this);
// 		return <h1>Hello World!</h1>
// 	}
// })

//Specify the Tag and the Item you want to attach it to
// ReactDOM.render(<HelloWorld/>,document.getElementById('app'));


// var Greetings = React.createClass({
// 	render: function(){
// 		console.log(this);
// 		return 	(
// 					<div>
// 						<Greeting text="Bonjour!"/>
// 						<Greeting text="Hello!"/>
// 					</div>
// 				) 
			

// 	}
// })

// var Greeting = React.createClass({
// 	render: function(){
// 		console.log(this);
// 		return <h1>{this.props.text}</h1>
// 	}
// })

// var Greeting = React.createClass({
// 	componentDidUpdate: function(){
// 		console.log('componentDidUpdate');
// 	},
// 	componentDidMount: function(){
// 		console.log('componentDidMount');
// 	},
// 	getInitialState: function(){
// 		console.log('getInitialState');
// 		return 	{
// 					text:""
// 				}
// 	},
// 	inputChange: function(event){
// 		// console.log('input changed');
// 		// debugger;
// 		// debugger;
// 		// console.log(this.refs.textInput.value);
// 		//event.target.value
// 		// debugger;
// 		this.setState({
// 			text:this.refs.textInput.value
// 		})
// 	},
// 	render: function(){
// 		console.log('render');
// 		return 	(
// 					<div>
// 						<h1>{this.state.text}</h1>
// 						<input ref="textInput" type="text" onChange={this.inputChange}></input>
// 					</div>
// 				)
// 	}
// })

var Parent = React.createClass({
	getInitialState: function(){
		return 	{
					count:0
				}
	},
	incrementCount: function(){
		console.log('increment count');
		this.setState({
			count:++this.state.count
		})
	},
	render: function(){
		debugger;
		return 	(
					<div>
						<Child1 count={this.state.count}/>
						<Child2 increment={this.incrementCount}/>
					</div>
				)
	}
});

var Child1 = React.createClass({
	render: function(){
		return 	(	
					<div>
						<h2>Child1</h2>
						{this.props.count}
					</div>
					
				)
	}
});

var Child2 = React.createClass({
	render: function(){
		return 	(
					<div>
						<h2>Child2</h2>
						<button onClick={this.props.increment}>Increment!</button>
					</div>	
				)
	}
});

ReactDOM.render(<Parent/>,document.getElementById('app'));














