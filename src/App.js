import logo from './logo.svg';
import './App.css';
import React from 'react';

class IndecisionApp extends React.Component {
  render (){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Action extends React.Component {
  render (){
    return (
      <div>
        <button>what should i do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render (){
    return (
      <div>
        options component here
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render (){
    return (
      <div>
        option component here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render (){
    return (
      <div>
        add option component here
      </div>
    )
  }
}

class Header extends React.Component {
  render (){
    return (
      <div>
        <h1>Title: computer</h1>
        <h2>sub title: computer making a digital world</h2>
      </div>
    )
  }
}

export default IndecisionApp;
