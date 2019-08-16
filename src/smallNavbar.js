import React from 'react';

class SmallNavbar extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <ul className="navbar" id="smallNavbar">
                        <li>Rainbow Fantasy</li>
                        <li>Believe</li>
                        <li>Curious</li>
                        <li>Fantasy</li>
                        <li>Midnight Fantasy</li>
                        <li>Hidden Fantasy</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SmallNavbar;