module.exports = {
    ci: {
      collect: {
        url: ['https://www.businessinsider.com/'], 
        numberOfRuns: 3, 
      },
      assert: {
        assertions: {
          'accessibility': ['error', { 
            'minScore': 0.86, 
          }],
        },
      },
      upload: {
        target: 'temporary-public-storage', 
      },
    },
  };