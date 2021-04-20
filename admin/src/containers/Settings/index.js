import React from 'react'; // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import { Button } from '@buffetjs/core'; // eslint-disable-line import/no-unresolved
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // eslint-disable-line import/no-unresolved
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // eslint-disable-line import/no-unresolved
import pluginId from '../../pluginId';
import image from '../../../../admin/src/components/GrapesEditor/assets/img/demo.png';

const GeneralBlock = () => (
  <div>
    <h1>General</h1>
    <p>This section has no content yet.</p>
    <img src={image} style={{ margin: 'auto', maxWidth: '700px', display: 'block' }} />
  </div>
);
const AboutBlock = () => (
  <div>
    <h1>About</h1>
    <p>
      This plugin was created to design static page
    </p>
  </div>
);

const Settings = ({ settingsBaseURL }) => {
  return (
    <Switch>
      <Route component={GeneralBlock} path={`${settingsBaseURL}/${pluginId}/general`} />
      <Route component={AboutBlock} path={`${settingsBaseURL}/${pluginId}/about`} />
    </Switch>
  );
};

Settings.propTypes = {
  settingsBaseURL: PropTypes.string.isRequired,
};

export default Settings;
