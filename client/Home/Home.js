import {HOME} from '../../common/action/action';
import {Label} from '../components';
import config from '../../config/config';
import store from '../../common/getStore';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import _ from 'lodash';

class Home extends PureComponent {
   componentWillMount() {
      try {
         if(__isClient) {
            console.log('--- is clinet ---> ', window.serverState);
         }
      } catch(error) {

      }
   }

   componentDidMount() {
      console.log("------- did mount --------");
      if(_.isEqual(store.getState(), window.serverState)) {
         return;
      }

      Home.fetchData(store);
   }

   render() {
      console.log('render --------');
      return <Label label={'Home --- ' + this.props.home} />;
   }

   static fetchData(store) {
      console.log("------- fetch --------");
      return new Promise((resolve, rej) => {
         fetch(config.server + ":" + config.port + '/data/a.json')
            .then((res) => {
               if(res.status != 200) {
                  rej("error");
               }

               res.json()
                  .then((data) => {
                     store.dispatch({
                        type: HOME,
                        home: 'data.home'
                     });

                     resolve(data);
                  });
            })
            .catch((error) => {
               console.error(error);
            });
      });
   };
}

const mapStateToProps = (state, ownProps) => {
   return {
      home: state.home
   };
};

export default connect(mapStateToProps)(Home);