export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d0a0f4745ea0d0433437fb9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-k38qa7ev',
                  apiId: '6aab514b-25aa-4850-971b-af8432422eb3'
                },
                {
                  buildHookId: '5d0a0f47e1e64c45b0ac89ea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web',
                  apiId: '1b1998c1-ce8d-4f85-b3ec-56c440625b27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhaidarh/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
