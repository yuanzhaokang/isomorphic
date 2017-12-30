import {ABOUT} from 'common/action/action';
import {Label} from 'common/components';
import config from 'config/config';
import store from 'common/getStore';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import 'isomorphic-fetch';

class About extends PureComponent {
   componentDidMount() {
   }

   render() {
      return (
         <a href="/home">
            <Label label={'About --- ' + this.props.about} />
         </a>
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