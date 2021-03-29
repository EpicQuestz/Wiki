module.exports = {
  categories: [
    {
      type: 'category',
      label: 'Server Meta',
	    collapsed: false,
      items: [
        'doc1',
		     'builder',
		     'artist',
		     'staff'
	    ]
    },
    {
      type: 'category',
      label: 'Plugins',
	    collapsed: false,
      items: [
        'we1',
	    	'we2',
		    'voxel'
	    ]
    },
    {
      type: 'category',
      label: 'Building',
	    collapsed: false,
      items: [
        {
            General: ['int1', 'roh1'],
        },
        {
            Realism: ['profs', 'mount'],
        }
	    ]
    }
  ]
};