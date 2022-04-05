import {useDispatch} from "react-redux";
import {updateTuit}
  from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
const dispatch = useDispatch();
  return (
  <div className="wd-fifth-container">

                        <div>

                                <button className="wd-button">

                                    <i className="fa fa-thin fa-comment wd-type-one"> {tuit.comments}</i>
                                </button>

                        </div>
                        <div>

                                <button className="wd-button">
                                    <i className="fa fa-thin fa-retweet wd-type-one"> {tuit.retuits}</i>
                                </button>

                        </div>
                        <div>
                        <button className="wd-button">

      <div
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1,
          })
        }
        className="wd-flex"
      >
        <i
          className={`${
            tuit.liked ? " wd-type-one " : "wd-type-one "
          }fa fa-thumbs-up`}
        ></i>
        <span className={`wd-grey`}>{tuit.likes}</span>

</div>
</button>
</div>
<div>
<button className="wd-button">
      <div
        onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            dislikes: tuit.dislikes + 1,
          })
        }
        className="wd-flex"
      >
        <i
          className={`${
            tuit.dislikes ? " wd-type-one " : "wd-type-one "
          }fa fa-thumbs-down`}
        ></i>
        <span className={`wd-grey`}>{tuit.dislikes}</span>

</div>
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

