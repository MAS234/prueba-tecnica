import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PedidosC({ username }) {
    console.log(username)
  return (
    <div>
      <h1>Nombre de usuario: {username}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.user.user.username,
  };
};

PedidosC.propTypes = {
  username: PropTypes.string,
};

export default connect(mapStateToProps)(PedidosC);
