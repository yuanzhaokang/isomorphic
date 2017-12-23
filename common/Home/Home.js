import {HOME} from 'common/action/action';
import {Label} from 'common/components';
import config from 'config/config';
import store from 'common/getStore';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import _ from 'lodash';

class Home extends PureComponent {
   componentDidMount() {
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

               res.text()
                  .then((data) => {
                     data = JSON.parse(data);
                     store.dispatch({
                        type: HOME,
                        home: data.home
                     });

                     resolve(data);
                  })
                  .catch(err => {
                     console.log(err);
                  });
            })
            .catch((error) => {
               console.error(error);
            });
      });
   };
}

function fetchNewData() {
   fetch(`${config.server}:${config.port}/req/getHome`)
      .then((res) => {
         res.json()
            .then((data) => {
               store.dispatch({
                  type: HOME,
                  home: data.home
               });
            });
      })
      .catch((err) => {
         console.error(err);
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