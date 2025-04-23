import css from './FriendListItem.module.css'

function FriendListItem({avatar, name, isOnline}) {
  return (
    <div>
      <img className={css.friendItemAvatar} src={avatar} alt="Avatar" width="55" />
      <p className={css.friendItemName}>{name}</p>
      <p className={`${css.friendItemStatus} ${isOnline ? css.friendItemOnline : css.friendItemOffline}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;
