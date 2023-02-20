import userInfo from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from './Friends/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile profile={userInfo}></Profile>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
