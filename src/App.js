import user from './user.json';
import Profile from './components/Profile/Profile.jsx';

import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics.jsx';

import friends from './friends.json';
import FriendList from './components/FriendList/FriendList.jsx';

import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

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
      {/* 2 задача */}
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />
      {/* 3 задача */}
      <FriendList friends={friends} />
      {/* 4 задача */}
      <TransactionHistory items={transactions} />
    </div>
  );
}
