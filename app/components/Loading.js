const React = require('react');
const PropTypes = require('prop-types');

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300
  };

  state = {
    text: this.props.text,
    speed: this.props.speed
  }

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

module.exports = Loading;
