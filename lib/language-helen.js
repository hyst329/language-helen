'use babel';

import { CompositeDisposable } from 'atom';
import packageConfig from './config-schema.json';

export default {

  languageHelenView: null,
  modalPanel: null,
  subscriptions: null,
  config: packageConfig,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-helen:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  helmake() {
    console.log('Running helmake...');
    var helmake = atom.config.get('helmakePath');
  }

};
