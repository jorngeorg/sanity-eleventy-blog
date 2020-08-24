export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f43ea61f2d58c3308093973',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fo2yu71b',
                  apiId: 'e469b5f4-c811-43e4-b1a1-037909f093bd'
                },
                {
                  buildHookId: '5f43ea61c66e693369257f98',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-d9puq93u',
                  apiId: 'ca6d2f7b-8e8d-48ca-a4c4-f08a3a65e11a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorngeorg/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-d9puq93u.netlify.app', category: 'apps'}
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
