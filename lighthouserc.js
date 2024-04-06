module.exports = {
    ci: {
      collect: {
        url: ['https://www.businessinsider.com/'], 
        numberOfRuns: 1, 
      },
      assert: {
        assertions: {
          'accessibility': ['error', { 
            'minScore': 0.82, 
          }],
        },
      },
      upload: {
        target: 'temporary-public-storage', 
      },
    },
  };