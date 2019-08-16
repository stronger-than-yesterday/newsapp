import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                 {/* <div>
                 <div class="navbar">

                 <a href="#home">Home</a>
                  dropdown class is on line 12
                 <div class="dropdown">
                     <button class="dropbtn">Baby One More Time 
                     <i class="fa fa-caret-down"></i>
                     </button>
                     <div class="dropdown-content">
                     <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">...Baby One More Time</a>
                     <a href="#">Link 2</a>
                     <a href="#">Link 3</a>
                     </div>
                 </div> 
                 <div class="dropdown">
                     <button class="dropbtn">Oops I Did It Again 
                     <i class="fa fa-caret-down"></i>
                     </button>
                     <div class="dropdown-content">
                    
                     <a href="#">Link 2</a>
                     <a href="#">Link 3</a>
                     </div>
                 </div> 
                 </div> */}
                     <ul className="navbar">
                        <button>Home</button>
                        <div className="dropdown">
                            <button className="dropdownButton">Baby One More Time</button>
                            <div className="dropdownContent">
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">...Baby One More Time</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">(You Drive Me) Crazy</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">Sometimes</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">Soda Pop</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">Born To Make You Happy</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">From The Bottom Of My Broken Heart</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">I Will Be There</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">I Will Still Love You</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">Thinkin' About You</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">E-Mail My Heart</a>
                                <a href="https://en.wikipedia.org/wiki/...Baby_One_More_Time_(album)">The Beat Goes On</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdownButton">Oops I Did It Again</button>
                            <div className="dropdownContent">
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Oops!... I Did It Again</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Stronger</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Don't Go Knockin' on My Door</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">(I Can't Get No) Satisfaction</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Don't Let Me Be the Last to Know</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">What U See (Is What U Get)</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Lucky</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">One Kiss from You</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Where Are You Now</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Can't Make You Love Me</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">When Your Eyes Say It</a>
                                <a href="https://en.wikipedia.org/wiki/Oops!..._I_Did_It_Again_(album)">Dear Diary</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdownButton">Britney</button>
                            <div className="dropdownContent">
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">I'm a Slave 4 U</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Overprotected</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Lonely</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">I'm Not a Girl, Not Yet a Woman</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Boys</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Anticipating</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">I Love Rock 'n' Roll</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Cinderella</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Let Me Be</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">Bombastic Love</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">That's Where You Take Me</a>
                                <a href="https://en.wikipedia.org/wiki/Britney_(album)">What It's Like to Be Me</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button>In The Zone</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                        <div className="dropdown">
                        <button>Blackout</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                        <div className="dropdown">
                        <button>Circus</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                        <div className="dropdown">
                        <button>Femme Fatale</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                        <div className="dropdown">
                        <button>Britney Jean</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                        <div className="dropdown">
                        <button>Glory</button>
                            <div className="dropdownContent">

                            </div>
                        </div>
                    </ul> 
                </div>
            </div>
            
        )
    }
}

export default Navbar;