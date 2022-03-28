import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (



  <div className="wd-fifth-container">

                        <div>

                                <button className="wd-button">
                                    <i className="fa fa-thin fa-comment wd-type-one"> {tuit.stats.comments}</i>
                                </button>

                        </div>
                        <div>

                                <button className="wd-button">
                                    <i className="fa fa-thin fa-retweet wd-type-one"> {tuit.stats.retuits}</i>
                                </button>

                        </div>


                        <div>

                        <button className="wd-button">

                        <span onClick={likeTuit} className="wd-type-one">
                        {
                        tuit.liked &&
                        <i className="fa fa-solid fa-heart wd-type-two"></i>
                        }
                        {
                        !tuit.liked &&
                        <i className="fa fa-solid fa-heart wd-type-one"></i>
                        }
                        {tuit.stats && tuit.stats.likes}
                        </span>

                        </button>

                                                </div>
                        <div>

                                <button className="wd-button">
                                    <i className=" fas fa-upload wd-type-one"></i>
                                </button>

                        </div>
                    </div>




  );
}
export default TuitStats;

