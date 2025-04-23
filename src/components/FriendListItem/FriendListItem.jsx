import css from './FriendListItem.module.css'

function FriendListItem({avatar, name, isOnline}) {
  return (
    <div>
      <img className={css.friendItemAvatar} src={avatar} alt="Avatar" width="70" />
      <p className={css.friendItemName}>{name}</p>
      <p className={css.friendItemOnline}>{isOnline}</p>
    </div>
  );
}

export default FriendListItem;
