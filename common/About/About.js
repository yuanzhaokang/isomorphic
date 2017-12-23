import {ABOUT} from '../action/action';
import {Label} from '../components';
import config from '../../config/config';
import store from '../getStore';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
import _ from 'lodash';

class About extends PureComponent {
   componentDidMount() {
   }

   render() {
      return (
         <Link to={{
            pathname:'/home'
         }}>
            <Label label={'About --- ' + this.props.about} />
            <a href='/home'>To Home</a>
         </Link>
      );
   }

   static fetchData(store) {
      return new Promise((resolve, rej) => {
         fetch(`${config.server}:${config.port}/data/a.json`)
            .then((res) => {
               res.json()
                  .then((data) => {
                     store.dispatch({
                        type: ABOUT,
                        about: data.about
                     });
                     resolve(data);
                  })
                  .catch((err) => {
                     rej(err);
                  })
            })
            .catch((error) => {
               console.error(error);
            })
      });
   };
}

const mapStateToProps = (state, ownProps) => {
   return {
      about: state.about
   };
};

export default connect(mapStateToProps)(About);