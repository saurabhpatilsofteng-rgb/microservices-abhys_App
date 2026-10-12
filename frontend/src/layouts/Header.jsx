import {
    Search,
    Bell,
    User
} from "lucide-react";


function Header() {

    return (

        <header className="header">

            <div>

                <h3>
                    Learning Dashboard
                </h3>

                <p>
                    Keep learning and improve your skills.
                </p>

            </div>


            <div className="header-actions">

                <div className="search-box">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search topics..."
                    />

                </div>


                <button className="icon-button">

                    <Bell size={20} />

                </button>


                <div className="user-profile">

                    <User size={20} />

                    <span>
                        Profile
                    </span>

                </div>

            </div>

        </header>

    );

}


export default Header;