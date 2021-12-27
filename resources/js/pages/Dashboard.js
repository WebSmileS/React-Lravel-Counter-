import React, {Component} from 'react';
import {connect} from 'react-redux';
import Http from '../Http';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // Initial state.
    this.state = {
      todo: null,
      error: false,
      data: [],
      guestCount: -1,
      userCount: -1,
      isShow : true,
    };

    // API endpoint.
    Http.get('/api/v1/auth/getCounter')
      .then((res) => {
        // dispatch(action.authLogin(res.data));
        let data = res.data;
        let guestcount = data['counters']['guestCounter'];
        let usercount = data['counters']['userCounter'];
        this.setState({guestCount: guestcount, userCount: usercount});

      })
      .catch((err) => {
        const {status, errors} = err.response.data;
        const data = {
          status,
          errors,
        };
      });
  }

  addUserCount = () => {
    Http.get('/api/v1/auth/addUserCounter')
      .then(({res}) => {
      })
      .catch(() => {
        this.setState({
          error: 'Sorry, there was an error saving your to do.',
        });
      });
  }

  addGuestCount = () => {
    Http.get('/api/v1/auth/addGuestCounter')
      .then(({res}) => {
      })
      .catch(() => {
        this.setState({
          error: 'Sorry, there was an error saving your to do.',
        });
      });
  }

  setShowState = () => {
    let showstate = this.state.isShow;
    this.setState({isShow: !showstate});
  }

  render() {

    const {data, error, guestCount, userCount,isShow} = this.state;
    return (
      <div className="container py-5">

        <button  type="submit" className="btn btn-success m-lg-5 showHideBtn" onClick={this.setShowState}>
          {isShow?'hide':'show'}
        </button>

        <div className="add-todos mb-5 showCounter">
          <h1 className="text-center mb-6">Counter View board</h1>
          {!isShow&&<div className="text-center">
            <h3 className="text-center mt-4">Welcome to my project</h3>
            <h5 className='text-center mt-3'> if you want to see counter values, just click <span className="text-success">show</span> Button on this screen</h5>
          </div>}
          {isShow && <form>
            <div className="form-group ">
              <div className='counterItem' >
                <h3  className="counttitle" >GuestCount : {guestCount > -1 && <span>{guestCount}</span>}</h3>
                <button  type="submit" className="btn btn-primary m-lg-5" onClick={this.addUserCount}>
                  plus
                </button>
              </div>
              <div className="counterItem">
                <h3 className="counttitle">userCount : {userCount > -1 && <span>{userCount}</span>}</h3>
                <button  type="submit" className="btn btn-primary m-lg-5" onClick={()=>{this.addGuestCount()}}>
                  plus
                </button>
              </div>
            </div>
            <h5 className="text-center mt-4"> if you want to increase count values, just click <span className="text-primary">plus</span> Button on this screen</h5>
          </form>}
        </div>
      </div>
  );
  }
  }



  export default Dashboard;
