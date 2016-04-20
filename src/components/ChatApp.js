import React, { Component, PropTypes } from 'react';
import ThreadItem from './ThreadItem';
import MessageItem from './MessageItem';

import './ChatApp.css'

const initState = {
  newMessage:'',
  threads: [  
    {
      person:{
        name:'Mark',
        picture:'http://lorempixel.com/492/518/people/7/'
      },
      message: [
        {from_me:false, content:'對啊', time:'12:25'},
        {from_me:false, content:'試著', time:'12:26'},
        {from_me:false, content:'靠左邊嘛', time:'12:26'},
        {from_me:true, content:'換我了', time:'12:27'},
        {from_me:true, content:'有看到嗎???!!', time:'12:27'}
      ]
    },
    {
      person:{
        name:'Katharine',
        picture:'http://lorempixel.com/492/518/people/2/'
      },
      message: [
        {from_me:false, content:':)', time:'11:46'},
        {from_me:false, content:'今天吃什麼', time:'11:50'},
        {from_me:true, content:'嗚嗚 吃到不知道', time:'11:51'} 
      ]
    },
    {
      person:{
        name:'Marshall',
        picture:'http://lorempixel.com/492/518/people/9/'
      },
      message:[
        {from_me:false, content:'誒誒', time:'15:10'},
        {from_me:false, content:'＠＠＠', time:'15:12'},
      ]
    }
  ],
  currentPerson:1
};

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }
  handleThreadClick(index) {
    this.setState( {currentPerson: index} );
  }
  handleInputChange(event) {
    this.setState({ newMessage: event.target.value });
  }
  handleInputKeyDown(event) {
    var inputValue = event.target.value;
    const now = new Date();
    let { newMessage, threads, currentPerson } = this.state;
    if(event.keyCode === 13 && inputValue !=='') {
     threads[currentPerson].message.push({
       from_me:true, 
       content: newMessage, 
       time: ''+ now.getHours() +':'+ now.getMinutes()
     }) ;
     this.setState({
       newMessage:'',
       threads: threads
     });
   } 
  }
  
  renderThreadItem(thread, i) {
    const{person, message} = thread;
    const last_message = thread.message[message.length - 1];
    return (
      <ThreadItem 
        key={i}
        name={thread.person.name}
        picture={thread.person.picture}
        content={last_message.content}
        time={last_message.time}
        onClick={this.handleThreadClick.bind(this,i)}
      />);
  }
  renderMessage(message, i) {
    const{from_me, content, time} = message;
    return (
      <MessageItem 
        key={i}
        from_me={from_me}
        content={content}
        time={time}
      />);
  }
  render() {
    const{newMessage, threads, currentPerson} = this.state;
    const{person, message} = threads[currentPerson];
    return(
    <div className="chat-app clearfix">
		  <div className="chat-app_left">
			<div className="heading"><h3 className="messenger-title">Messanger</h3></div>
			<div className="thread-list">
        {threads.map(this.renderThreadItem, this)}
			</div>
		</div>
		  <div className="chat-app_right">
			<div className="heading">
				<div className="current-target">{person.name}</div>
			</div>
			<div className="message-list">
		    {message.map(this.renderMessage, this)}
			</div>
			<div className="footer">
				<input className="new-message" 
               type="text"
               value={newMessage}
               onChange={this.handleInputChange.bind(this) }
               onKeyDown={this.handleInputKeyDown.bind(this)}
        />
			</div>
		</div>
	  </div>
    );
  }
}

module.exports = ChatApp;