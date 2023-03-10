import {Profile} from './Profile'
import user from 'user.json'
import { Statistics } from './Statistics';
import data from 'data.json'
import { FriendList } from './FriendList';
import friends from 'friends.json'
import { TransactionHistory } from './TransactionHistory';
import transactions from 'transactions.json'

// console.log(user)
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <div>
        <Profile
          username={user.username }
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
         */}
      {/* <div>
        <FriendList friends={friends} />
      </div> */}
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
