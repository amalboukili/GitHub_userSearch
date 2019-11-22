import React from 'react';

function UserGridItem(props) {
  const { user } = props;
  return (
    <div>
      <div className="card" style={cardStyle}>
        <div className="card-image">
          <img
            src={user.avatar_url}
            className="img-responsive"
            alt={user.login}
            style={imgStyle}
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">{user.login}</div>
          <div className="card-subtitle text-gray">
            <strong>{user.type}</strong>
          </div>
        </div>

        <div className="card-footer">
          <a
            className="btn"
            style={{
              backgroundColor: 'darkviolet',
              color: 'rgb(200, 207, 221)',
            }}
            href={user.html_url}
          >
            More details
          </a>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  paddind: '5px',
  display: 'flex',
  alignItems: 'center',
  //   marginTop: '10px',
};

const imgStyle = {
  borderRadius: '160px',
  marginTop: '10px',
};

export default UserGridItem;
