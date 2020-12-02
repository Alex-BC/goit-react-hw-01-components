import user from './components/Profile/user.json';

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

export default App;
