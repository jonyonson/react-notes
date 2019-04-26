import React, { Component } from 'react';
import './Note.css';
import moment from 'moment';
import { GoTrashcan } from 'react-icons/go';

class Note extends Component {
  state = {
    createdAt: moment().format('dddd MMMM Do YYYY, h:mm:ss a'),
  };

  handleTrashClick() {
    console.log('trash can click');
  }

  render() {
    return (
      <div className="Note">
        <div className="Note__header">
          <div className="Note__date">{this.state.createdAt}</div>
          <div onClick={() => this.handleTrashClick()}>
            <GoTrashcan className="Note__GoTrashcan" size="20px" color="000" />
          </div>
        </div>
        <div className="Note__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aspernatur voluptatibus
          iusto ea repellendus cupiditate sunt atque adipisci deleniti quaerat!
        </div>
      </div>
    );
  }
}

export default Note;
