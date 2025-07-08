import { Link } from "react-router-dom";
import type {User} from "../../interface/types"
import "./profile.scss";

interface ProfileProps {
  user: User | null;
}


function Profile({user}:ProfileProps) {
  const userData = user

  return (
    <main>
      <section>
        <h1 className="heading">
          <Link to="/dashboard">
            <i className="bi bi-arrow-left pe-3"></i>
          </Link>
          Welcome, {userData?.name}
        </h1>
      </section>

      <section className="profile-card mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 profile-main mb-4">
              <div className="profile-letter">
                {userData?.name
                  ? userData?.name.split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase()
                  : 'NA'}
              </div>
              <div className="profile-content">
                <span>{userData?.name}</span>
                <p className="mb-0">{userData?.email}</p>
              </div>
            </div>
            <form className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="profile-context">
                    <label htmlFor="userId">User ID</label>
                    <input type="number" id="userId" className="form-control" value={userData?.id ? 12345678 + userData.id : ''} readOnly />
                  </div>

                  <div className="profile-context">
                    <label htmlFor="userEmail">Email ID</label>
                    <input
                      type="text"
                      id="userEmail"
                      className="form-control"
                      value={userData?.email || ''}
                      readOnly
                    />
                  </div>

                  <div className="profile-context">
                    <label htmlFor="userPhone">Phone</label>
                    <input
                      type="text"
                      id="userPhone"
                      className="form-control"
                      value={userData?.phone || ''}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="profile-context">
                    <label htmlFor="userName">Name</label>
                    <input type="text" 
                    id="userName" 
                    className="form-control"
                    value={userData?.name || ''}
                      readOnly 
                    />
                  </div>
                  <div className="profile-context">
                    <label htmlFor="userAddress">Address</label>
                    <input
                      type="text"
                      id="userAddress"
                      className="form-control"
                      value={
                        userData?.address
                          ? `${userData?.address.street}, ${userData?.address.city}, ${userData.address.zipcode}`
                          : ''
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
