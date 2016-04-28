import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1> Home Page </h1>
				<li><Link to = "/chat"> 點擊進入 chat rooom</Link></li>
			</div>
		)
	}
}