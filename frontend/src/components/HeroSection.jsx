const Hero = () => {
    return (
        <section class="schedule">
            <div class="container">
                <div class="schedule-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12 ">
                            <a href="/directory">
                                <div class="single-schedule first">
                                    <div class="inner">
                                        <div class="single-content d-flex align-items-center flex-column">
                                            <img src="/download.svg" width="50%" /><br />
                                                <h4>Alumni Directory</h4>
                                                <p style={{textAlign:"center"}}>Find fellow alumni and explore their careers</p>
                                        </div>
                                    </div>
                                </div></a>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <a href="/login">
                                <div class="single-schedule middle">
                                    <div class="inner">
                                        <div class="single-content d-flex align-items-center flex-column">
                                            <img src="/download (2).svg" width="40%" /><br />
                                                <h4>Connect</h4>
                                                <p style={{textAlign:"center"}}>Login or Signup to Access exclusive features and update your profile</p>
                                        </div>
                                    </div>
                                </div></a>
                        </div>
                        <div class="col-lg-4 col-md-12 col-12">
                            <a href="/events">
                                <div class="single-schedule last">
                                    <div class="inner">
                                        <div class="single-content d-flex align-items-center flex-column">
                                            <img src="/download (1).svg" width="35%" /><br />
                                                <h4>Events</h4>
                                                <p style={{textAlign:"center"}}>Stay updated on alumni gatherings and networking opportunities</p>
                                        </div>
                                    </div>
                                </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;