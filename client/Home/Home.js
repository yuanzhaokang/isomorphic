import {HOME} from '../../common/action/action';
import {Label} from '../components';
import config from '../../config/config';
import store from '../../common/getStore';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import _ from 'lodash';

class Home extends PureComponent {
   componentDidMount() {
      try {
         if(__isServer) {
            return;
         }
      } catch(e) {
      }

      Home.fetchData(store);
   }

   render() {
      return <Label label={'Home --- ' + this.props.home} onClick={this.props.fetchNewData} />;
   }

   static fetchData(store) {
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
                        home: data.home
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

function fetchNewData() {
   fetch(`${config.server}:${config.port}/data/home.json`)
      .then((res) => {
         res.json()
            .then((data) => {
               store.dispatch({
                  type: HOME,
                  home: data.home
               });
            });
      });
}

const mapStateToProps = (state, ownProps) => {
   return {
      home: state.home
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      fetchNewData: fetchNewData
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);