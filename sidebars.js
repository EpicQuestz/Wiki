module.exports = {
  categories: [
    {
      type: 'category',
      label: 'General',
	  collapsed: false,
      items: ['doc1', 'doc2']
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
          General: ['profs', 'roh1'],
		},
	    {
          Interiors: ['int1'],
		},
	  ],
    },

  ],
};