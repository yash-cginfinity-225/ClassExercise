import React, { useState } from 'react';
import './UserProfile.css';

const UserProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: '', avatar: '', bio: '' });

  const handleAddProfile = () => {
    if (newProfile.name && newProfile.avatar && newProfile.bio) {
      setProfiles([...profiles, newProfile]);
      setNewProfile({ name: '', avatar: '', bio: '' });
    }
  };

  const handleDeleteProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="user-profiles">
      <h1>Emplyee Profile Addition Dashboard</h1>

      <div className="add-profile-form">
        <input
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          placeholder="Avatar URL"
          value={newProfile.avatar}
          onChange={(e) => setNewProfile({ ...newProfile, avatar: e.target.value })}
        />
        <textarea
          placeholder="Bio"
          value={newProfile.bio}
          onChange={(e) => setNewProfile({ ...newProfile, bio: e.target.value })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>

      <div className="profiles-list">
        {profiles.map((profile, index) => (
          <div key={index} className="user-profile">
            <img src={profile.avatar} alt="Avatar" className="avatar" />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
            <button onClick={() => handleDeleteProfile(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfiles;