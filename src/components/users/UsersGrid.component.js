import React from 'react';
import UserGridItem from './UserGridItem.component';
import Spinner from '../layout/Spinner.component';

function UsersGrid(props) {
  const { users, loading } = props;
  const renderUser = () => {
    return users && users.length ? (
      <div className="container" slyle={style}>
        <div className="columns">
          {users.map((user) => (
            <div className="column col-4" style={colStyle}>
              <UserGridItem user={user} />
            </div>
          ))}
        </div>
      </div>
    ) : (
      ''
    );
  };

  return loading ? <Spinner /> : renderUser();
}

const style = {
  padding: '15px',
  marginTop: '15px',
};

const colStyle = {
  marginBottom: '10px',
};

export default UsersGrid;
