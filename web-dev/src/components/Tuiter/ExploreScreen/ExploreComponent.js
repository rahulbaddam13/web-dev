import PostSummaryList from "../PostSummaryList/PostSummaryList";
const ExploreComponent = () => {
    return(<>
            <div className="wd-first-container ">
                <div className="wd-first-box">
                    <i className="fa fa-search fa-lg wd-search" aria-hidden="true"></i>
                    <input className="wd-search-rounded wd-search-white wd-placeholder" type="text" placeholder="Search Twitter"/>
                </div>
                <div className="wd-second-container container-fluid col-2">
                                    <form action="explore-settings.html">
                                        <button className="wd-gear-class">
                                            <i className="fas fa-cog fa-2x wd-gear"></i>
                                        </button>
                                    </form>
                </div>
            </div>
            
            <div className="col wd-width-percent wd-set-nav">
                                       <ul className="nav nav-tabs col-12 col-md-12 col-lg-12 col-xl-12">
                                           <li className="nav-item">
                                               <a className="nav-link active wd-override-active" href="for-you.html">For-you</a>
                                           </li>
                                           <li className="nav-item">
                                               <a className="nav-link wd-grey" href="trending.html">Trending</a>
                                           </li>
                                           <li className="nav-item">
                                               <a className="nav-link wd-grey" href="news.html">News</a>
                                           </li>
                                           <li className="nav-item">
                                               <a className="nav-link wd-grey" href="sports.html">Sports</a>
                                           </li>
                                           <li className="nav-item">
                                               <a className="nav-link wd-grey d-xs-none d-sm-none d-md-block" href="entertainment">Entertainment</a>
                                           </li>
                                       </ul>
                                   </div>

            <div>
            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="wd-width-more pt-3"
                                            alt="Responsive image"/>
                            <div className="wd-overlay">
                                           <h4 className="fw-bold wd-white">SpaceXs Starship</h4>
                                       </div>
                                   </div>
                       {PostSummaryList()}

    </>);
}
export default ExploreComponent;
