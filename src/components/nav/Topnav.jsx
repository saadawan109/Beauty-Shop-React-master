function Topnav() {
    return (
        <>
            <section className="topbar">
                <div className="container">
                    <div className="row pt-3 ">
                        <div className="col-md-4 ">
                            <div className="socialarea d-flex gap-3 text-center">
                                <h5 className="mb-0 mt-1">Follow us</h5>
                                <div className="topicons d-flex gap-2">
                                    <i class="ri-instagram-line"></i>
                                    <i class="ri-twitter-x-fill"></i>
                                    <i class="ri-facebook-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <p className="offer">Sign up get 20% Off for all collection</p>
                        </div>
                        <div className="col-md-4">
                            <div className="contactarea text-end ">
                                <p><i class="ri-phone-line"></i> 1(100)234-567</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}


export default Topnav;