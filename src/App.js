import React from 'react';
import Routes from './Routes'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Scroll from './Scroll';
import firebase from './config/Fire'
import { connect } from 'react-redux';
import * as actions from './actions/UserActions'

class App extends React.Component {



  componentDidMount() {
    var idUser = '';
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        idUser = user.uid;
        firebase.database().ref('users/').on('value', (data) => {
          var users = data.val();
          for (var user in users) {
            if (users[user].userId === idUser) {
              this.props.setCurrentUser(users[user])
            }
          }
        })
      } else {
        this.props.setLogout();
      }
    })
  }

  showPageComponent = (routes) => {
    var menu = null;
    if (routes.length > 0) {
      menu = routes.map((item, index) => {
        return <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        ></Route>
      })
    }
    return <Switch>
      {menu}
    </Switch>
  }

  render() {
    // var user = firebase.auth().currentUser;
    // console.log(user);
    return (
      <BrowserRouter>
        <Scroll>
          <div className="App">
            <Header></Header>
            <Navbar />
            {this.showPageComponent(Routes)}
            {/* <Routes /> */}
            <Footer></Footer>
          </div>
        </Scroll>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => {
      dispatch(actions.setCurrentUser(user))
    },
    setLogout: () => {
      dispatch(actions.setLogout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
