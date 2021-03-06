import React, { Component, PropTypes } from 'react';

import './ThreadItem.css'

class ThreadItem extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  handleImageClick() {
  	const {name} = this.props;
  	this.context.router.push('/users/'+name);
  }

  render() {
    const {name, picture, content, time, onClick} = this.props;
    return (
    <li className="thread-item" onClick={onClick}>
		<div className="clearfix">
			<div className="thread-item_left">
				<img className="img-circle" 
                     src={picture}
                     width="50" height="50" alt="" className="img"
                     button onClick={this.handleImageClick.bind(this)}
                />
			</div>
			<div className="thread-item_right">
				<div className="thread-from">
					{name}
				</div>
            	<div>
					<span className="thread-content">{content}</span>
		    	</div>
				<span className="thread-time">{time}</span>
			</div>
		</div>
	</li>
    );
  }
}
ThreadItem.propTypes = {
  name:    PropTypes.string,
  picture: PropTypes.string,
  content: PropTypes.string,
  time:    PropTypes.string
}

export default ThreadItem;