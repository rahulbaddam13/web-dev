const WhoToFollowListItem = (who) =>  {
return(` <li class="list-group-item wd-bg-list wd-white">
            <img src = ${who.avatarIcon} class="rounded-circle wd-img wd-img-width-all"/>
            <p class="wd-bold d-inline fw-bold"> ${who.userName}<i class="fa fa-check wd-tick-left"></i></p>
            <button type="button" class="btn btn-primary wd-bt-white fw-bold rounded-pill wd-follow-one">Follow</button>
            <br/>
            <p class="d-inline wd-left-move wd-handle">@${who.handle}</p>


         </li>
 `);
}
export default WhoToFollowListItem;