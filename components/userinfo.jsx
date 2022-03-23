import React from 'react';

function UserInfo(props) {
  return (
    <div className="userinfo">
      <form className="userinfo-form">
        <div className="userinfo-header">
          <h1 className="userinfo-title">User Info</h1>
        </div>
        <div className="userinfo-flex">
          <div className="half">
            {' '}
            <label htmlFor="" className="userinfo-label">
              Full Name
            </label>
            <input type="text" className="userinfo-input" />
          </div>
          <div className="half">
            <label htmlFor="" className="userinfo-label">
              Birth Day
            </label>
            <input type="text" className="userinfo-input" />
          </div>
        </div>

        <div className="userinfo-flex">
          <div className="half">
            <label htmlFor="" className="userinfo-label">
              Sexe
            </label>
            <input type="text" className="userinfo-input" />
          </div>
          <div className="half">
            <label htmlFor="" className="userinfo-label">
              Phone Number
            </label>
            <input type="text" className="userinfo-input" />
          </div>
        </div>

        <div className="userinfo-row">
          <label htmlFor="" className="userinfo-label">
            Email
          </label>
          <input type="text" className="userinfo-input" />
        </div>
        <div className="userinfo-footer">
          <button className="userinfo-submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
