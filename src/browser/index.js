/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {render} = require('./core');
  const {Browser} = require('./browser');
  const {readSession, resetSession} = require('./actions');

  // See issue #218
  // render(Browser, readSession() || resetSession(), document.body);
  render(Browser, resetSession(), document.body);

});
