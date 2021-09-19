export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6147bd84228cbcaef8ac34ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-igz18eej',
                  apiId: '1265cb2a-c24f-4b9f-94bf-f92125d03ca8'
                },
                {
                  buildHookId: '6147bd84c3e2e21e991bf79d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vwth2g6x',
                  apiId: '2747f256-61c8-4930-8a82-84d4b045a634'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DazEB2/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vwth2g6x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
