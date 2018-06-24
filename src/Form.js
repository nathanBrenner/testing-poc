import React, { Component } from 'react'

export class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	handleChange = (event) => this.setState({value: event.target.value});
	handleSubmit = (event) => {
		this.props.submit(this.state.value);
		event.preventDefault();
		this.setState({value: ''});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					todo:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form
