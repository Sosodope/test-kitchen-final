const userData = {
  fullName: 'Jessia Jones',
  email: 'jessjones101@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1602880884044-ccbeb35e053a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80',
  mySettings: {
    privateAccount: false,
    timeFormat: '12H'
  },
  myRecipes: [
    {
      id: 1,
      title: 'My Test Recipe 1',
      prepTime: '15 mins',
      steps: 'Step 1, step 2 step 3',
      ingredients: [
        {
          id: 1,
          name: 'Garlic',
          amount: '2 cloves'
        },
        {
          id: 2,
          name: 'Onions',
          amount: '2'
        }
      ],
      tags: [
        'vegetarian',
        'spicy',
        'indian'
      ]
    }
  ],
  savedRecipes: [
    {
      id: 100,
      title: 'Test Recipe 1',
      prepTime: '30 mins',
      steps: 'Step 1, step 2 step 3',
      ingredients: [
        {
          id: 1,
          name: 'Garlic',
          amount: '2 cloves'
        },
        {
          id: 2,
          name: 'Onions',
          amount: '2'
        }
      ],
      tags: [
        'vegetarian',
        'spicy',
        'indian'
      ]
    }
  ]
}

const recipesData = {
  editorsPicks: [
    {
      id: 1,
      title: 'My Test Recipe 1',
      prepTime: '15 mins',
      steps: 'Step 1, step 2 step 3',
      ingredients: [
        {
          id: 1,
          name: 'Garlic',
          amount: '2 cloves'
        },
        {
          id: 2,
          name: 'Onions',
          amount: '2'
        }
      ],
      tags: [
        'vegetarian',
        'spicy',
        'indian'
      ]
    }
  ],
  trending: [
    {
      id: 100,
      title: 'Test Recipe 1',
      prepTime: '30 mins',
      steps: 'Step 1, step 2 step 3',
      ingredients: [
        {
          id: 1,
          name: 'Garlic',
          amount: '2 cloves'
        },
        {
          id: 2,
          name: 'Onions',
          amount: '2'
        }
      ],
      tags: [
        'vegetarian',
        'spicy',
        'indian'
      ]
    }
  ],
  newest: [
    {
      id: 100,
      title: 'Test Recipe 1',
      prepTime: '30 mins',
      steps: 'Step 1, step 2 step 3',
      ingredients: [
        {
          id: 1,
          name: 'Garlic',
          amount: '2 cloves'
        },
        {
          id: 2,
          name: 'Onions',
          amount: '2'
        }
      ],
      tags: [
        'vegetarian',
        'spicy',
        'indian'
      ]
    }
  ]
}

export {
  userData,
  recipesData
}