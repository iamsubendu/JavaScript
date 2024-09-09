const menuData = [
  {
    name: 'Menu 1',
    link: 'http://google.com',
    subitems: [
      {
        name: 'Menu 2',
        link: 'http://google.com',
      },
    ],
  },
  {
    name: 'Menu 3',
    link: 'http://google.com',
    subitems: [
      {
        name: 'Menu 4',
        link: 'http://google.com',
        subitems: [
          {
            name: 'Menu 5',
            link: 'http://google.com',
          },
          {
            name: 'Menu 6',
            link: 'http://google.com',
          },
        ],
      },
    ],
  },
];

// approach to store every name value

// we can use a recursive function to traverse
// through each item and its subitems(if any),
// collecting the name values into an array.

function collectNames(menuItems) {
  let names = [];
  console.log(names, '42');
  menuItems.forEach((item) => {
    names.push(item.name);

    if (item.subitems && item.subitems.length > 0) {
      // Recursively collect names from subitems
      console.log(names, '48');
      names = names.concat(collectNames(item.subitems));
    }
  });

  return names;
}

const allNames = collectNames(menuData);
console.log(allNames);
