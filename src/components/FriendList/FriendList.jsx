import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.friendItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
