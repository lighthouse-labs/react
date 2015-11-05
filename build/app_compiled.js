'use strict';

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
	displayName: 'Parent',

	getInitialState: function getInitialState() {
		return {
			count: 0
		};
	},
	incrementCount: function incrementCount() {
		console.log('increment count');
		this.setState({
			count: ++this.state.count
		});
	},
	render: function render() {
		debugger;
		return React.createElement(
			'div',
			null,
			React.createElement(Child1, { count: this.state.count }),
			React.createElement(Child2, { increment: this.incrementCount })
		);
	}
});

var Child1 = React.createClass({
	displayName: 'Child1',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				null,
				'Child1'
			),
			this.props.count
		);
	}
});

var Child2 = React.createClass({
	displayName: 'Child2',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				null,
				'Child2'
			),
			React.createElement(
				'button',
				{ onClick: this.props.increment },
				'Increment!'
			)
		);
	}
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));
