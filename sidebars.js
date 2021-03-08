module.exports = {
  //someSidebar: {
  //  Docusaurus: ['doc1', 'doc2', 'doc3'],
  //  Features: ['mdx'],
  //},
  categories: [
    {
      type: 'category',
      label: 'General',
      items: ['doc1', 'doc2']
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [
        'doc3',
        {
          WorldEdit: [
            'doc1',
            'doc2'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Building',
      items: [
        'doc3',
        {
          'Rohan Project': [
            'doc1',
            'doc2'
          ]
        }
      ]
    }

  ]
};
