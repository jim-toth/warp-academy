/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Elementary',
      items: [
        { type: 'doc', label: 'Blockchain', id: 'elementary/blockchain' },
        { type: 'doc', label: 'Arweave', id: 'elementary/arweave' },
        { type: 'doc', label: 'SmartWeave', id: 'elementary/smartweave' },
        { type: 'doc', label: 'Environment', id: 'elementary/environment' },
      ],
    },
    {
      type: 'category',
      label: 'Ardit',
      items: [
        { type: 'doc', label: 'Intro', id: 'ardit/introduction/intro' },
        {
          type: 'category',
          label: 'Implementation',
          items: [
            {
              type: 'doc',
              label: 'Post message',
              id: 'ardit/implementation/post-message',
            },
            {
              type: 'doc',
              label: 'Voting',
              id: 'ardit/implementation/voting',
            },
            {
              type: 'doc',
              label: 'Read message',
              id: 'ardit/implementation/read-message',
            },
            {
              type: 'doc',
              label: 'Handle',
              id: 'ardit/implementation/handle',
            },
          ],
        },

        {
          type: 'category',
          label: 'Tests',
          items: [
            {
              type: 'doc',
              label: 'Preparations',
              id: 'ardit/tests/preparations',
            },
            {
              type: 'doc',
              label: 'Execution',
              id: 'ardit/tests/execution',
            },
          ],
        },
        {
          type: 'category',
          label: 'Deployment',
          items: [
            {
              type: 'doc',
              label: 'Deployment',
              id: 'ardit/deployment/deployment',
            },
          ],
        },
        {
          type: 'category',
          label: 'Application',
          items: [
            {
              type: 'doc',
              label: 'Initialization',
              id: 'ardit/application/initialization',
            },
            {
              type: 'doc',
              label: 'Interactions',
              id: 'ardit/application/interactions',
            },
          ],
        },
      ],
    },
    { type: 'doc', label: 'EVM wallet', id: 'evm-wallet' },
    {
      type: 'category',
      label: 'PST',
      items: [
        { type: 'doc', label: 'Intro', id: 'pst/introduction/intro' },
        {
          type: 'category',
          label: 'Profit Sharing',
          items: [
            {
              type: 'doc',
              label: 'Profit Sharing Tokens',
              id: 'pst/profit-sharing/profit-sharing-tokens',
            },
            {
              type: 'doc',
              label: 'Profit Sharing Communities',
              id: 'pst/profit-sharing/profit-sharing-communities',
            },
          ],
        },
        {
          type: 'category',
          label: 'Writing PST contract',
          items: [
            {
              type: 'doc',
              label: 'Preparations',
              id: 'pst/writing-pst-contract/preparations',
            },
            {
              type: 'doc',
              label: 'Initial State',
              id: 'pst/writing-pst-contract/initial-state',
            },
            {
              type: 'doc',
              label: 'Contract Source',
              id: 'pst/writing-pst-contract/contract-source',
            },
          ],
        },
        {
          type: 'category',
          label: 'Writing tests',
          items: [
            {
              type: 'doc',
              label: 'Networks',
              id: 'pst/tests/networks',
            },
            {
              type: 'doc',
              label: 'Preparations',
              id: 'pst/tests/preparations',
            },
            {
              type: 'doc',
              label: 'Execution',
              id: 'pst/tests/execution',
            },
          ],
        },
        { type: 'doc', label: 'Deployment', id: 'pst/deployment/deployment' },
        {
          type: 'doc',
          label: 'Frontend Environment',
          id: 'pst/frontend-environment/frontend-environment',
        },
        {
          type: 'category',
          label: 'SmartWeave in browser',
          items: [
            {
              type: 'doc',
              label: 'Preparations',
              id: 'pst/smartweave-in-browser/preparations',
            },
            {
              type: 'doc',
              label: 'Interacting with contract',
              id: 'pst/smartweave-in-browser/interacting-with-contract',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'LOOT',
      items: [
        { type: 'doc', label: 'Intro', id: 'loot/introduction/intro' },
        {
          type: 'category',
          label: 'Implementing contract',
          items: [
            {
              type: 'doc',
              label: 'Contract state',
              id: 'loot/implementation/contract-state',
            },
            {
              type: 'doc',
              label: 'Contract logic',
              id: 'loot/implementation/contract-logic',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Testing contract',
          id: 'loot/tests/testing-contract',
        },
        {
          type: 'doc',
          label: 'Deployment',
          id: 'loot/deployment/deployment',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dex',
      items: [
        { type: 'doc', label: 'Intro', id: 'dex/introduction/intro' },
        {
          type: 'category',
          label: 'Implementing contract',
          items: [
            {
              type: 'doc',
              label: 'Adding liquidity',
              id: 'dex/implementation/adding-liquidity',
            },
            {
              type: 'doc',
              label: 'Calculating price',
              id: 'dex/implementation/calculating-price',
            },
            {
              type: 'doc',
              label: 'Swapping tokens',
              id: 'dex/implementation/swapping-tokens',
            },
            {
              type: 'doc',
              label: 'Removing liquidity',
              id: 'dex/implementation/removing-liquidity',
            },
          ],
        },
        {
          type: 'doc',
          label: 'Testing contract',
          id: 'dex/tests/testing-contract',
        },
        {
          type: 'doc',
          label: 'Deployment',
          id: 'dex/deployment/deployment',
        },
      ],
    },
  ],
};

module.exports = sidebars;
