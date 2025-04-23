import css from './Profile.module.css'

function Profile({ name, tag, location, image, stats }) {    
  return (    
      <div className={css.profile}>
        <div className={css.profileInfoContainer}>
          <img className={css.profileAvatar}
            src={image}
            alt="User avatar"
            width='200'
          />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>

        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span>Followers</span>
            <span className={css.profileFollowers}>{stats.followers}</span>
          </li>
          <li className={css.profileItem}>
            <span>Views</span>
            <span className={css.profileFollowers}>{stats.views}</span>
          </li>
          <li className={css.profileItem}>
            <span>Likes</span>
            <span className={css.profileFollowers}>{stats.likes}</span>
          </li>
        </ul>
      </div>    
  );
}

export default Profile;
