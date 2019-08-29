report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01247576368_entire-document_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20190829-151849\\01247576368_entire-document_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "01247576368_entire-document_0_document_0_desktop.png",
        "label": "entire-document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 37
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01247576368_single_block_0_qa-block_0_desktop.png",
        "test": "..\\bitmaps_test\\20190829-151849\\01247576368_single_block_0_qa-block_0_desktop.png",
        "selector": "#qa-block",
        "fileName": "01247576368_single_block_0_qa-block_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -44,
            "height": -44
          },
          "misMatchPercentage": "33.50",
          "analysisTime": 29
        },
        "diffImage": "..\\bitmaps_test\\20190829-151849\\failed_diff_01247576368_single_block_0_qa-block_0_desktop.png"
      },
      "status": "fail"
    }
  ]
});