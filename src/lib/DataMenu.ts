export const menuItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'New Games', href: '/new-releases' },
    { id: 3, label: 'Genres', href: '/genres', isDropdown:true, dropdowncontent:[
      {label: "Action", href:"/genres/Action"},
      {label: "RPG", href:"/genres/RPG"},
      {label: "Free-to-Play", href:"/genres/free-to-play"},
    ] 
    },
    { id: 4, label: 'About Me', href: '/about' },
  ];
  