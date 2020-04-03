import React from "react";
import { connect } from "react-redux";

import Row from "./Row";

const RowList = props => {
  return (
    <div>
      <span className="text">
        Nombre d'utilisateurs : {props.userList.length}
      </span>
      {props.userList.map((user,id) => {
        return <Row key={id} username={user} />;
      })}
    </div>
  );
};

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
  return {
    // on accédera à ces donnnées dans le composant via : props.userList
    userList: reduxState.rowReducer.list
  };
};

// connexion du composant pour lui permettre de récupérer des données du state redux
export default connect(
  mapStateToProps,
  null
)(RowList);
