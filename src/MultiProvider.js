import { createElement } from 'react';


export default function({ providers, children }) {
  let node = children;

  [...providers].reverse().forEach(provider => {
    let props = null;

    if (Array.isArray(provider)) {
      [provider, props] = provider;
    }

    node = createElement(provider, props, node);
  });

  return node;
}
