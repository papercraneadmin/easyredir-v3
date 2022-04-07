export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624f2489baddda29f42078f1',
                  title: 'Sanity Studio',
                  name: 'easyredir-v-3-studio',
                  apiId: '2e9214a5-0f9b-4f4c-ba51-013c320075ad'
                },
                {
                  buildHookId: '624f2489f641b53788c0b7ff',
                  title: 'Blog Website',
                  name: 'easyredir-v-3',
                  apiId: '30baf4f1-aef7-4ee5-ae87-0683c1842b39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/papercraneadmin/easyredir-v3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://easyredir-v-3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
