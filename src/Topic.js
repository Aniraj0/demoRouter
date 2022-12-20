import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Topics from './Topics';

const Topic = () => {

  let match = useRouteMatch();
  console.log(match);

  // function Topics(){
  //   let {topicId}= useParams();
  //   return <h3>Requested topic ID: {topicId}</h3>
  // }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/subtopic`}>SubTopic</Link>
        </li>
        <li>
          <Link to={`${match.url}/newtopic`}>NewTopic</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path="/subtopic">
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${match.path}/:topicId/`}>
          <Topics />
        </Route>
      </Switch>
    </div>
  );
};

export default Topic;