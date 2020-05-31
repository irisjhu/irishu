import React, {Component} from 'react';
import Emoji from 'a11y-react-emoji';

class Footer extends Component {
  render () {
    return (
        <footer>
            Designed &amp; Built by Iris Hu <Emoji symbol="💚" label="green heart" />
        </footer>
    );
  }
}

export default Footer;
