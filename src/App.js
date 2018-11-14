import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Teams from './components/Teams';
import TeamPlayers from './components/TeamPlayers';
import Background from './components/Background';
import Players from './components/Players';
import PlayerProfile from './components/PlayerProfile';
import Matches from './components/Matches';
import Callback from './Callback';
import Account from './components/Account';
import MatchPage from './components/MatchPage';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

class App extends Component {

  

  componentWillMount() {
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  renderHeader = () => {
    const { t } = this.props;
    return (
      <header>
        <nav>
          <ul>
          <button onClick={() => this.changeLanguage('no')}>Norwegian</button>
      <button onClick={() => this.changeLanguage('en')}>English</button>
            <li><Link to='/'>{t('Home')}</Link></li>
            <li><Link to='/teams'>{t('Teams')}</Link></li>
            <li><Link to='/players'>{t('Players')}</Link></li>
            <li><Link to='/matches'>{t('Matches')}</Link></li>
          </ul>
          <ul className='account-nav'>
            {!this.props.auth.isAuthenticated() && <li><a onClick={e => this.props.auth.login()}>Log in</a></li>}
            {this.props.auth.isAuthenticated() && <li><Link to='/account'>My Account</Link></li>}
            {this.props.auth.isAuthenticated() && <li><a onClick={e => this.props.auth.logout()}>Log Out</a></li>}
          </ul>
        </nav>
      </header>
    )
  }

  createRoutes() {
    return (
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/callback" component={Callback} />
        {this.props.auth.isAuthenticated() && <Route path="/matches/:id" component={MatchPage} />}
        <Route path="/matches" component={Matches} />
        {this.props.auth.isAuthenticated() && <Route path="/players/:id" component={PlayerProfile} />}
        <Route exact path="/players" component={Players} />
        {this.props.auth.isAuthenticated() && <Route path="/teams/:id" component={TeamPlayers} />}
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/" component={LandingPage} />
        <Route component={LandingPage} />
      </Switch>
    )
  }

  render() {
    return <div className="App">
        <Background />
        {this.renderHeader()}
        {this.createRoutes()}
      </div>;
  }
}

export default withNamespaces()(App);
