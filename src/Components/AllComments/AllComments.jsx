import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment';



class AllComments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newArray:[],
      filter: 'High to Low',
      errMsg: '',


    }
    this.filterComments = this.filterComments.bind(this)
  }

  //as soon as the page loads, the method reaches out to the database to get the information and set it to state in this component. Use the api key in the headers in order to access the information like a password. 
  componentDidMount() {
    axios.get('https://shakespeare.podium.com/api/reviews', {
      method: 'POST',
      headers: {
        'x-api-key': 'H3TM28wjL8R4#HTnqk?c'
      }
    }).then(res => {
      console.log(res.data)
      this.setState({ comments: res.data })
    })
      .catch(err => {
        console.log(err);
        this.setState({
          errMsg: 'Error with getting data'
        })
      })



  }

  //this if else statement goes takes the data that had been mapped over and sorts it by rating either from High ratings to low ratings or low ratings to high. 

  filterComments() {
    const {comments, filter}=this.state;
    if (this.state.filter === 'High to Low') {
      return this.state.comments.sort(function (a, b) {
        return b.rating - a.rating
      })

    } else if (this.state.filter === 'Low to High') {
      return this.state.comments.sort(function (a, b) {
        return a.rating - b.rating
      })
    }

  }



  render() {
    console.log(this.state.filter, 'this is filter')
    return (
      <div>

        <div className='bottom-header'>

          <div className='group-type-container'>



            <div className="dropdown">
              <button className="dropbtn">{this.state.filter} <img alt='drop down arrow' src={require('../../assets/dropdown.svg')} /></button>
              <div className="dropdown-content">

                <div onClick={() => this.setState({ filter: 'High to Low' })}>Rating: High to Low</div>
                <div onClick={() => this.setState({ filter: 'Low to High' })}>Rating: Low to High</div>
                


              </div>
            </div>


          </div>

          {/* terminal error being cause by my method and information not being re-rendered when state is changed.  */}
          <button className='button-button' onClick={this.filterComments()}>filter</button>
        </div>
        <div className="App">
          {/* //this is where I map over the comments array and display the fields  */}
          {
            this.state.comments.map((comment, index) => (
              <div key={index} className='info-container'>
                <h1>{comment.author}</h1>
                Rating: <h4>{comment.rating}</h4>

                <div className={this.state.toggle ? 'bottom-container' : 'no-bottom'} >
                  <h3>{comment.body}</h3>
                  {/* {//Here I use moment to filter the long ugly date that was provided and make it into just the month and year.} */}
                  <h4><Moment format="MM/YYYY">{comment.publish_date}</Moment></h4>
                </div>


              </div>
            ))}

        </div>
        
      </div>
    );
  }
}

export default AllComments;

