import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <div>
      {/* 1 задача */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
