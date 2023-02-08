import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from "../App"

const NavBar = () => {

    const { state, dispatch } = useContext(UserContext)
    const renderList = () => {
        if (state) {
            return [
                <li key={1}><Link to="/profile">Profile</Link></li>,
                <li key={2}><Link to="/createpost">CreatePost</Link></li>
            ]
        } else {
            return [
                <li key={3}><Link to="/signin">Sing in</Link></li>,
                <li key={4}><Link to="/signup">Sing up</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white">
                {console.log(state)}
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar